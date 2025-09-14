// Part 2: Functions with Parameters & Return Values

// Function to calculate double of a number
function doubleValue(num) {
  return num * 2;
}

// Demonstrating scope
let globalMessage = "Hello from Global Scope!";

function showMessage() {
  let localMessage = "Hello from Local Scope!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible only inside
}

// Part 3: Combining CSS + JS

function animateBox() {
  const box = document.querySelector('.box');
  box.style.transform = "rotate(360deg) scale(1.2)";
  setTimeout(() => {
    box.style.transform = "rotate(0deg) scale(1)";
  }, 1000);
}

function toggleModal() {
  const modal = document.getElementById("modal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}
