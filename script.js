const flipBtn = document.getElementById("flipBtn");
const colorCode = document.getElementById("colorCode");
const darkModeBtn = document.getElementById("darkModeBtn");
const copyBtn = document.getElementById("copyBtn");
const copiedMsg = document.getElementById("copiedMsg");

// Flip background color
flipBtn.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});

// Generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Toggle dark mode
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Copy to clipboard
copyBtn.addEventListener("click", () => {
  const color = colorCode.textContent;
  navigator.clipboard.writeText(color).then(() => {
    copiedMsg.classList.add("show");
    setTimeout(() => {
      copiedMsg.classList.remove("show");
    }, 2000);
  });
});
