// znajdujemy ul#categories
const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");


const numCategories = categoriesItems.length;
console.log("Number of categories: " + numCategories);


categoriesItems.forEach(function (item) {
  
  const header = item.querySelector("h2");

  
  const elements = item.querySelectorAll("li");


  const numElements = elements.length;
  console.log("Category: " + header.textContent);
  console.log("Elements: " + numElements);
});