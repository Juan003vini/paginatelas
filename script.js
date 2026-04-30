// ===========================
//  CLUBE DAS TELAS — script.js
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // ── Intersection Observer: fade-in ao rolar ──
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.pilar, .d2-title, .eyebrow').forEach((el) => {
    el.classList.add('fade-hidden');
    observer.observe(el);
  });

  // ── Stagger nos pilares ──
  document.querySelectorAll('.pilar').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  // ── CTA click tracking (console) ──
  document.querySelectorAll('.cta-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log('[CTA] Clique no botão WhatsApp — ' + new Date().toISOString());
    });
  });

});

// ── Injetar CSS de fade para scroll ──
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  .fade-hidden {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .fade-hidden.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(fadeStyle);
