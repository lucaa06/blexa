// blexaai — main.js | No ES module imports — works from file://
(function() {
  'use strict';

  var _u = atob('aHR0cHM6Ly9icmdyeXN4cXVicGliZGNpZWFvZS5zdXBhYmFzZS5jbw==');
  var _k = atob('c2JfcHVibGlzaGFibGVfaldlY3oxeTU1RlJTbFJvMlFQT05mUV9tdjhXUEg2RQ==');
  var supabase = window.supabase.createClient(_u, _k);

  if (typeof initGDPR === 'function') {
    initGDPR({ brandName: 'Blexa AI', accentColor: '#7C3AED' });
  }

  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e, i) {
      if (e.isIntersecting) {
        setTimeout(function() { e.target.classList.add('visible'); }, i * 90);
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function(el) { revealObs.observe(el); });
  setTimeout(function() {
    document.querySelectorAll('.reveal-up').forEach(function(el) { el.classList.add('visible'); });
  }, 150);

  function handleWaitlist(form) {
    var emailInput = form.querySelector('input[type="email"]');
    var btn = form.querySelector('button[type="submit"]');
    var email = emailInput.value.trim();
    var orig = btn.innerHTML;

    btn.innerHTML = '...';
    btn.disabled = true;

    supabase.from('waitlist').insert({ startup: 'blexaai', email: email }).then(function(res) {
      if (res.error) {
        btn.innerHTML = res.error.code === '23505' ? '✓ Già iscritto!' : '✕ Riprova';
      } else {
        btn.innerHTML = '✓ Richiesta inviata!';
      }
      btn.style.opacity = '.7';
      setTimeout(function() { btn.innerHTML = orig; btn.style.opacity = ''; btn.disabled = false; form.reset(); }, 3500);
    });
  }

  window.handleWaitlistReact = function(email, callback) {
    supabase.from('waitlist').insert({ startup: 'blexaai', email: email }).then(function(res) {
      if (res.error) {
        callback(res.error.code === '23505' ? 'duplicate' : 'error');
      } else {
        callback('success');
      }
    });
  };

  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) { e.preventDefault(); handleWaitlist(form); });
  });
})();
