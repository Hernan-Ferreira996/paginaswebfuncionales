function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

const quotes = [
  "Hoy es un buen día para empezar.",
  "¡Podés con todo!",
  "Cada pequeño paso cuenta.",
  "Nunca es tarde para mejorar.",
  "Con disciplina todo es posible."
];
document.getElementById('quote').textContent =
  quotes[Math.floor(Math.random() * quotes.length)];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
