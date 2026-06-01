import "./styles/main.css";

const shareBtn = document.querySelector(".share-btn");
const shareBubble = document.querySelector(".share-bubble");

shareBtn.addEventListener("click", (e) => {
  e.preventDefault();
  shareBubble.classList.toggle("active");
});
