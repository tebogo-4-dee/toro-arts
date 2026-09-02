// ============================================================
// Toro Arts Music Academy — shared script
// Used by: index.html, gallery.html, join.html
// Handles: mobile nav toggle, Join Us form validation.
// The form is NOT yet connected to email/WhatsApp/a backend —
// see the comment in the submit handler below for where to add that.
// ============================================================

// ===== Mobile nav toggle =====
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navlinks = document.querySelector('.navlinks');

  if (toggle && navlinks) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      navlinks.classList.toggle('open');
    });

    // Close the menu when a link is tapped
    navlinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        navlinks.classList.remove('open');
      });
    });
  }

  // ===== Join Us form validation (visual only — not wired to a backend yet) =====
  var joinForm = document.getElementById('join-form');
  if (joinForm) {
    var note = document.getElementById('form-note');

    joinForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var email = document.getElementById('email').value.trim();
      var age = document.getElementById('age').value.trim();

      if (!name || !phone || !email || !age) {
        showNote('Please fill in your name, phone number, email and age.', 'error');
        return;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showNote('Please enter a valid email address.', 'error');
        return;
      }

      // No backend connected yet — this just confirms the form works.
      // Once live, this can submit to email, WhatsApp, or a booking system.
      showNote('Thanks, ' + name + '! This form isn\'t connected yet — for now, please reach Innocentia directly on 079 802 2038.', 'success');
      joinForm.reset();
    });

    function showNote(message, type) {
      note.textContent = message;
      note.className = 'form-note show ' + type;
    }
  }
});
