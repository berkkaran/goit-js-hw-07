const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  let inputValue = event.target.value.trim();

  if (inputValue) {
    output.innerText = inputValue;
  } else {
    output.innerText = "Anonymous";
  }
});
