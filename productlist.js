const product_list_container = document.querySelector(".product_list_container");
const mycategory = new URLSearchParams(window.location.search).get("category");
console.log("produktliste loader...", mycategory);

const productList = document.querySelector(".list");
const overskrift = document.querySelector("h2");

overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `<article class="product udsolgt">
          <a href="product.html?id=${product.id}">
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
  product_list_container.innerHTML = markup;
}
