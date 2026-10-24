const productsList = document.getElementById("products-list");

const products = [
  {
    id: 85,
    title: "Man Plaid Shirt",
    price: 34.99,
    discountPercentage: 19.5,
    rating: 3.46,
    stock: 82,
    brand: "Classic Wear",
    category: "mens-shirts",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/4.webp",
    ],
  },
  {
    id: 86,
    title: "Man Short Sleeve Shirt",
    price: 19.99,
    discountPercentage: 6.83,
    rating: 2.9,
    stock: 2,
    brand: "Casual Comfort",
    category: "mens-shirts",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/4.webp",
    ],
  },
  {
    id: 87,
    title: "Men Check Shirt",
    price: 27.99,
    discountPercentage: 11.38,
    rating: 2.72,
    stock: 95,
    brand: "Urban Chic",
    category: "mens-shirts",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/4.webp",
    ],
  },
  {
    id: 159,
    title: "iPad Mini 2021 Starlight",
    price: 499.99,
    discountPercentage: 3.64,
    rating: 3.18,
    stock: 47,
    brand: "Apple",
    category: "tablets",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/4.webp",
    ],
  },
  {
    id: 160,
    title: "Samsung Galaxy Tab S8 Plus Grey",
    price: 599.99,
    discountPercentage: 13.31,
    rating: 4.68,
    stock: 62,
    brand: "Samsung",
    category: "tablets",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/4.webp",
    ],
  },
  {
    id: 161,
    title: "Samsung Galaxy Tab White",
    price: 349.99,
    discountPercentage: 18.2,
    rating: 3.72,
    stock: 92,
    brand: "Samsung",
    category: "tablets",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/4.webp",
    ],
  },
  {
    id: 89,
    title: "Nike Baseball Cleats",
    price: 79.99,
    discountPercentage: 18.04,
    rating: 3.88,
    stock: 12,
    brand: "Nike",
    category: "mens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/4.webp",
    ],
  },
  {
    id: 90,
    title: "Puma Future Rider Trainers",
    price: 89.99,
    discountPercentage: 4.2,
    rating: 4.9,
    stock: 90,
    brand: "Puma",
    category: "mens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/4.webp",
    ],
  },
  {
    id: 91,
    title: "Sports Sneakers Off White & Red",
    price: 119.99,
    discountPercentage: 4.97,
    rating: 4.77,
    stock: 17,
    brand: "Off White",
    category: "mens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/4.webp",
    ],
  },
  {
    id: 92,
    title: "Sports Sneakers Off White Red",
    price: 109.99,
    discountPercentage: 0.04,
    rating: 4.69,
    stock: 62,
    brand: "Off White",
    category: "mens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/4.webp",
    ],
  },
];

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  productsList.innerHTML += `<div class="product-card" data-id="${product.id}">
      <div class="product-image-wrapper">
        <a href="product-details.html?id=${product.id}">
          <img src="${product.images[0]}" alt="${product.title}" class="product-image">
        </a>
        <a href="product-details.html?id=${product.id}" class="quick-view-btn" aria-label="Quick View">
          <i class="fa-solid fa-eye"></i>
        </a>
      </div>
      <div class="product-info">
        <a href="product-details.html?id=${product.id}">
          <h3 class="product-title">${product.title}</h3>
        </a>
        <p class="product-brand">${product.brand || "Brand"}</p>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating} (${product.reviews?.length || 0} reviews)</span>
        </div>
        <div class="product-price">
          <span class="current-price">$${product.price}</span>
     
        </div>
          <button class="add-to-cart-btn" id="addToCartBtn-${product.id}" data-id="${product.id}">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
      </div>
    </div>`;
}

/*
 <div class="product-card" data-id="${product.id}">
      <div class="product-image-wrapper">
        <a href="product-details.html?id=${product.id}">
          <img src="${product.images[0]}" alt="${product.title}" class="product-image">
        </a>
        <a href="product-details.html?id=${product.id}" class="quick-view-btn" aria-label="Quick View">
          <i class="fa-solid fa-eye"></i>
        </a>
      </div>
      <div class="product-info">
        <a href="product-details.html?id=${product.id}">
          <h3 class="product-title">${product.title}</h3>
        </a>
        <p class="product-brand">${product.brand || "Brand"}</p>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating} (${product.reviews?.length || 0} reviews)</span>
        </div>
        <div class="product-price">
          <span class="current-price">$${product.price}</span>
        </div>
          <button class="add-to-cart-btn" id="addToCartBtn-${product.id}" data-id="${product.id}">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
      </div>
    </div>
*/
