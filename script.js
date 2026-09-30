const container = document.querySelector("#container");

function createGrid(size) {
  container.innerHTML = "";
  container.style.setProperty("--grid-size", size);

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#000000";
    });
    container.appendChild(square);
  }
}

createGrid(16);

const newGridButton = document.querySelector("#newGrid");
newGridButton.addEventListener("click", () => {
  const newSize = Number.parseInt(prompt("Enter new grid size (1-100):"), 10);

  if (Number.isInteger(newSize) && newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  }
});