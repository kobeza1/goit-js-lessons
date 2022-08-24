const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", textRefInputHandler);

function textRefInputHandler(event) {
  //   const fontsizeAt = event.currentTarget.value.toString() + "px";
  //   console.log(fontsizeAt);
  textRef.style.fontSize = event.currentTarget.value.toString() + "px";
}
