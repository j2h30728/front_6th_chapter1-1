(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};async function i(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function a(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function o(){let e=await fetch(`/api/categories`);return await e.json()}function s(e,t){let n=!1;return function(...r){n||(e.apply(this,r),n=!0,setTimeout(()=>{n=!1},t))}}var c=class{constructor(e,t={threshold:400,delay:100}){this.loadMore=e,this.threshold=t.threshold,this.delay=t.delay,this.isLoading=!1,this.hasNext=t.hasNext===void 0?!0:t.hasNext,this.handleScroll=s(()=>{this.checkScroll()},this.delay)}init(){window.addEventListener(`scroll`,this.handleScroll,{passive:!0})}checkScroll(){if(this.isLoading||!this.hasNext)return;let e=window.pageYOffset,t=window.innerHeight,n=document.documentElement.scrollHeight;e+t>=n-this.threshold&&this.load()}async load(){if(!(this.isLoading||!this.hasNext)){this.isLoading=!0;try{let e=await this.loadMore(!1);this.hasNext=e}catch(e){console.error(`로딩 실패:`,e)}finally{this.isLoading=!1}}}sethasNext(e){this.hasNext=e}destroy(){window.removeEventListener(`scroll`,this.handleScroll)}},l=class{constructor(e){this.key=e}get(){return JSON.parse(localStorage.getItem(this.key))}set(e){localStorage.setItem(this.key,JSON.stringify(e))}remove(){localStorage.removeItem(this.key)}};const u=new l(`cart`),d=[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}],f=[{value:10,label:`10`},{value:20,label:`20`},{value:50,label:`50`},{value:100,label:`100`}];function p({options:e=f,selectedValue:t}){return`
    <!-- 페이지당 상품 수 -->
    <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">개수:</label>
        <select id="limit-select"
                class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
            ${e.map(e=>`
                <option value="${e.value}" ${t.toString()===e.value.toString()?`selected`:``}>
                    ${e.label}개
                </option>
            `).join(``)}
        </select>
    </div>
  `}function ee({options:e=d,selectedValue:t}){return`
    <!-- 정렬 -->
    <div class="flex items-center gap-2">
      <label class="text-sm text-gray-600">정렬:</label>
      <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                    focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        ${e.map(e=>`
          <option value="${e.value}" ${t===e.value?`selected`:``}>
            ${e.label}
          </option>
        `).join(``)}    
      </select>
    </div>`}const te=` 
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
        <div class="aspect-square bg-gray-200"></div>
        <div class="p-3">
            <div class="h-4 bg-gray-200 rounded mb-2"></div>
            <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
            <div class="h-8 bg-gray-200 rounded"></div>
        </div>
    </div>`,ne=te.repeat(4),m=({brand:e,image:t,lprice:n,productId:r,title:i})=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
        data-product-id="${r}">
        <!-- 상품 이미지 -->
        <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image" data-product-id="${r}">
            <img src="${t}"
                alt="${i}"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-200 product-image"
                data-product-id="${r}"
                loading="lazy">
        </div>
        <!-- 상품 정보 -->
        <div class="p-3">
            <div class="cursor-pointer product-info mb-3" data-product-id="${r}">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1 product-info" data-product-id="${r}">
                ${i}
            </h3>
            <p class="text-xs text-gray-500 mb-2">${e}</p>
            <p class="text-lg font-bold text-gray-900">
                ${parseInt(n,10).toLocaleString(`ko-KR`)}원
            </p>
            </div>
            <!-- 장바구니 버튼 -->
            <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                    hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${r}">
            장바구니 담기
            </button>
        </div>
    </div>
  `;function h({state:e}){return`
    <div class="mb-4">
      <div class="relative">
        <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${e.filters.search||``}" 
               class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <div id='search-button' class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>
  `}function g({state:e}){let{filters:t,categories:n}=e;return`
    <div class="space-y-2">
        <!-- 브레드크럼 -->
        <div class="flex items-center gap-1">
        <label class="text-sm text-gray-600">카테고리:</label>
        <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
        ${t?.category1&&`&gt; <button data-category1="${t.category1}" class="text-xs hover:text-blue-800 hover:underline">
           ${t.category1}
            </button>`}
        
        ${t?.category2&&`&gt; <button data-category2="${t.category2}" class="text-xs hover:text-blue-800 hover:underline">
          ${t.category2}
            </button>`}
        </div>
        ${e.loading?`<div class="text-sm text-gray-500">카테고리 로딩 중...</div>`:``}
        <!-- 1depth 카테고리 필터 -->
        ${!t?.category1&&!e.loading?`<div class="flex flex-wrap gap-2">
                ${Object.keys(n).map(e=>`<button data-category1="${e}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                bg-white border-gray-300 text-gray-700 hover:bg-gray-50">${e}</button>`).join(``)}
              </div>`:``}
        <!-- 2depth 카테고리 -->
        ${!t?.category2&&t?.category1?`<div class="flex flex-wrap gap-2">
                ${Object.keys(n[t.category1]||{}).map(e=>`<button data-category2="${e}" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                bg-white border-gray-300 text-gray-700 hover:bg-gray-50">${e}</button>`).join(``)}
              </div>`:``}
    </div>
  `}function _({cartCount:e}){return`  
    <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
        </svg>
        ${e>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              ${e}
            </span>`:``}
    </button>`}function v({state:e}){return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold text-gray-900">
                <a href="/" data-link="">쇼핑몰</a>
            </h1>
            <div class="flex items-center space-x-2">
                <!-- 장바구니 아이콘 -->
                ${_({cartCount:e.cart.length})}
            </div>
            </div>
        </div>
    </header>`}function y(e){return`
    <div class="bg-gray-50">
       ${v({state:e})}
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 검색 및 필터 -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <!-- 검색창 -->
          ${h({state:e})}
          <!-- 필터 옵션 -->
          ${g({state:e})}
          <!-- 기존 필터들 -->
          <div class="flex gap-2 items-center justify-between">
            <!-- 페이지당 상품 수 -->
            ${p({options:f,selectedValue:e.filters.limit})}
            <!-- 정렬 -->
            ${ee({options:d,selectedValue:e.filters.sort})}
          </div>
        </div>
        <!-- 상품 목록 -->
        <div class="mb-6">
          <div>
            <!-- 상품 개수 정보 -->
            <div class="mb-4 text-sm text-gray-600">
              ${e.loading?``:`총 <span class="font-medium text-gray-900">${e.total}개</span>의 상품`}
            </div>
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
                ${e.loading&&e.products.length===0?ne:e.products.map(m).join(``)}
            </div>
            ${e.loading&&e.products.length>0?`
                  <div class="text-center py-4">
                    <div class="text-sm text-gray-600">상품을 불러오는 중...</div>
                  </div>
                `:``}
            <div class="text-center py-4 text-sm text-gray-500">
              모든 상품을 확인했습니다
            </div>
          </div>
        </div>
      </main>
      <footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>
    </div>
  `}var b=class{constructor(){this.root=document.body.querySelector(`#root`)}open(e){let t=this.createToast(e);this.root.appendChild(t),setTimeout(()=>{this.close(t)},3e3);let n=t.querySelector(`#toast-close-btn`);n&&n.addEventListener(`click`,()=>{this.close(t)})}createToast(e){let t=document.createElement(`div`);t.className=`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up`;let n=``;switch(e){case`CREATE`:n=`<div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p class="text-sm font-medium">장바구니에 추가되었습니다</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>`;break;case`REMOVE`:n=`<div class="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
           </svg>
          </div>
          <p class="text-sm font-medium">선택된 상품들이 삭제되었습니다</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>`;break;case`ERROR`:n=`<div class="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
          <p class="text-sm font-medium">오류가 발생했습니다.</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>`;break;default:n=`<div class="bg-gray-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <p class="text-sm font-medium">알림</p>
        </div>`}return t.innerHTML=n,t}close(e){e&&e.parentNode&&e.remove()}};const x=new b;function S({product:e}){return`
      <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.productId}">
        <!-- 선택 체크박스 -->
        <label class="flex items-center mr-3">
          <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded 
        focus:ring-blue-500" data-product-id="${e.productId}" ${e.selected?`checked`:``}>
        </label>
        <!-- 상품 이미지 -->
        <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
          <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${e.productId}">
        </div>
        <!-- 상품 정보 -->
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${e.productId}">
            ${e.title}
          </h4>
          <p class="text-sm text-gray-600 mt-1">
            ${parseInt(e.lprice).toLocaleString()}원
          </p>
          <!-- 수량 조절 -->
          <div class="flex items-center mt-2">
            <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center 
         border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input type="number" value="${e.quantity}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b 
        border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled="" data-product-id="${e.productId}">
            <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center 
         border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- 가격 및 삭제 -->
        <div class="text-right ml-3">
          <p class="text-sm font-medium text-gray-900">
            ${(parseInt(e.lprice)*e.quantity).toLocaleString()}원
          </p>
          <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.productId}">
            삭제
          </button>
        </div>
      </div>
    `}function C(){return`
      <div class="flex-1 flex items-center justify-center p-8">
        <div class="text-center">
          <div class="text-gray-400 mb-4">
            <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
          <p class="text-gray-600">원하는 상품을 담아보세요!</p>
        </div>
      </div>
    `}function w({cart:e}){let t=e.filter(e=>e.selected),n=e.reduce((e,t)=>e+parseInt(t.lprice)*t.quantity,0),r=t.reduce((e,t)=>e+parseInt(t.lprice)*t.quantity,0);return`
   ${t.length>0?`
     <!-- 선택된 아이템 정보 -->
     <div class="flex justify-between items-center mb-3 text-sm">
       <span class="text-gray-600">선택한 상품 (${t.length}개)</span>
       <span class="font-medium">${r.toLocaleString()}원</span>
     </div>
   `:``}
   
   <!-- 총 금액 -->
   <div class="flex justify-between items-center mb-4">
     <span class="text-lg font-bold text-gray-900">총 금액</span>
     <span class="text-xl font-bold text-blue-600">${n.toLocaleString()}원</span>
   </div>
   
   <!-- 액션 버튼들 -->
   <div class="space-y-2">
     ${t.length>0?`
       <button id="cart-modal-remove-selected-btn" 
               class="w-full bg-red-600 text-white py-2 px-4 rounded-md 
                      hover:bg-red-700 transition-colors text-sm">
         선택한 상품 삭제 (${t.length}개)
       </button>
     `:``}
     
     <div class="flex gap-2">
       <button id="cart-modal-clear-cart-btn" 
               class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md 
                      hover:bg-gray-700 transition-colors text-sm">
         전체 비우기
       </button>
       <button id="cart-modal-checkout-btn" 
               class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md 
                      hover:bg-blue-700 transition-colors text-sm">
         구매하기
       </button>
     </div>
   </div>
 `}var T=class{constructor({getState:e,setState:t,selector:n}){this.root=n,this.element=null,this.getState=e,this.setState=t,this.boundHandleClick=this.handleClick.bind(this),this.boundHandleChange=this.handleChange.bind(this),this.boundHandleKeydown=this.handleKeydown.bind(this)}open(){this.element||(this.render(),this.attachEventListeners(),document.addEventListener(`keydown`,this.boundHandleKeydown))}close(){this.element&&(this.element.remove(),this.element=null,document.removeEventListener(`keydown`,this.boundHandleKeydown))}update(){if(!this.element)return;let e=this.getState(),{cart:t}=e,n=document.body.querySelector(`#modal-container`);console.log(n),n&&(n.innerHTML=E({cart:t}))}render(){this.element=this.createCartModal(),this.root.appendChild(this.element)}createCartModal(){let e=this.getState(),{cart:t}=e,n=document.createElement(`div`);return n.innerHTML=re({cart:t}),n.firstElementChild}handleClick(e){let{target:t}=e;if(t.id===`cart-modal-close-btn`||t.classList.contains(`cart-modal-overlay`)){this.setState({cartModalOpen:!1});return}let n=t.closest(`.quantity-increase-btn`);if(n){this.updateQuantity(n.dataset.productId,1);return}let r=t.closest(`.quantity-decrease-btn`);if(r){this.updateQuantity(r.dataset.productId,-1);return}let i=t.closest(`.cart-item-remove-btn`);if(i){this.removeItem(i.dataset.productId);return}let a=t.closest(`#cart-modal-remove-selected-btn`);if(a){this.removeSelectedItems();return}let o=t.closest(`#cart-modal-clear-cart-btn`);if(o){this.clearCart();return}let s=t.closest(`.cart-item-image`),c=t.closest(`.cart-item-title`);if(s||c){let e=(s||c).dataset.productId;e&&(this.setState({cartModalOpen:!1}),window.history.pushState({},``,`/product/${e}`),window.dispatchEvent(new Event(`popstate`)));return}}handleChange(e){let{target:t}=e;if(t.id===`cart-modal-select-all-checkbox`){this.toggleSelectAll(t.checked);return}if(t.classList.contains(`cart-item-checkbox`)){let e=t.dataset.productId;this.toggleItemSelection(e,t.checked);return}}handleKeydown(e){e.key===`Escape`&&this.setState({cartModalOpen:!1})}attachEventListeners(){this.element&&(this.element.removeEventListener(`click`,this.boundHandleClick),this.element.removeEventListener(`change`,this.boundHandleChange),this.element.addEventListener(`click`,this.boundHandleClick),this.element.addEventListener(`change`,this.boundHandleChange))}updateQuantity(e,t){let n=this.getState(),r=n.cart.map(n=>{if(n.productId===e){let e=n.quantity+t;return e>0?{...n,quantity:e}:null}return n}).filter(Boolean);u.set(r),this.setState({cart:r})}removeItem(e){let t=this.getState(),n=t.cart.filter(t=>t.productId!==e);u.set(n),this.setState({cart:n})}toggleSelectAll(e){let t=this.getState(),n=t.cart.map(t=>({...t,selected:e}));u.set(n),this.setState({cart:n})}toggleItemSelection(e,t){let n=this.getState(),r=n.cart.map(n=>n.productId===e?{...n,selected:t}:n);u.set(r),this.setState({cart:r})}removeSelectedItems(){let e=this.getState(),t=e.cart.filter(e=>!e.selected);u.set(t),this.setState({cart:t}),x.open(`REMOVE`)}clearCart(){this.setState({cart:[]})}};const re=({cart:e})=>`
   <div class="fixed inset-0 z-50 overflow-y-auto cart-modal">
     <!-- 배경 오버레이 -->
     <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
          <!-- 모달 컨테이너 -->
     <div id='modal-container' class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
     ${E({cart:e})}
     </div>
   </div>`,E=({cart:e})=>(console.log(e),`

       <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
         <!-- 헤더 -->
         <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
           <h2 class="text-lg font-bold text-gray-900 flex items-center">
             <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
             </svg>
             장바구니
             ${e.length>0?`<span class="text-sm font-normal text-gray-600 ml-1">(${e.length})</span>`:``}
           </h2>
           <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
             </svg>
           </button>
         </div>
         <!-- 컨텐츠 -->
         <div id="content" class="flex flex-col max-h-[calc(90vh-120px)]">
           ${e.length===0?C():`<!-- 전체 선택 섹션 -->
         <div class="p-4 border-b border-gray-200 bg-gray-50">
           <label class="flex items-center text-sm text-gray-700">
             <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" ${e.every(e=>e.selected)?`checked`:``}>
             전체선택 (${e.length}개)
           </label>
         </div>
         <!-- 아이템 목록 -->
         <div class="flex-1 overflow-y-auto">
           <div id="item-list" class="p-4 space-y-4">
           ${e.length===0?``:e.map(e=>S({product:e})).join(``)}
           </div>
         </div>
         <!-- 하단 액션 -->
         <div id="footer" class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
           ${w({cart:e})}
         </div>`}
         </div>
       </div>`),D=`/front_6th_chapter1-1`,O=(e=window.location.pathname)=>e.startsWith(D)?e.slice(21)||`/`:e,k=e=>D+e;var A=class{constructor(){this.routes=new Map,this.currentPath=O(),this.init()}init(){window.addEventListener(`popstate`,()=>{this.handleRoute()}),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-link]`);if(t){e.preventDefault();let n=t.getAttribute(`href`)||t.getAttribute(`data-href`);n&&this.navigate(n)}let n=e.target.closest(`a[href]`);n&&!n.hasAttribute(`target`)&&n.getAttribute(`href`).startsWith(`/`)&&(e.preventDefault(),this.navigate(n.getAttribute(`href`)))})}addRoute(e,t){return this.routes.set(e,t),this}navigate(e){if(this.currentPath===e)return;let t=e.split(`?`)[0];window.history.pushState(null,``,k(t)),this.currentPath=t,this.handleRoute()}async handleRoute(){let e=O();if(this.currentPath=e,this.routes.has(e)){await this.routes.get(e)();return}let t=e.match(/^\/product\/(.+)$/);if(t&&this.routes.has(`/product/:id`)){let e=t[1];await this.routes.get(`/product/:id`)(e);return}this.routes.has(`*`)&&await this.routes.get(`*`)()}getCurrentPath(){return this.currentPath}getProductId(){let e=this.currentPath.match(/^\/products\/(.+)$/);return e?e[1]:null}};function j(e){if(e.productLoading)return`
      <div class="min-h-screen bg-gray-50">
        <header class="bg-white shadow-sm sticky top-0 z-40">
          <div class="max-w-md mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
              </div>
              <div class="flex items-center space-x-2">
                <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main class="max-w-md mx-auto px-4 py-4">
          <div class="py-20 bg-gray-50 flex items-center justify-center">
            <div class="text-center">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p class="text-gray-600">상품 정보를 불러오는 중...</p>
            </div>
          </div>
        </main>
        <footer class="bg-white shadow-sm sticky top-0 z-40">
          <div class="max-w-md mx-auto py-8 text-center text-gray-500">
            <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
          </div>
        </footer>
      </div>
    `;if(!e.currentProduct)return`
      <div class="min-h-screen bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">상품을 찾을 수 없습니다</h1>
          <button class="go-to-product-list bg-blue-600 text-white px-4 py-2 rounded">
            홈으로 돌아가기
          </button>
        </div>
      </div>
    `;let t=e.currentProduct;return`
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
            </div>
            <div class="flex items-center space-x-2">
              <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
                ${e.cart.length>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${e.cart.length}</span>`:``}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 브레드크럼 -->
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category1="${t.category1}">
              ${t.category1}
            </button>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category2="${t.category2}">
              ${t.category2}
            </button>
          </div>
        </nav>
        
        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover product-detail-image">
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-1">${t.brand||``}</p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${t.title}</h1>
              <!-- 평점 및 리뷰 -->
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                  ${Array.from({length:5},(e,n)=>`<svg class="w-4 h-4 ${n<(t.rating||4)?`text-yellow-400`:`text-gray-300`}" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>`).join(``)}
                </div>
                <span class="ml-2 text-sm text-gray-600">${t.rating||4}.0 (${t.reviewCount||749}개 리뷰)</span>
              </div>
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${parseInt(t.lprice).toLocaleString()}원</span>
              </div>
              <!-- 재고 -->
              <div class="text-sm text-gray-600 mb-4">
                재고 ${t.stock||107}개
              </div>
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${t.description||`${t.title}에 대한 상세 설명입니다. ${t.brand} 브랜드의 우수한 품질을 자랑하는 상품으로, 고객 만족도가 높은 제품입니다.`}
              </div>
            </div>
          </div>
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" id="quantity-input" value="1" min="1" max="${t.stock||107}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 액션 버튼 -->
            <button id="add-to-cart-btn" data-product-id="${t.productId}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                 hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>
        
        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list">
            상품 목록으로 돌아가기
          </button>
        </div>
        
        <!-- 관련 상품 -->
        ${e.relatedProducts&&e.relatedProducts.length>0?`
        <div class="bg-white rounded-lg shadow-sm">
          <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
            <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3 responsive-grid">
              ${e.relatedProducts.slice(0,19).map(e=>`
                <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
                  <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                    <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
                  </div>
                  <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                  <p class="text-sm font-bold text-blue-600">${parseInt(e.lprice).toLocaleString()}원</p>
                </div>
              `).join(``)}
            </div>
          </div>
        </div>
        `:``}
      </main>
      <footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>
    </div>
  `}function M(){return`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>
        
        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
        
        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        
        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
        
        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>
      
      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
    </main>
  `}let N={products:[],categories:{},total:0,loading:!1,hasNext:!1,cart:u.get()||[],cartModalOpen:!1,page:1,filters:{limit:20,sort:`price_asc`,search:``,category1:``,category2:``},currentProduct:null,productLoading:!1,relatedProducts:[],currentPage:`home`},P=null,F=null;const I=()=>{let e=new URLSearchParams(window.location.search);return{limit:e.get(`limit`)||20,sort:e.get(`sort`)||`price_asc`,search:e.get(`search`)||``,category1:e.get(`category1`)||``,category2:e.get(`category2`)||``}},L=e=>{let t=I(),n={...t,...e},r=new URLSearchParams;Object.entries(n).forEach(([e,t])=>{t&&t!==``&&r.set(e,t.toString())});let i=`${window.location.pathname}${r.toString()?`?`+r.toString():``}`;window.history.replaceState({},``,i)},R=e=>{let t={...N};N={...t,...e},t.cartModalOpen!==N.cartModalOpen&&(N.cartModalOpen?B.open():B.close()),N.cartModalOpen&&B.update(),H(),P&&e.hasNext!==void 0&&P.sethasNext(N.hasNext)},z=()=>N,B=new T({getState:z,setState:R,selector:document.body});function V(e){return y(e)}function H(){let e=z(),t=``;switch(e.currentPage){case`home`:t=V(e);break;case`product-detail`:t=j(e);break;case`404`:t=M();break;default:t=V(e)}let n=document.body.querySelector(`#root`);n&&(n.innerHTML=t)}async function U(e){R({productLoading:!0,currentProduct:null,relatedProducts:[]});try{let t=await a(e);R({currentProduct:t,productLoading:!1});let n=await i({category1:t.category1,category2:t.category2,limit:20}),r=n.products.filter(t=>t.productId!==e);R({relatedProducts:r})}catch(e){console.error(`상품 상세 로딩 실패:`,e),R({productLoading:!1})}}async function W(){R({loading:!0});try{let e=N.filters||I(),t={page:1,limit:parseInt(e.limit,10),sort:e.sort,search:e.search,category1:e.category1,category2:e.category2},[n,r]=await Promise.all([o(),i(t)]);R({categories:n,products:r.products,total:r.pagination.total,hasNext:r.pagination.hasNext,page:r.pagination.hasNext?2:1,loading:!1,filters:e})}catch(e){console.error(`초기 데이터 로딩 실패:`,e),R({loading:!1})}}async function G(e){try{let t={page:1,limit:parseInt(e.limit,10),sort:e.sort,search:e.search,category1:e.category1,category2:e.category2},n=await i(t);R({products:n.products,total:n.pagination.total,hasNext:n.pagination.hasNext,page:n.pagination.hasNext?2:1,loading:!1,filters:e})}catch(e){console.error(`상품 로딩 실패:`,e),R({loading:!1})}}async function K(){if(N.loading||!N.hasNext)return!1;R({loading:!0});try{let e={page:N.page,limit:parseInt(N.filters.limit,10),sort:N.filters.sort,search:N.filters.search,category1:N.filters.category1,category2:N.filters.category2};N.currentPage===`home`&&L(e);let t=await i(e);return R({products:[...N.products,...t.products],total:t.pagination.total,hasNext:t.pagination.hasNext,page:N.page+1,loading:!1}),t.pagination.hasNext}catch(e){return console.error(`다음 페이지 로딩 실패:`,e),R({loading:!1}),!1}}function q(){P&&P.destroy(),P=new c(K,{threshold:200,delay:100,hasNext:N.hasNext}),P.init()}const J=async e=>{let t={...N.filters,...e};L(t),R({filters:t,products:[],hasNext:!1,page:1});try{await G(t),q()}catch(e){console.error(`필터 적용 실패:`,e)}};function Y(){F=new A,F.addRoute(`/`,async()=>{let e=I();R({currentPage:`home`,currentProduct:null,productLoading:!1,relatedProducts:[],filters:e}),await W(),q(),X()}),F.addRoute(`/product/:id`,async e=>{P&&(P.destroy(),P=null),R({currentPage:`product-detail`,category1:``,category2:``}),await U(e),X()}),F.addRoute(`*`,()=>{R({currentPage:`404`,category1:``,category2:``})})}function X(){let e=document.body.querySelector(`#root`);e&&(e.removeEventListener(`change`,Z),e.removeEventListener(`click`,Q),e.removeEventListener(`keydown`,$),e.addEventListener(`change`,Z),e.addEventListener(`click`,Q),e.addEventListener(`keydown`,$))}async function Z(e){let{target:t}=e;t.id===`limit-select`&&await J({limit:parseInt(t.value,10)}),t.id===`sort-select`&&await J({sort:t.value})}async function Q(e){let{target:t}=e;if(t.id===`cart-icon-btn`){R({cartModalOpen:!0});return}if(t.classList.contains(`add-to-cart-btn`)||t.id===`add-to-cart-btn`){let e=t.dataset.productId,n=null;if(N.currentPage===`home`&&(n=N.products.find(t=>t.productId===e)),!n&&N.currentProduct&&(n=N.currentProduct),n){let t=1,r=document.querySelector(`#quantity-input`);r&&(t=parseInt(r.value,10)||1);let i=N.cart.find(t=>t.productId===e);if(i){let n=N.cart.map(n=>n.productId===e?{...n,quantity:n.quantity+t}:n);R({cart:n}),u.set(n)}else R({cart:[...N.cart,{...n,quantity:t,selected:!1}]}),u.set([...N.cart,{...n,quantity:t,selected:!1}]);x.open(`CREATE`)}return}if(t.classList.contains(`breadcrumb-link`)){let e=t.dataset.category1,n=t.dataset.category2;e&&await J({category1:e,category2:``,search:``}),n&&await J({category1:N.currentProduct.category1,category2:n,search:``});return}if(t.classList.contains(`product-image`)||t.classList.contains(`product-info`)||t.closest(`.product-image`)||t.closest(`.product-info`)){e.preventDefault();let n=t.closest(`.product-card`),r=n?.dataset.productId||t.dataset.productId;r&&F.navigate(`/product/${r}`);return}if(t.closest(`.related-product-card`)){let e=t.closest(`.related-product-card`),n=e.dataset.productId;n&&F.navigate(`/product/${n}`);return}if(t.closest(`#quantity-increase`)){e.preventDefault();let t=document.querySelector(`#quantity-input`);if(t){let e=parseInt(t.value,10)||1,n=parseInt(t.getAttribute(`max`),10)||999;e<n&&(t.value=e+1,t.dispatchEvent(new Event(`input`,{bubbles:!0})))}return}if(t.closest(`#quantity-decrease`)){e.preventDefault();let t=document.querySelector(`#quantity-input`);if(t){let e=parseInt(t.value,10)||1;e>1&&(t.value=e-1,t.dispatchEvent(new Event(`input`,{bubbles:!0})))}return}if(e.target.dataset.category1){let t=e.target.dataset.category1;await J({category1:t,category2:``})}if(e.target.dataset.category2){let t=e.target.dataset.category2;await J({category2:t})}if(e.target.dataset.breadcrumb===`reset`&&await J({category1:``,category2:``}),e.target.dataset.breadcrumb===`category1`&&await J({category2:``}),t.closest(`.go-to-product-list`)){F.navigate(`/`);return}}async function $(e){if(e.target.id===`search-input`&&e.key===`Enter`){e.preventDefault();let t=e.target.value.trim();await J({search:t})}}async function ie(){let e=I();R({filters:e,currentPage:`home`}),Y(),await F.handleRoute()}const ae=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-B8UiSF4u.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));ae().then(ie);