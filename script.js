// Simple form handling for the "notify me" signup
// No backend here — this just gives the user feedback in the browser.

const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();

  if (email) {
    note.textContent = "Thanks — we'll email you when the next batch is ready.";
    form.reset();
  } else {
    note.textContent = "Please enter an email address.";
  }
});
