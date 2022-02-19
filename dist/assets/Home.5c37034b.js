import{t as d,r as C,q as T,i as n,e as c,S,f as E,s as f,d as k,m as D,C as I,F as j}from"./vendor.52df60c8.js";var R="/assets/builder-colour.e5e25d2e.png",J="/assets/stytch.f6602a45.png",G="/assets/402.75df3841.png",W="/assets/clearspend.068ae921.svg";const A=d('<div class="mt-3"></div>'),H=d('<div class="mt-3 text-red-500"></div>'),O=d('<form><div class="font-semibold text-md mb-3 md:mb-0"></div><div class="w-full md:w-3/6"><div class="flex space-x-2"><input type="email" class="w-full rounded-md py-2 px-4 border-gray-300 dark:bg-solid-darkbg dark:placeholder:text-gray-200"><button class="bg-solid-medium py-3 px-5 text-white rounded-md hover:bg-solid-dark transition duration-300" type="submit"></button></div></div></form>'),m={IDLE:0,SENDING:1,SENT:2,ERROR:3},M=e=>{let s;const[i]=C(),[o,a]=T(m.IDLE),r=async t=>{t.preventDefault(),a(m.SENDING);try{await fetch("https://newsletter.solidjs.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.value})}),s.value="",a(m.SENT)}catch{a(m.ERROR)}return!1};return(()=>{const t=O.cloneNode(!0),u=t.firstChild,g=u.nextSibling,w=g.firstChild,h=w.firstChild,b=h.nextSibling;return t.addEventListener("submit",r),n(u,()=>e.title),(l=>s=l)(h),h.required=!0,n(b,c(S,{get fallback(){return i("global.newsletter.sending",{},"Sending")},get when(){return o()!==m.SENDING},get children(){return i("global.newsletter.register",{},"Register")}})),n(g,c(S,{get when(){return o()===m.SENT},get children(){const l=A.cloneNode(!0);return n(l,()=>i("global.newsletter.success",{},"You are successfully registered!")),l}}),null),n(g,c(S,{get when(){return o()===m.ERROR},get children(){const l=H.cloneNode(!0);return n(l,()=>i("global.newsletter.error",{},"Registration could not be completed")),l}}),null),E(l=>{const x=`bg-solid flex flex-col md:flex-row w-full items-center space-x-4 ${e.className}`,y=o()===m.SENDING,_=i("global.newsletter.email",{},"Email address"),p=o()===m.SENDING;return x!==l._v$&&(t.className=l._v$=x),y!==l._v$2&&(h.disabled=l._v$2=y),_!==l._v$3&&f(h,"placeholder",l._v$3=_),p!==l._v$4&&(b.disabled=l._v$4=p),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})()};var N=(e=>(e[e.Timeout=0]="Timeout",e[e.Interval=1]="Interval",e))(N||{}),Y=(e,s,i)=>{let o,a;const r=()=>clearInterval(a),t=typeof i=="function"?i:i===1?setInterval:setTimeout;return k(()=>o=e),k(()=>{const u=(...g)=>o(...g);s!==null&&(r(),a=t(u,s))}),D(()=>r()),r},B=Y,F=(e,s,i=1e3)=>{const[o,a]=I({}),r=()=>{const t=Math.abs(+(s?s():new Date)-+e);a({days:Math.floor(t/(1e3*60*60*24)),hours:Math.floor(t/(1e3*60*60)%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60),milliseconds:t%1e3})};return r(),B(r,i,N.Interval),o},q=F;const L=d('<div class="md:grid md:grid-cols-12 md:space-x-6 bg-white/50 text-gray-700 mx-auto mt-5 p-10 rounded-xl shadow-xl backdrop-blur-md"><h2 class="text-3xl col-span-2 font-semibold mb-5"></h2><div class="col-span-10"></div></div>'),P=d('<div class="flex flex-col items-center text-white text-[length:clamp(5px,4vw,18px)] px-[clamp(5px,4vw,16px)] py-4 md:py-5 md:px-7"><div class="font-mono text-[length:clamp(5px,6vw,48px)] leading-[1]"></div></div>'),V=d('<div class="flex flex-row w-min gap-5 px-10 rounded-md" style="background-color: #335d92;"></div>'),Q=d("<strong>SolidHack</strong>"),U=d('<a target="_blank" href="https://discord.gg/solidjs" class="underline">SolidJS Discord</a>'),Z=d('<div class="space-y-5 text-center md:text-left"><div class="md:grid md:grid-cols-12 border-b py-2 text-green-700"><div class="col-span-1 text-center"><figure class="bg-green-700 rounded-full w-6 h-6 inline-flex justify-center pt-1 items-center text-white">\u2713</figure></div><div class="col-span-3">January 7th</div><div class="col-span-8">Categories Announced and Contest Begins</div></div><div class="md:grid md:grid-cols-12 border-b py-2 text-green-700"><div class="col-span-1 text-center"><figure class="bg-green-700 rounded-full w-6 h-6 inline-flex justify-center pt-1 items-center text-white">\u2713</figure></div><div class="col-span-3">February 18th</div><div class="col-span-8">Submissions Portal Opens</div></div><div class="md:grid md:grid-cols-12 border-b py-2 text-gray-700"><div class="col-span-1 text-center"><figure class="bg-gray-300 rounded-full w-6 h-6 inline-flex justify-center pt-1 items-center text-white">~</figure></div><div class="col-span-3">April 7th</div><div class="col-span-8">Submissions Close and Voting Begins</div></div><div class="md:grid md:grid-cols-12 border-b py-2 text-gray-400"><div class="col-span-1 text-center">&nbsp;</div><div class="col-span-3">April 28th</div><div class="col-span-8">Voting Ends</div></div><div class="md:grid md:grid-cols-12 border-b py-2 text-gray-400"><div class="col-span-1 text-center">&nbsp;</div><div class="col-span-3">May 4th</div><div class="col-span-8">Winners Announced</div></div><small class="text-center mt-4 block">Exact closing time for above listed dates is 23:59 (GMT-5).</small></div>'),K=d('<small class="mt-3 block">To participate as a sponsor, contact <a href="mailto:community@solidjs.com">community@solidjs.com</a>.<br>A special thanks to supporters who have submitted personal donations including: <a target="_blank" href="https://github.com/Brendan-csel">Brendan-csel</a> and <a target="_blank" href="https://github.com/davedbase">davedbase</a>.</small>'),z=d(`<p class="mb-3">SolidJS has made its mark on the JavaScript ecosystem. It's a flourishing community and we want you to be a part of it.</p>`),X=d("<p>We know that this kind of initiative is new for the open-source world, and we're looking to push the boundaries of what a hackathon can be and what open-source projects can do. Ultimately, we want to give you an opportunity to give SolidJS a try.</p>"),ee=d('<div class="w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-12 min-h-screen"><div class="w-full bg-white items-center flex flex-col pb-8 bg-hack bg-no-repeat bg-top bg-contain px-10"><img class="mx-auto mt-20 w-36" src="/img/hack/icon.png"><img class="w-6/6 md:w-5/6 mt-4 mb-0 g:w-4/6 xl:w-5/12 2xl:w-3/12 mx-auto" src="/img/hack/title.png"><small class="my-10 mb-3">Countdown to competition closing date:</small><div class="mt-20 flex items-center flex-col md:space-y-0 md:flex-row md:space-x-20 bg-white/20 p-4 px-7 rounded-xl"><a target="_blank" class="hover:opacity-70 transition duration-300 text-center" rel="noopener" href="https://www.stytch.com"><img class="inline-block w-3/6 md:w-52"></a></div><div class="flex items-center space-y-5 flex-col md:space-y-0 md:flex-row mt-3 md:space-x-12 bg-white/20 p-4 px-7 rounded-xl"><a target="_blank" class="hover:opacity-70 transition duration-300 text-center" rel="noopener" href="https://www.builder.io"><img class="inline-block w-3/6 md:w-40"></a><a target="_blank" class="hover:opacity-70 transition duration-300 text-center" rel="noopener" href="https://www.402.so"><img class="inline-block w-3/6 md:w-28"></a><a target="_blank" class="hover:opacity-70 transition duration-300 text-center" rel="noopener" href="https://www.clearspend.com/"><img class="inline-block w-3/6 md:w-44"></a> </div></div><div class="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5"><iframe class="rounded-xl shadow-2xl" width="340" height="190" src="https://www.youtube.com/embed/Y67QW9HKrWA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe class="rounded-xl shadow-2xl" width="340" height="190" src="https://www.youtube.com/embed/QGNZGZAfvcY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe class="rounded-xl shadow-2xl" width="340" height="190" src="https://www.youtube.com/embed/8VyEHaqstJ4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="max-w-4xl p-5 leading-7"><div class="bg-white/50 text-gray-700 max-w-3xl mx-auto mt-5 p-10 rounded-xl shadow-xl backdrop-blur-md"><div class="mb-5">Stay up-to-date on SolidHack, major SolidJS releases, and community updates.</div></div><div class="bg-opacity-50 text-black max-w-3xl mx-auto mt-2 p-10 rounded-xl"><small>SolidHack is operated by volunteers and funded by corporate sponsors. The SolidHack Planning Committee is responsible for coordinating Rules and Regulations. Questions and concerns relating to the competition may be directed to hack@solidjs.com. The Planning Committee maintains the right to enforce, adapt or cancel terms of the competition in the spirit of fairness.</small></div><div class="text-center text-sm">Last updated February 18 @ 12:00pm EST</div></div></div>'),$=e=>(()=>{const s=L.cloneNode(!0),i=s.firstChild,o=i.nextSibling;return n(i,()=>e.title),n(o,()=>e.children),s})(),te=()=>{const e=new Date(164939034e4),s=new Date(164939034e4),i=q(new Date().getTime()<e.getTime()?e:s),o=a=>{const r=a.value>=10?a.value.toString():"0"+a.value.toString();return(()=>{const t=P.cloneNode(!0),u=t.firstChild;return n(u,r),n(t,()=>a.label,null),t})()};return(()=>{const a=V.cloneNode(!0);return n(a,c(j,{get each(){return Object.entries(i).slice(0,-1)},children:r=>c(o,{get label(){return r[0]},get value(){return r[1]}})})),a})()},se=()=>(()=>{const e=ee.cloneNode(!0),s=e.firstChild,i=s.firstChild,o=i.nextSibling,a=o.nextSibling,r=a.nextSibling,t=r.firstChild,u=t.firstChild,g=r.nextSibling,w=g.firstChild,h=w.firstChild,b=w.nextSibling,l=b.firstChild,x=b.nextSibling,y=x.firstChild,_=s.nextSibling,p=_.nextSibling,v=p.firstChild;return v.firstChild,n(s,c(te,{}),r),f(u,"src",J),f(h,"src",R),f(l,"src",G),f(y,"src",W),n(p,c($,{title:"What",get children(){return[Q.cloneNode(!0)," is a public hackathon presented by the SolidJS Team, corporate sponsors and individuals. We've got USD$12,000 to give away to the best projects across three categories. It's free to enter, you've got three months to build your project and winners will be selected by public vote. Join our"," ",U.cloneNode(!0)," ","to ask questions and chat with our community."]}}),v),n(p,c($,{title:"When",get children(){return Z.cloneNode(!0)}}),v),n(p,c($,{title:"Who",get children(){return["The hackathon is open to anyone: experienced SolidJS users and newcomers alike. You'll use your GitHub account to verify your identity when you submit your project and when you cast your vote. The competition is supported by corporate sponsors of SolidJS and the open-source ecosystem.",K.cloneNode(!0)]}}),v),n(p,c($,{title:"Why",get children(){return[z.cloneNode(!0),X.cloneNode(!0)]}}),v),n(v,c(M,{title:"Sign up for SolidJS News"}),null),e})();export{se as default};
