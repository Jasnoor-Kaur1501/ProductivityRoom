const compliments = [
  "You're glowing with potential! 🌷",
  "You’re doing amazing, bestie 💖",
  "Small steps still move mountains ⛰️",
  "You’re THAT girl — unstoppable 💅",
  "Keep going, your future self is proud 🌸"
];

function showCompliment() {
  const random = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("compliment").textContent = random;
}

// sparkle animation
function addSparkles() {
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(sparkle);
  }
}

window.onload = () => {
  addSparkles();
  showCompliment();
};
