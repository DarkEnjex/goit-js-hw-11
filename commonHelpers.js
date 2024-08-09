import{i as c,S as p}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function m({hits:s}){if(s.length===0){onSearchError();return}return s.map(({webformatURL:r,largeImageURL:a,tags:o,likes:e,views:t,comments:i,downloads:u})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${a}">
        <img
        class="gallery-image"
        src="${r}"
        alt="${o}"
    />
    </a>
    <ul class="gallery-attribute-list">
    <li class="attribute-item">
            <p class="attribute">Likes</p>
            <p class="attribute-value">${e}</p>
        </li>
        <li class="attribute-item">
            <p class="attribute">Views</p>
            <p class="attribute-value">${t}</p>
        </li>
        <li class="attribute-item">
            <p class="attribute">Comments</p>
            <p class="attribute-value">${i}</p>
        </li>
        <li class="attribute-item">
            <p class="attribute">Downloads</p>
            <p class="attribute-value">${u}</p>
        </li>
        </ul>
</li>`).join("")}const f="45360350-58fd54754bd8f677bef7c2cc3",y="https://pixabay.com/api/";function d(s){const r=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${y}?${r}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}const n=document.querySelector(".gallery"),g=document.querySelector(".js-search-form"),l=document.querySelector(".loader");l.style.display="none";g.addEventListener("submit",h);function h(s){s.preventDefault();const r=s.currentTarget,a=r.elements.query.value.trim().toLowerCase();if(a===""){n.innerHTML="",c.error({message:"Please enter a search query."});return}l.style.display="block",d(a).then(o=>{const e=m(o);n.innerHTML=e,L.refresh()}).catch(b).finally(()=>{l.style.display="none",r.reset()})}function b(s){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",l.style.display="none"}let L=new p(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});c.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});
//# sourceMappingURL=commonHelpers.js.map
