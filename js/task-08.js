const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Please, fill all the fields!");
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();

  //   const emailEl = document.querySelector("[type='email']");
  //   const passwordEl = document.querySelector("[type='password']");
}
