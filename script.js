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

function addFlowers() {
  for (let i = 0; i < 10; i++) {
    const flower = document.createElement("img");
    flower.src = "https://cdn-icons-png.flaticon.com/512/765/765435.png";
    flower.classList.add("flower");
    flower.style.top = `${Math.random() * 100}%`;
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(flower);
  }
}

window.onload = () => {
  addFlowers();
  showCompliment();
};

