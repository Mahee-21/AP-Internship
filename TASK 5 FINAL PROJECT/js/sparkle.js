// sparkle.js
const sparkleContainer = document.createElement("div");
sparkleContainer.className = "sparkle-container";
document.body.appendChild(sparkleContainer);

for (let i = 0; i < 15; i++) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.animationDuration = 3 + Math.random() * 5 + "s";
  sparkleContainer.appendChild(sparkle);
}
