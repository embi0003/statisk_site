const URLparams = new URLSearchParams(window.location.search);
let productId = URLparams.get("id");

// let productId = 1531;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => vis(data));

function vis(data) {
  console.log(data);
  productContainer.innerHTML = `
  <div class="product-image">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Puma-tee" />
  </div>

  <div class="product-info">
    <h2>${data.productdisplayname}</h2>
    <p class="producttitel">${data.brandname}</p>
    <p>${data.category}</p>
    <p>${data.id}</p>

    <p class="price">${data.price},- </p>

    <label for="size">Choose a size</label>
    <select id="size">
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
    </select>
    <button id="add-to-basket" disabled>Put to basket</button>
  </div>  
`;
}
