// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      menuItems.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const menuLinks = document.querySelectorAll('.menu-items a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = menuToggle.contains(event.target) || menuItems.contains(event.target);
      if (!isClickInside && menuItems.classList.contains('active')) {
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');
      }
    });
  }

  // Form validation for contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Basic validation
      if (!name || !email || !phone || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email');
        return;
      }
      
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // Form validation for financing form
  const financingForm = document.getElementById('financingForm');
  if (financingForm) {
    financingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('financingName').value.trim();
      const email = document.getElementById('financingEmail').value.trim();
      const phone = document.getElementById('financingPhone').value.trim();
      const budget = document.getElementById('budget').value.trim();
      const vehicleType = document.getElementById('vehicleType').value;
      
      if (!name || !email || !phone || !budget || !vehicleType) {
        alert('Please fill in all fields');
        return;
      }
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email');
        return;
      }
      
      alert('Thank you! We will help you find the perfect vehicle. Expect a call within 24 hours.');
      financingForm.reset();
    });
  }
});
