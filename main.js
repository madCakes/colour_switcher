const btn = document.querySelector("button");
const h2El = document.querySelector("h2");
const background = document.querySelector("section");

btn.addEventListener("click", () => {
  let colour = "";
  // Random Hex string
  colour += Math.random().toString(16).slice(2, 8).padStart(7, "#");

  background.style.backgroundColor = colour;
  h2El.innerText = colour;
  console.log(colour);
});

// Add event listener for h2el click. Listen for click to copy code to dashboard
