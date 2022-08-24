function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector("[data-create"),
  destroyBtn: document.querySelector("[data-destroy"),
  input: document.querySelector("input"),
  divsBox: document.querySelector("#boxes"),
};

console.log(refs.createBtn);
console.log(refs.destroyBtn);
console.log(refs.input);

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const quantity = refs.input.value;
  console.log(quantity);

  for (let i = 0; i < quantity; i += 1) {
    refs.divsBox.appendChild(document.createElement("div"));

    refs.divsBox.children[i].style.width = `${30 + 10 * i}px`;
    refs.divsBox.children[i].style.height = `${30 + 10 * i}px`;
    refs.divsBox.children[i].style.backgroundColor = getRandomHexColor();
  }
}

function onDestroyBtnClick() {
  refs.divsBox.innerHTML = "";
}
