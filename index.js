// const category_list_container = document.querySelector(".category_list_container");

// fetch(`https://kea-alt-del.dk/t7/api/categories`)
//   .then((response) => response.json())
//   .then((data) => showList(data));

// function showList(categories) {
//   console.log(categories);
//   const markup = categories
//     .map((category) => `<a href="productlist.html" class="category underoverskrift"> ${category.category}</a>`)

//     .join("");
//   console.log(markup);
//   category_list_container.innerHTML = markup;
// }

console.log("Script loaded");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showCategori);

function showCategori(data) {
  console.log("mine data er:", data);

  const markup = data
    .map((element) => `<a href="productlist.html?category=${element.category}" class="category underoverskrift"> ${element.category}</a >`)

    .join("");

  console.log("min markup er ", markup);
  document.querySelector(".category_list_container").innerHTML = markup;
}
