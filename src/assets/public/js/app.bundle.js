const m="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let g=(i=21)=>{let n="",e=crypto.getRandomValues(new Uint8Array(i|=0));for(;i--;)n+=m[e[i]&63];return n};/**
 * @license lucide v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=([i,n,e])=>{const t=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(n).forEach(o=>{t.setAttribute(o,String(n[o]))}),e?.length&&e.forEach(o=>{const r=h(o);t.appendChild(r)}),t},f=(i,n={})=>{const t={...u,...n};return h(["svg",t,i])};/**
 * @license lucide v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i=>Array.from(i.attributes).reduce((n,e)=>(n[e.name]=e.value,n),{}),v=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",w=i=>i.flatMap(v).map(e=>e.trim()).filter(Boolean).filter((e,t,o)=>o.indexOf(e)===t).join(" "),y=i=>i.replace(/(\w)(\w*)(_|-|\s*)/g,(n,e,t)=>e.toUpperCase()+t.toLowerCase()),d=(i,{nameAttr:n,icons:e,attrs:t})=>{const o=i.getAttribute(n);if(o==null)return;const r=y(o),s=e[r];if(!s)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const a=b(i),c={...u,"data-lucide":o,...t,...a},l=w(["lucide",`lucide-${o}`,a,t]);l&&Object.assign(c,{class:l});const p=f(s,c);return i.parentNode?.replaceChild(p,i)};/**
 * @license lucide v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.526.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=({icons:i={},nameAttr:n="data-lucide",attrs:e={}}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const t=document.querySelectorAll(`[${n}]`);if(Array.from(t).forEach(o=>d(o,{nameAttr:n,icons:i,attrs:e})),n==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(r=>d(r,{nameAttr:"icon-name",icons:i,attrs:e})))}};class M{constructor(n){if(this.container=n,!this.container){alert(`Container with id '${containerId}' not found.`);return}if(this.table=this.container.querySelector("table"),!this.table){console.error("No <table> found inside the container.");return}this.headers=Array.from(this.table.querySelectorAll("thead th")),this.priorityMap=this.headers.map((e,t)=>({index:t,priority:parseInt(e.dataset.priority)||1/0,isControl:"control"in e.dataset})).filter(e=>!e.isControl).sort((e,t)=>e.priority-t.priority),this.setup()}setup(){this.update(),window.addEventListener("resize",()=>this.update())}update(){const n=this.container.offsetWidth;let t=[320,360,480,600,768,992,1200,1440].findIndex(r=>n<r)+1||this.priorityMap.length;const o=Math.max(this.priorityMap.length-t,0);this.priorityMap.forEach((r,s)=>{const a=s>=this.priorityMap.length-o&&r.index!==0;this.toggleColumn(r.index,a)}),o>0?this.addButton():this.removeButton()}addButton(){const n=document.querySelectorAll('td[tabindex="0"]'),e='<i data-lucide="circle-plus" class="responsive-table--icon"></i>';n.forEach(t=>{const o=g();var r=t.innerHTML,s=t.getAttribute("data-toggle");s||(t.setAttribute("data-toggle",!0),t.innerHTML=`
					<div class='responsive-table--leadingcolumn-container'>
						<span data-id="${o}">${e}</span>
						<div class="responsive-table--leadingcolumn-content">${r}</div>
					</div>`),this.addDetailsRow(t,o),this.generateIcon();const a=t.querySelector(`span[data-id="${o}"]`);a&&(a.style.cursor="pointer",a.addEventListener("click",()=>this.toggleDetails(o)))})}removeButton(){document.querySelectorAll('td[tabindex="0"]').forEach(e=>{if(e.getAttribute("data-toggle")){const t=e.getAttribute("data-toggle"),o=e.querySelector("span").getAttribute("data-id");t&&(e.removeAttribute("data-toggle"),e.innerHTML=e.querySelector(".responsive-table--leadingcolumn-content").innerHTML,this.removeDetailsRow(o))}})}addDetailsRow(n,e){const t=n.closest("tr");var o=0;Array.from(t.children).forEach(a=>{o+=a.colSpan});var r=document.createElement("td");r.setAttribute("colspan",o),r.innerHTML="",r.innerHTML=this.detailsContent(t.children);var s=document.createElement("tr");s.appendChild(r),s.classList.add("hide"),s.classList.add("detailRow"),s.id=e,t.parentNode.insertBefore(s,t.nextSibling)}removeDetailsRow(n){const e=document.getElementById(n);e&&e.remove()}detailsContent(n){var e="";return Array.from(n).forEach(t=>{if(t.classList.contains("hide")){var o=t.getAttribute("data-label")||"",r=t.innerHTML;e+=`<div class="responsive-table__details--info"><div><strong>${o}</strong></div> <div>${r}</div></div>`}}),`<div class="responsive-table__details--card">${e}</div>`}toggleColumn(n,e){this.table.querySelectorAll("tr").forEach(o=>{const r=o.children[n];r&&r.classList.toggle("hide",e)})}toggleDetails(n){document.getElementById(n).classList.toggle("hide");const t=document.querySelector(`[data-id="${n}"]`);t.firstChild.dataset.lucide=="circle-plus"?(t.removeChild(t.firstChild),t.innerHTML='<i data-lucide="circle-minus" class="responsive-table--icon"></i>',this.generateIcon()):(t.removeChild(t.firstChild),t.innerHTML='<i data-lucide="circle-plus" class="responsive-table--icon"></i>',this.generateIcon())}generateIcon(){E({icons:{CirclePlus:C,CircleMinus:A}})}}window.ResponsiveTable=M;
