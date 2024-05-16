document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Vérification de l'identifiant et du mot de passe
      if (username === 'classe-espagnol' && password === '1Evideo150ans') {
        // Redirection vers un autre site
        window.location.href = 'Page3.html';
      } else {
        alert('Identifiant ou mot de passe incorrect.');
      }
    });
  });
  