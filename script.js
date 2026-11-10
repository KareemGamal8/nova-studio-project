const productsList = document.getElementById("products-list");
const loader = document.getElementById("loader");
const categoryFilter = document.getElementById("categoryFilter");

// Get Products
fetch("https://dummyjson.com/products")
  .then((response) => {
    loader.style.display = "none";

    if (!response.ok) {
      throw new Error("404 Not Found");
    }

    return response.json();
  })
  .then((data) => {
    const products = data.products;

    products.map((product) => {
      productsList.innerHTML += `  
    <div class="product-card">
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
        <p class="product-brand">${product.brand}</p>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating}</span>
        </div>
        <div class="product-price">
          <span class="current-price">$${product.price}</span>
        </div>
          <button class="add-to-cart-btn" id="addToCartBtn-${product.id}" >
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
      </div>
    </div>`;
    });
  })
  .catch((error) => {
    productsList.textContent = error.message;
  });

// Get Categories
fetch("https://dummyjson.com/products/categories")
  .then((response) => {
    if (!response.ok) {
      throw new Error("404 Not Found");
    }

    return response.json();
  })
  .then((data) => {
    data.map((category) => {
      categoryFilter.innerHTML += `<option value=${category.slug}>${category.name}</option>`;
    });
  });

// Category Filter
categoryFilter.addEventListener("change", () => {
  const selectedCategory = categoryFilter.value;

  loader.style.display = "flex";

  productsList.innerHTML = "";

  fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
    .then((response) => {
      loader.style.display = "none";

      if (!response.ok) {
        throw new Error("404 Not Found");
      }

      return response.json();
    })
    .then((data) => {
      const products = data.products;

      products.map((product) => {
        productsList.innerHTML += `  
    <div class="product-card">
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
        <p class="product-brand">${product.brand}</p>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating}</span>
        </div>
        <div class="product-price">
          <span class="current-price">$${product.price}</span>
        </div>
          <button class="add-to-cart-btn" id="addToCartBtn-${product.id}" >
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
      </div>
    </div>`;
      });
    })
    .catch((error) => {
      productsList.textContent = error.message;
    });
});

/**
 * Get user category
 * Fetch products by selected category
 * Show products in products page
 */
