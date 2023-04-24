const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  ul.appendChild(li);
});






