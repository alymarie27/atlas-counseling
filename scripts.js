    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    // Clinician contact form: opens a pre-filled email (static site, no form backend)
    const clinicianForm = document.getElementById('clinicianForm');
    if (clinicianForm) {
      clinicianForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const f = clinicianForm.elements;
        const subject = f.interest.value + ' inquiry from ' + f.name.value;
        const body = 'Name: ' + f.name.value + '\n' +
          'Email: ' + f.email.value + '\n' +
          'Credentials / license status: ' + f.credentials.value + '\n' +
          'Interested in: ' + f.interest.value + '\n\n' +
          f.message.value;
        window.location.href = 'mailto:' + clinicianForm.dataset.email +
          '?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(body);
      });
    }
