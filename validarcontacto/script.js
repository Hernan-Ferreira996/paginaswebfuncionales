document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "⚠️ Todos los campos son obligatorios.";
    formMessage.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = "⚠️ Ingresa un correo válido.";
    formMessage.style.color = "red";
    return;
  }

  if (message.length < 5) {
    formMessage.textContent = "⚠️ El mensaje debe tener al menos 10 caracteres.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "✅ Mensaje enviado correctamente.";
  formMessage.style.color = "green";

  // Aquí podrías enviar los datos con fetch o AJAX a un backend si tuvieras
  document.getElementById("contactForm").reset();
});
