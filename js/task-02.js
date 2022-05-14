// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
//   document.querySelector('#ingredients').append(...ingredients.map(ingredient => {
//   const newEl = document.createElement(`li`);
//   newEl.classList.add(`item`);
//   newEl.textContent = ingredient;
//   return newEl;
//   }));

  const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

const ingredientItemsList = ingredients.map(ingredient => {
  
  const ingredientItem = document.createElement('li');

  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");

  return ingredientItem;

});


ingredientsList.append(...ingredientItemsList);