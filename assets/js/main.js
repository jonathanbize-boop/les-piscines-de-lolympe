/* Les Piscines de l'Olympe — interactions */
(function () {
  'use strict';

  /* ---- Header : transparent -> solide au défilement ---- */
  var header = document.querySelector('.header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('solid');
    else header.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
      var open = document.body.classList.contains('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }
  // Sous-menus mobiles
  document.querySelectorAll('.m-toggle').forEach(function (t) {
    t.addEventListener('click', function () {
      var sub = t.parentElement.querySelector('.m-sub');
      var open = sub.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  // Fermer le menu au clic sur un lien
  document.querySelectorAll('.mobile-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });

  /* ---- Révélation au défilement ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }

  /* ---- Compteurs chiffrés ---- */
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = parseFloat(el.getAttribute('data-count')),
            suffix = el.getAttribute('data-suffix') || '', dur = 1600, t0 = null;
        if (reduce) { el.textContent = target + suffix; co.unobserve(el); return; }
        function tick(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1),
              val = Math.floor((1 - Math.pow(1 - p, 3)) * target);
          el.textContent = val + suffix;
          if (p < 1) requestAnimationFrame(tick); else el.textContent = target + suffix;
        }
        requestAnimationFrame(tick);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { co.observe(c); });
  }

  /* ---- FAQ accordéon ---- */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item'),
          ans = item.querySelector('.faq-a'),
          open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0';
    });
  });

  /* ---- Année dynamique ---- */
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Formulaire de contact (démonstration) ---- */
  var form = document.querySelector('form[data-contact]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = form.querySelector('.form-success');
      if (ok) { ok.hidden = false; ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.querySelectorAll('input,textarea,select,button').forEach(function (el) { el.disabled = true; });
    });
  }
})();
