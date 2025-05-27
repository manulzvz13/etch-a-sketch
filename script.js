const container = document.querySelector("#container");

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
  false,
);


