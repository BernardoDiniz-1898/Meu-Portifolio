/*
 * main.js — comportamento da interface do portfólio.
 * Sem dependências externas.
 *
 * A classe `.js` (adicionada no <head>, antes da pintura) habilita a revelação
 * por seção; sem JavaScript o conteúdo aparece por padrão. Este arquivo é
 * carregado com `defer`, então o DOM já está pronto quando ele roda.
 */
(function () {
  var menuToggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');

  function setMenu(open) {
    navLinks.classList.toggle('active', open);
    menuToggle.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  }

  menuToggle.addEventListener('click', function () {
    setMenu(!navLinks.classList.contains('active'));
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenu(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setMenu(false);
    }
  });

  var navbar = document.querySelector('.navbar');
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) {
        return;
      }
      var name = document.getElementById('cf-name').value.trim();
      var email = document.getElementById('cf-email').value.trim();
      var message = document.getElementById('cf-message').value.trim();
      var subject = encodeURIComponent('Contato do portfólio — ' + name);
      var body = encodeURIComponent(message + '\n\n— ' + name + ' <' + email + '>');
      window.location.href =
        'mailto:dinizbernardo798@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
})();
