const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("signupForm");
const errorMsg = document.getElementById("error");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name.length < 3) {
    errorMsg.textContent = "Name must be at least 3 characters.";
    errorMsg.style.color = "red";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMsg.textContent = "Please enter a valid email.";
    errorMsg.style.color = "red";
    return;
  }
  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    errorMsg.style.color = "red";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully!";
  form.reset();
});