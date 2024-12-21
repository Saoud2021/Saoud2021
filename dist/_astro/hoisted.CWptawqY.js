const m=document.querySelector("[data-collapse-toggle]"),k=document.getElementById(m?.getAttribute("data-collapse-toggle")||"");function v(){k?.classList.toggle("hidden");const e=m?.getAttribute("aria-expanded")==="true"?"false":"true";m?.setAttribute("aria-expanded",e)}m&&k?(document.querySelectorAll(".topg")?.forEach(e=>e.addEventListener("click",function(){window.matchMedia("(max-width: 768px)").matches&&v()})),m.addEventListener("click",()=>{v()})):console.error("Menu toggle button or mobile menu not found.");var j=/^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu,g;function M(e){return{lang:g?.lang,message:e?.message,abortEarly:g?.abortEarly,abortPipeEarly:g?.abortPipeEarly}}var $;function q(e){return $?.get(e)}var A;function O(e){return A?.get(e)}var C;function L(e,n){return C?.get(e)?.get(n)}function R(e){const n=typeof e;return n==="string"?`"${e}"`:n==="number"||n==="bigint"||n==="boolean"?`${e}`:n==="object"||n==="function"?(e&&Object.getPrototypeOf(e)?.constructor?.name)??"null":n}function p(e,n,t,s,r){const i=r&&"input"in r?r.input:t.value,c=r?.expected??e.expects??null,o=r?.received??R(i),u={kind:e.kind,type:e.type,input:i,expected:c,received:o,message:`Invalid ${n}: ${c?`Expected ${c} but r`:"R"}eceived ${o}`,requirement:e.requirement,path:r?.path,issues:r?.issues,lang:s.lang,abortEarly:s.abortEarly,abortPipeEarly:s.abortPipeEarly},a=e.kind==="schema",y=r?.message??e.message??L(e.reference,u.lang)??(a?O(u.lang):null)??s.message??q(u.lang);y&&(u.message=typeof y=="function"?y(u):y),a&&(t.typed=!1),t.issues?t.issues.push(u):t.issues=[u]}function S(e){return{kind:"validation",type:"email",reference:S,expects:null,async:!1,requirement:j,message:e,_run(n,t){return n.typed&&!this.requirement.test(n.value)&&p(this,"email",n,t),n}}}function _(e){return{kind:"validation",type:"non_empty",reference:_,async:!1,expects:"!0",message:e,_run(n,t){return n.typed&&n.value.length===0&&p(this,"length",n,t,{received:"0"}),n}}}function x(){return{kind:"transformation",type:"trim",reference:x,async:!1,_run(e){return e.value=e.value.trim(),e}}}function w(e,n){return{kind:"schema",type:"custom",reference:w,expects:"unknown",async:!1,check:e,message:n,_run(t,s){return this.check(t.value)?t.typed=!0:p(this,"type",t,s),t}}}function I(e,n){return{kind:"schema",type:"object",reference:I,expects:"Object",async:!1,entries:e,message:n,_run(t,s){const r=t.value;if(r&&typeof r=="object"){t.typed=!0,t.value={};for(const i in this.entries){const c=r[i],o=this.entries[i]._run({typed:!1,value:c},s);if(o.issues){const u={type:"object",origin:"value",input:r,key:i,value:c};for(const a of o.issues)a.path?a.path.unshift(u):a.path=[u],t.issues?.push(a);if(t.issues||(t.issues=o.issues),s.abortEarly){t.typed=!1;break}}o.typed||(t.typed=!1),(o.value!==void 0||i in r)&&(t.value[i]=o.value)}}else p(this,"type",t,s);return t}}}function d(e){return{kind:"schema",type:"string",reference:d,expects:"string",async:!1,message:e,_run(n,t){return typeof n.value=="string"?n.typed=!0:p(this,"type",n,t),n}}}function E(...e){return{...e[0],pipe:e,_run(n,t){for(let s=0;s<e.length;s++){if(n.issues&&(e[s].kind==="schema"||e[s].kind==="transformation")){n.typed=!1;break}(!n.issues||!t.abortEarly&&!t.abortPipeEarly)&&(n=e[s]._run(n,t))}return n}}}function B(e,n,t){const s=e._run({typed:!1,value:n},M(t));return{typed:s.typed,success:!s.issues,output:s.value,issues:s.issues}}const l=e=>document.querySelector(e),b=l("#contact-form"),D=l("#name"),T=l("#email"),V=l("#message"),f=l("#alert-container"),h=l("#alert-body"),z=l("#success-alert");function P(){const e=D.value??"",n=T.value??"",t=V.value??"";return{name:e,email:n,message:t}}function F(){const e=I({name:E(d(),_("Name is required")),email:E(d(),x(),S("Invalid Email")),message:w(i=>typeof i=="string"&&i.split(" ").length>5,"Please write a bit more so I can understand you better!")}),{name:n,email:t,message:s}=P(),r=B(e,{name:n,email:t,message:s});return r.success?(f.style.display="none",!0):(f.style.display="flex",h.textContent=r.issues[0].message,!1)}b.addEventListener("submit",e=>{if(e.preventDefault(),F()){const t={...P(),access_key:{BASE_URL:"/Saoud2021",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://saoud2021.github.io",ASSETS_PREFIX:void 0}.PUBLIC_WEB3_FORMS};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then(async s=>{(await s.json()).success?(f.style.display="none",z.style.display="block"):(f.style.display="flex",h.textContent="Somthing went wrong! message didn't sent.")}).catch(s=>{console.log(s),f.style.display="flex",h.textContent="Somthing went wrong! message didn't sent."}).then(()=>b.reset())}});b.reset();