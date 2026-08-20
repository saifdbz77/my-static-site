console.log("Site loaded");

const btn = document.getElementById("ctaBtn");
const msg = document.getElementById("clickMsg");

const messages = [
  "You clicked it! 🎉",
  "Nice click! 🌟",
  "Do it again! 🔁",
  "You're on fire! 🔥",
  "Automation feels good, right? ⚙️"
];

btn.addEventListener("click", () => {
  const random = messages[Math.floor(Math.random() * messages.length)];
  msg.textContent = random;
  btn.style.transform = "scale(0.95)";
  setTimeout(() => (btn.style.transform = ""), 150);
});
