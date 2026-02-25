// ===== Navbar scroll effect =====
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('navbar-scrolled', window.scrollY > 50);
});

// ===== Scroll-to-top button =====
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Scroll reveal (IntersectionObserver) =====
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '-40px' }
);
revealEls.forEach((el) => observer.observe(el));
