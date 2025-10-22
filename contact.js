document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const fields = ['name', 'email', 'subject', 'message'];
      fields.forEach(id => {
        document.getElementById("contact-error-" + id).textContent = "";
      });
      document.getElementById("contact-success").textContent = "";

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      let valid = true;
      if (!name) {
        document.getElementById("contact-error-name").textContent = "Full name is required.";
        valid = false;
      }
      if (!email) {
        document.getElementById("contact-error-email").textContent = "Email is required.";
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("contact-error-email").textContent = "Please enter a valid email address.";
        valid = false;
      }
      if (!subject) {
        document.getElementById("contact-error-subject").textContent = "Subject is required.";
        valid = false;
      }
      if (!message) {
        document.getElementById("contact-error-message").textContent = "Message is required.";
        valid = false;
      } else if (message.length < 10) {
        document.getElementById("contact-error-message").textContent = "Message must be at least 10 characters.";
        valid = false;
      }
      if (valid) {
        document.getElementById("contact-success").textContent = "Thank you! Your message has been sent.";
        this.reset();
      }
    });