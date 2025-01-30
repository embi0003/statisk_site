let productId = 1531;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => vis(data));

function vis(data) {
  console.log(data);
}
