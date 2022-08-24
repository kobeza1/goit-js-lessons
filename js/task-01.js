const itemsAllRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsAllRef.length}`);

itemsAllRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
