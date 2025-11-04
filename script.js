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

window.onload = () => {
  addSparkles();
  showCompliment();
};
/* ==== Widget + To-Do + Affirmation + Stop button logic ==== */

/* STOP button for timer (pause keeping seconds) */
function stopTimer() {
  clearInterval(timer);
  timer = null;
}

/* Toggle widgets */
const toggleTodoBtn = document.getElementById('toggleTodoBtn');
const toggleAffBtn = document.getElementById('toggleAffBtn');
const todoWidget = document.getElementById('todoWidget');
const affWidget = document.getElementById('affWidget');

toggleTodoBtn.addEventListener('click', () => {
  const show = todoWidget.classList.toggle('hidden');
  // ensure other widget closed
  affWidget.classList.add('hidden');
});

toggleAffBtn.addEventListener('click', () => {
  const show = affWidget.classList.toggle('hidden');
  todoWidget.classList.add('hidden');
});

/* DRAGGING helper */
function makeDraggable(headerId, widgetEl) {
  const header = document.getElementById(headerId);
  let isDown = false, startX, startY, origX, origY;
  header.addEventListener('pointerdown', (e) => {
    isDown = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect = widgetEl.getBoundingClientRect();
    origX = rect.left;
    origY = rect.top;
    header.setPointerCapture(e.pointerId);
  });
  window.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    widgetEl.style.left = (origX + dx) + 'px';
    widgetEl.style.top = (origY + dy) + 'px';
    widgetEl.style.right = 'auto';
    widgetEl.style.bottom = 'auto';
  });
  window.addEventListener('pointerup', (e) => { isDown = false; });
}
makeDraggable('todoHeader', todoWidget);
makeDraggable('affHeader', affWidget);

/* ===== 24h localStorage helpers ===== */
function saveWithExpiry(key, value, hours=24) {
  const data = { value, expiry: Date.now() + hours*60*60*1000 };
  localStorage.setItem(key, JSON.stringify(data));
}
function loadWithExpiry(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    const obj = JSON.parse(raw);
    if (!obj.expiry || Date.now() > obj.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return obj.value;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}

/* ===== To-Do logic ===== */
const tasksKey = 'prodroom_tasks_v1';
const tasksListEl = document.getElementById('tasksList');
const todoForm = document.getElementById('todoForm');
const newTaskInput = document.getElementById('newTask');
const clearTasksBtn = document.getElementById('clearTasks');

function renderTasks(tasks) {
  tasksListEl.innerHTML = '';
  tasks.forEach((t, i) => {
    const li = document.createElement('li');
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = !!t.done;
    cb.className = 'task-checkbox';
    cb.addEventListener('change', () => {
      tasks[i].done = cb.checked;
      saveWithExpiry(tasksKey, tasks);
      renderTasks(tasks);
    });

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = t.text;
    if (t.done) span.style.textDecoration = 'line-through';

    const del = document.createElement('button');
    del.className = 'task-delete';
    del.textContent = '✕';
    del.addEventListener('click', () => {
      tasks.splice(i,1);
      saveWithExpiry(tasksKey, tasks);
      renderTasks(tasks);
    });

    li.appendChild(cb);
    li.appendChild(span);
    li.appendChild(del);
    tasksListEl.appendChild(li);
  });
}

function loadTasks() {
  const loaded = loadWithExpiry(tasksKey);
  if (loaded && Array.isArray(loaded)) return loaded;
  return [];
}

let tasks = loadTasks();
renderTasks(tasks);

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = newTaskInput.value.trim();
  if (!text) return;
  tasks.push({ text, done:false });
  saveWithExpiry(tasksKey, tasks);
  newTaskInput.value = '';
  renderTasks(tasks);
});

clearTasksBtn.addEventListener('click', () => {
  tasks = [];
  saveWithExpiry(tasksKey, tasks);
  renderTasks(tasks);
});

/* ===== Affirmation widget logic ===== */
const affKey = 'prodroom_aff_v1';
const affText = document.getElementById('affText');
const saveAffBtn = document.getElementById('saveAff');
const clearAffBtn = document.getElementById('clearAff');

function loadAff() {
  const v = loadWithExpiry(affKey);
  if (v) affText.value = v;
}
loadAff();

saveAffBtn.addEventListener('click', () => {
  saveWithExpiry(affKey, affText.value || '');
  // visual feedback
  saveAffBtn.textContent = 'Saved';
  setTimeout(()=> saveAffBtn.textContent = 'Save', 900);
});
clearAffBtn.addEventListener('click', () => {
  affText.value = '';
  localStorage.removeItem(affKey);
});

/* close widgets when clicking outside (optional nicety) */
document.addEventListener('click', (e) => {
  if (!e.target.closest('.floating-widget') && !e.target.closest('.widget-toggle') ) {
    // do nothing — keeps them open unless toggles clicked
  }
});

