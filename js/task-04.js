const refs = {
  incrementBtn: document.querySelector("[data-action = increment]"),
  decrementBtn: document.querySelector("[data-action = decrement]"),
  counter: document.querySelector("#value"),
};

let counterValue = 0;

refs.incrementBtn.addEventListener("click", onIncrementBtn);
refs.decrementBtn.addEventListener("click", onDecrementBtn);

function onIncrementBtn() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

function onDecrementBtn() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}
