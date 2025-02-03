const listContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `<article class="product udsolgt">
          <a href="product.html">
            <div class="img-w-txt">
              <img src=https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp alt="Puma tshirt med cat " />
              <p>SOLD OUT</p>
            </div>
          </a>
          <h2 class="underoverskrift_product"> ${product.productdisplayname}</h2>
          <p class="brandname"> ${product.brandname}</p>
          <p class="price"> ${product.price}-</p>
          <a class="productlinks" href="product.html">Read more</a>
        </article>`
    )

    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
