async function startObjectDetection() {
    const videoElement = document.getElementById('videoElement');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const waitingMessage = document.getElementById('waitingMessage');

    try {
        const stream = await getPreferredCameraStream();

        videoElement.srcObject = stream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;

            const modelPromise = cocoSsd.load();

            modelPromise.then(model => {
                async function detectFrame() {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                    waitingMessage.style.display = 'block';

                    const predictions = await model.detect(videoElement);

                    waitingMessage.style.display = 'none';

                    predictions.forEach(prediction => {
                        ctx.beginPath();
                        ctx.rect(...prediction.bbox);
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = 'green';
                        ctx.fillStyle = 'green';
                        ctx.stroke();

                        const textWidth = ctx.measureText(`${prediction.class} (${prediction.score.toFixed(2)})`).width;
                        ctx.fillRect(prediction.bbox[0], prediction.bbox[1] - 20, textWidth + 8, 20);

                        ctx.fillStyle = 'white';
                        ctx.fillText(`${prediction.class} (${prediction.score.toFixed(2)})`, prediction.bbox[0] + 4, prediction.bbox[1] - 5);
                    });

                    requestAnimationFrame(detectFrame);
                }

                detectFrame();
            }).catch(error => {
                console.error('Error loading model:', error);
            });
        };
    } catch (error) {
        console.error('Error accessing the webcam:', error);
        waitingMessage.innerText = 'Failed to access camera';
        waitingMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        waitingMessage.style.display = 'block';
    }
}

async function getPreferredCameraStream() {
    const constraints = {
        video: {
            facingMode: { ideal: 'environment' }
        }
    };

    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    if (!stream) {
        return navigator.mediaDevices.getUserMedia({ video: true });
    }

    return stream;
}

document.addEventListener('DOMContentLoaded', () => {
    startObjectDetection();
});