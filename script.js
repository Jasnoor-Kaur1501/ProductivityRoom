const compliments = [
  "You're glowing with potential! 🌷",
  "You’re doing amazing, bestie 💖",
  "Small steps still move mountains ⛰️",
  "You’re THAT girl! Unstoppable 💅",
  "Keep going, your future self is proud 🌸"
];

function showCompliment() {
  const random = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("compliment").textContent = random;
}

function addSparkles() {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 3}s`;
    document.body.appendChild(sparkle);
  }
}
window.onload = addSparkles;


function addBows() {
  for (let i = 0; i < 15; i++) {
    const bow = document.createElement("img");
    bow.src = "https://cdn-icons-png.flaticon.com/512/682/682665.png"; // pink bow icon
    bow.classList.add("flower");
    bow.style.position = "absolute";
    bow.style.top = `${Math.random() * 100}%`;
    bow.style.left = `${Math.random() * 100}%`;
    bow.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(bow);
  }
}

window.onload = () => {
  addBows();
  showCompliment();
};
