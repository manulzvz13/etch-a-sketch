const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridButton");

// Initial grid size
createGrid(16);

gridButton.addEventListener("click", () => {
  let squares = parseInt(prompt("How many squares per side do you want? (Max 100)"), 10);

  // Validate input
  if (isNaN(squares) || squares <= 0 || squares > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  createGrid(squares);
});

function createGrid(squaresPerSide) {
  // Clear existing grid
  container.innerHTML = "";

  // Set container to flex and wrap
  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  const totalSquares = squaresPerSide * squaresPerSide;
  const squareSize = 1512 / squaresPerSide; // Adjust size here based on container width

  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("square-divs");
    div.style.flex = `0 0 ${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.style.boxSizing = "border-box";
    div.style.border = "1px solid #ccc";
    container.appendChild(div);
  }

  // Add hover effect
  const allSquares = document.querySelectorAll(".square-divs");
  allSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "pink";
      setTimeout(() => {
        div.style.backgroundColor = "";
      }, 1000);
    });
  });
}

