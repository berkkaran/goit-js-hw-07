const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls input");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", handleCreate);
destroyButton.addEventListener("click", handleDestroyer);

function handleCreate() {
  boxesContainer.innerHTML = "";
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
}
function handleDestroyer() {
  boxesContainer.innerHTML = "";
  createBoxes(amount);
}
function createBoxes(amount) {
  let boxSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    boxSize += 10;
  }
  boxesContainer.appendChild(fragment);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
