const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  itemRef.classList.add("title");
  return itemRef;
});

// console.log(elements);

const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...elements);
