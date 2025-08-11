document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form validation
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    if (message.trim() === "") {
      alert("Please enter your message.");
      return;
    }

    // If all fields are valid, you can submit the form or show a success message
    alert("Form submitted successfully!");
    contactForm.reset();
  });
});
