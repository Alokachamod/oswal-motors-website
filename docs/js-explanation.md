# JavaScript Explanation for `js/main.js`

This file explains how the JavaScript in `js/main.js` works, line by line.

## 1. Wait until the page is ready

```js
document.addEventListener('DOMContentLoaded', function() {
  // code here runs after the HTML is loaded
});
```

- This makes sure the script only runs after the page content exists.
- Without this, the script might try to use elements that are not yet present.

## 2. Find the menu and menu items

```js
const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');
```

- `menuToggle` is the button or icon used to open/close the mobile menu.
- `menuItems` is the list of links inside the mobile menu.

## 3. If the menu button exists

```js
if (menuToggle) {
  // set up menu behavior
}
```

- This checks that the page really has the mobile menu.
- If there is no `.menu-toggle` element, the script does nothing here.

## 4. Toggle menu open/close

```js
menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  menuItems.classList.toggle('active');
});
```

- When the user clicks the menu button:
  - `classList.toggle('active')` adds `active` if it is missing
  - or removes `active` if it is already there
- The CSS uses `.active` to show or hide the menu.

## 5. Close the menu when a link is clicked

```js
const menuLinks = document.querySelectorAll('.menu-items a');
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    menuItems.classList.remove('active');
  });
});
```

- This finds every link inside the menu.
- When a menu link is clicked, the menu closes.
- It uses `remove('active')` to ensure the menu is hidden.

## 6. Close the menu when clicking outside

```js
document.addEventListener('click', function(event) {
  const isClickInside = menuToggle.contains(event.target) || menuItems.contains(event.target);
  if (!isClickInside && menuItems.classList.contains('active')) {
    menuToggle.classList.remove('active');
    menuItems.classList.remove('active');
  }
});
```

- This listens for clicks anywhere on the page.
- `event.target` is the clicked element.
- If the click is not inside the menu button or menu list, the menu closes.
- This gives a natural behavior for mobile menus.

## 7. Contact form validation

```js
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}
```

- It finds the form with ID `contactForm`.
- When the form is submitted:
  - `preventDefault()` stops browser submission.
  - It reads the field values and removes extra spaces with `trim()`.
  - If any field is empty, it shows an alert.
  - It checks the email with a simple pattern.
  - If the email is invalid, it shows an alert.
  - If all checks pass, it thanks the user and clears the form.

## 8. Financing form validation

```js
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
```

- It is the same idea as the contact form, but for financing details.
- It checks name, email, phone, budget, and vehicle type.
- If any field is missing, it alerts the user.
- It validates the email and then shows a thank-you message.

## Summary

- The script waits until HTML is loaded.
- It handles mobile menu open/close behavior.
- It validates both the contact and financing forms.
- It uses alerts to tell the user when something is missing or invalid.
- It does not send data to a server; it only checks the input and resets the form.
