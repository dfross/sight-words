import"./hoisted.BB6uRyKX.js";document.addEventListener("astro:page-load",()=>{const e=document.getElementById("wordSelector");if(e){const t=o=>{const r=o.target,n=parseInt(r.value);isNaN(n)||window.dispatchEvent(new CustomEvent("setFlashcardWord",{detail:{index:n}}))};return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}else console.error("Word selector element not found")});