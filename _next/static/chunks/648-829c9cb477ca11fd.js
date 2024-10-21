"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{1648:function(e,t,r){r.d(t,{Z:function(){return components_Layout}});var a=r(5893),n=r(9008),s=r.n(n),l=r(1163),i=r(1664),o=r.n(i),c=r(470);let d=[{name:"github",href:"https://github.com/IvanGael",icon:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})},{name:"linkedin",href:"https://www.linkedin.com/in/ivan-apedo/",icon:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}],m=[{name:"Me",href:"/",current:!0},{name:"Skills",href:"#skills",current:!1},{name:"Works",href:"#works",current:!1}];function Footer(){return(0,a.jsxs)("footer",{className:"bg-neutral-900 text-neutral-300 dark:text-neutral-400",id:"content",children:[(0,a.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5",children:[(0,a.jsx)("div",{className:"col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 2xl:col-span-2 ",children:(0,a.jsx)("div",{className:"flex gap-2 pt-6 sm:pt-6 md:pt-6 lg:pt-12 max-w-[300px]",children:d.map(e=>(0,a.jsx)(o(),{href:e.href,target:"_blank",children:(0,a.jsx)("div",{className:"w-9 h-9 p-2 text-white ".concat(c.M.mainBgColor," hover:opacity-75 rounded-full flex items-center justify-center"),children:e.icon})},e.name))})}),(0,a.jsx)("div",{children:m.map(e=>(0,a.jsx)(o(),{href:e.href,className:"hover:".concat(c.M.mainTextColor,"   md:text-sm my-4 grid"),children:e.name},e.name))})]}),(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-6 text-center border-t border-neutral-800",children:(0,a.jsxs)(o(),{href:"https://www.linkedin.com/in/ivan-apedo/",target:"_blank",className:"text-neutral-300 dark:text-neutral-400 text-sm hover:".concat(c.M.mainTextColor," dark:hover:").concat(c.M.mainTextColor," transition duration-300"),children:["\xa9 Copyright Ivan APEDO ",new Date().getFullYear(),". All rights reserved."]})})]})}var h=r(7294),x=r(2010);function ThemeSwitchButton(){let[e,t]=(0,h.useState)(!1),{resolvedTheme:r,setTheme:n}=(0,x.F)();return(0,h.useEffect)(()=>{n("light"),t(!0)},[]),(0,a.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-10 h-10  flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-600 rounded-full transition-all",onClick:()=>n("dark"===r?"light":"dark"),children:e&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6 text-neutral-900 dark:text-amber-400",children:"dark"===r?(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}):(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})}var u=r(689),p=r(4149),g=r(6445);function classNames(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}function Navbar(){let e=[{name:"Me",href:"/",current:!0},{name:"Skills",href:"#skills",current:!1},{name:"Works",href:"#works",current:!1}],[t,r]=(0,h.useState)(e),updateNavigationState=e=>{let a=t.map(t=>({...t,current:t.name===e}));r(a)};return(0,a.jsx)(u.p,{as:"nav",className:"fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20",children:r=>{let{open:n}=r;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 shadow-lg ",children:(0,a.jsx)("div",{className:"relative flex h-16 items-center justify-between",children:(0,a.jsxs)("div",{className:"flex flex-1 items-center justify-start",children:[(0,a.jsx)("div",{className:"hidden sm:ml-6 sm:block",children:(0,a.jsx)("div",{className:"flex space-x-5 items-center",children:t.map(e=>(0,a.jsx)(o(),{href:e.href,className:classNames(e.current?"text-neutral-900 border border-t-0 border-l-0 border-r-0 border-b-4 ".concat(c.M.borderColor," dark:text-neutral-400 "):"text-neutral-900 dark:text-neutral-400 hover:underline","text-base font-medium"),"aria-current":e.current?"page":void 0,style:{textDecoration:"none"},onClick:()=>updateNavigationState(e.name),children:e.name},e.name))})}),(0,a.jsxs)("div",{className:"absolute inset-y-0 right-10 sm:right-0 flex items-center gap-2",children:[(0,a.jsx)(o(),{href:"https://github.com/IvanGael",target:"_blank",className:"hidden sm:block",children:(0,a.jsx)("button",{className:"bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:".concat(c.M.mainBgColor," hover:").concat(c.M.mainBgColor," hover:text-white dark:hover:text-black rounded-full"),children:"GitHub"})}),(0,a.jsx)(ThemeSwitchButton,{})]}),(0,a.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center sm:hidden",children:(0,a.jsxs)(u.p.Button,{className:"inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),n?(0,a.jsx)(g.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,a.jsx)(p.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})})}),(0,a.jsx)(u.p.Panel,{className:"sm:hidden",children:(0,a.jsxs)("div",{className:"space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900",children:[e.map(e=>(0,a.jsx)(u.p.Button,{as:"a",href:e.href,className:classNames((e.current,"text-neutral-900 dark:text-neutral-400"),"block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"),"aria-current":e.current?"page":void 0,children:e.name},e.name)),(0,a.jsx)(o(),{href:"https://github.com/IvanGael",target:"_blank",children:(0,a.jsx)("button",{className:"mt-12 ".concat(c.M.mainBgColor," text-white px-4 p-3 font-medium rounded-full w-full"),children:"GitHub"})})]})})]})}})}function Prefooter(){return(0,a.jsx)("div",{className:"bg-gray-50 dark:bg-neutral-800",id:"content",children:(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10",children:(0,a.jsx)("h1",{className:"text-1xl text-black dark:text-white font-semibold text-center",children:"Don't hesitate to reach out to me for any project !"})})})}var components_Layout=e=>{let{children:t,...r}=e,n=(0,l.useRouter)(),i={title:"Portfolio Site - Ivan APEDO",description:"Portfolio Site - Ivan APEDO, Software Engineer",image:"/images/favicon.jpg",type:"website",...r};return(0,a.jsxs)("div",{className:"min-w-[350px] overflow-x-hidden",children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:i.title}),(0,a.jsx)("meta",{name:"robots",content:"follow, index"}),(0,a.jsx)("link",{href:"/favicon.jpg",rel:"icon",type:"image/jpg",sizes:"32x32"}),(0,a.jsx)("meta",{content:i.description,name:"description"}),(0,a.jsx)("meta",{property:"og:url",content:"https://halley.vercel.app".concat(n.asPath)}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:site_name",content:i.title}),(0,a.jsx)("meta",{property:"og:description",content:i.description}),(0,a.jsx)("meta",{property:"og:title",content:i.title}),(0,a.jsx)("meta",{property:"og:image",content:i.image})]}),(0,a.jsxs)("main",{id:"skip",className:"bg-white dark:bg-neutral-900",children:[(0,a.jsx)(Navbar,{}),t,(0,a.jsx)(Prefooter,{}),(0,a.jsx)(Footer,{})]})]})}},470:function(e,t,r){r.d(t,{M:function(){return a}});let a={mainBgColor:"bg-indigo-500",mainTextColor:"text-indigo-500",borderColor:"border-indigo-500"}}}]);