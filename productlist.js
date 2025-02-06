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
        `<article class= "product">
          <a href="product.html?id=${product.id}">
          <img src=https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp alt="produktbillede" />
          </a>

              <p class="soldout ${product.soldout && "synlig"}">SOLD OUT</p>


          <h2 class="underoverskrift_product"> ${product.productdisplayname}</h2>
          <p class="brandname"> ${product.brandname}</p>
          <p class="price"> ${product.price}-</p>


          <div class="discount ${!product.discount && "skjul"} ">
          
             <p class="price">${Math.floor(product.price * (1 - product.discount / 100))}  </p>
            <p>-${product.discount}%</p>
          </div>
          
          <a class="productlinks" href="product.html?id=${product.id}">Read more</a>
        </article>`
    )

    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}
