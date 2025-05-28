const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridButton");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("square-divs");
    container.appendChild(div);
  }
}

container.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    event.target.style.background = "pink";
    console.log(event.currentTarget);

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.background = "";
    }, 1000);
  },
  false
);

gridButton.addEventListener("click", () => {
  let squares = prompt("How many squares do you want?");
  if (squares > 100) {
    squares = prompt("Choose max 100 squares: ");
  }
  console.log(`Squares: ${squares}`);
  let widthSquare = 1512 / squares - 4;
  console.log(`widthSquare: ${widthSquare}`);
  adjustHeight(widthSquare);
});

function adjustHeight(newHeight) {
  // Set a new height (e.g., 200px)
  // divs.style.height = `${newHeight}px`;
  if (newHeight !== null) {
    const divs = document.querySelectorAll(".square-divs");
    divs.style.height = `${newHeight}px`;
  }
}
