export const ProductItem = ({ brand, image, lprice, productId, title }) => {
  return /*html */ `
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
        data-product-id="${productId}">
        <!-- 상품 이미지 -->
        <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image" data-product-id="${productId}">
            <img src="${image}"
                alt="${title}"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-200 product-image"
                data-product-id="${productId}"
                loading="lazy">
        </div>
        <!-- 상품 정보 -->
        <div class="p-3">
            <div class="cursor-pointer product-info mb-3" data-product-id="${productId}">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1 product-info" data-product-id="${productId}">
                ${title}
            </h3>
            <p class="text-xs text-gray-500 mb-2">${brand}</p>
            <p class="text-lg font-bold text-gray-900">
                ${parseInt(lprice, 10).toLocaleString("ko-KR")}원
            </p>
            </div>
            <!-- 장바구니 버튼 -->
            <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                    hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${productId}">
            장바구니 담기
            </button>
        </div>
    </div>
  `;
};
