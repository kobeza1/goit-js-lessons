const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  //   console.log(event.currentTarget.value.length.toString());
  //   console.log(event.currentTarget.dataset);

  if (
    event.currentTarget.value.length.toString() ===
    event.currentTarget.dataset.length
  ) {
    inputRef.classList.contains("invalid")
      ? inputRef.classList.replace("invalid", "valid")
      : inputRef.classList.add("valid");
  } else
    inputRef.classList.contains("valid")
      ? inputRef.classList.replace("valid", "invalid")
      : inputRef.classList.add("invalid");

  console.log(inputRef.classList.length);
}
