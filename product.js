let productId = 1531;
let productContainer = document.querySelector(".productContainer");

fetch(`https:/kea-alt.del.dk/t7/api/products/§{productID}`)
  .then((response) => response.json())

  .then((data) => {
    productContainer.innerHTML = `

        <div class="product-image">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/§{productId}.webp" alt="Puma-tee" />
        </div>

        <div class="product-info">
          <h2>Grey Solid Round Neck T-Shirt</h2>
          <p><strong>Brand:</strong> Puma</p>
          <p><strong>Color:</strong> Grey</p>
          <p><strong>Inventory number:</strong> 1531</p>

          <p class="price">DKK 799,-</p>

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
  });
