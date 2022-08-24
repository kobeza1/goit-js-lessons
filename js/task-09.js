function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = refs.body.style.backgroundColor;
}
