const compliments = [
  "You're glowing with potential! 🌷",
  "You’re doing amazing, bestie 💖",
  "Small steps still move mountains ⛰️",
  "You’re THAT girl! Unstoppable 💅",
  "You're believing the assignment and becoming the CEO! 💼✨",
  "You're built, not born, that's the difference, girl! 💪🏽💅🏽",
  "You're wearing confidence like your favorite outfit! 💋👠",
  "You're keeping your hustle quiet, and your results loud! 🤫🔥",
  "You're in your soft era, but your goals still eat! ☁️💻",
  "You're fluent in money, babe! 💸💅🏽",
  "You're making only power moves, no side quests! 🏁👑",
  "You're a pretty face with a boardroom brain! 💁🏻‍♀️🧠",
  "You're not lucky, you're consistent! 📈💫",
  "You're building your own table when none was offered! 🪑🛠️",
  "You're beauty, brains, and business plans! 💖📊",
  "You're done chasing, you're attracting now! ✨🧲",
  "You're radiating that unbothered energy! 😌☕",
  "You're too booked for bare minimum vibes! 📅🚫",
  "You're holding coffee in one hand, empire in the other! ☕🏢",
  "You're not competing, you're creating! 🎨🚀",
  "You're making spreadsheets look cute! 💻💅🏽",
  "You're your own upgrade, girl! 🔥👑",
  "You're calm-minded with a rich mindset! 🧘🏻‍♀️💰",
  "You're walking with boss energy, no apologies! ⚡💋",
  "You're shining without a crown, your grind sparkles enough! 👑💎",
  "You're turning pressure into profit, bestie! 💼💞",
  "You're fearless, flawless, and focused! 🎯💄",
  "You're walking around with 'I’ve got this' energy! 💫🌸",
  "You're not cold, you're calculated! 🧊📊",
  "You're not for everyone, you're for success! 💅🏽🚀",
  "You're waking up choosing growth again, iconic! 🌞🌱",
  "You're manifesting in Wi-Fi and lip gloss! 📶💄",
  "You're your own validation, babe! 💌✨",
  "You're done hoping, you're doing now! 💭➡️💥",
  "You're letting your silence work louder than their noise! 🤫💻",
  "You're rewriting the rules, because the old ones expired! 📖🔥",
  "You're making ambition look aesthetic! 🎀📈",
  "You're glowing from discipline, not luck! ✨🕯️",
  "You're not busy, you're booked and blessed! 💅🏽📔",
  "You're proving them wrong twice just for fun! 😉💪🏽",
  "You're soft-voiced with a strong impact! 🌷💥",
  "You're dreaming big, it’s giving legacy! 👑📜",
  "You're walking in, and the energy changes! 💃🏽⚡",
  "You're turning to-do lists into empires! 📝🏰",
  "You're living with a luxury mindset! 💭💎",
  "You're literally the motivation poster, girl! 💖🖼️",
  "You're choosing checkmarks over chaos! ✅🧘🏽‍♀️",
  "You're turning every 'no' into a rebrand! 🔁💅🏽",
  "You're planning like a CEO, slaying like a queen! 🧠👑",
  "You're focused on alignment, not attention! 🌙🧭",
  "You're powered by caffeine and confidence! ☕💳💅🏽",
  "You're the consistency they’ll write quotes about! 📚🔥",
  "You're the standard, not the exception! 💫💋",
  "You're walking in, and the world adjusts! 💃🏻🌍",
  "Keep going, your future self is proud 🌸"
];

function showCompliment() {
  const complimentEl = document.getElementById("compliment");
  complimentEl.style.opacity = 0; // fade out
  setTimeout(() => {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    complimentEl.textContent = random;
    complimentEl.style.opacity = 1; // fade in
  }, 200);
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

// simple timer
let timer;
let seconds = 0;
function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${mins}:${secs}`;
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  document.getElementById("timer").textContent = "00:00";
}
function stopTimer() {
  clearInterval(timer);
  timer = null;
}


window.onload = () => {
  addSparkles();
  showCompliment();
};
document.getElementById("stopBtn").addEventListener("click", stopTimer);

