// === Theme Toggle ===
// Get the button that toggles theme by its ID
const toggleBtn = document.getElementById("themeToggle");

// Add a click event listener to the button
toggleBtn.addEventListener("click", () => {
  // Toggle the "dark-mode" class on the body element
  // If it's there, remove it; if not, add it
  document.body.classList.toggle("dark-mode");
});


// === Form Validation ===
// Get the signup form and error message display elements
const form = document.getElementById("signupForm");
const errorMsg = document.getElementById("error");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  // Prevent form from submitting automatically (stops page reload)
  event.preventDefault();

  // Get values entered by the user and clean extra spaces
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // === Validation Rules ===
  // 1. Name must be at least 3 characters
  if (name.length < 3) {
    errorMsg.textContent = "Name must be at least 3 characters.";
    errorMsg.style.color = "red";
    return; // stop further checking
  }

  // 2. Email must match a simple regex pattern
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMsg.textContent = "Please enter a valid email.";
    errorMsg.style.color = "red";
    return;
  }

  // 3. Password must be at least 6 characters long
  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    errorMsg.style.color = "red";
    return;
  }

  // === If all checks pass ===
  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully!";

  // Reset form inputs to empty
  form.reset();
});
