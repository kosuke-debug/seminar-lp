// ============================================
// 動画編集 はじめの一歩セミナー LP
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initFadeIn();
  initFaqAccordion();
  initHamburger();
});

// --- スクロールフェードイン ---
function initFadeIn() {
  const targets = document.querySelectorAll(
    '.benefit-card, .checklist, .overview-table-wrap, .timeline__item, .safety-card, .instructor, .gallery__item, .story, .faq__item'
  );

  targets.forEach((el) => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

// --- ハンバーガーメニュー ---
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('header-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      btn.classList.remove('is-open');
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

// --- FAQ アコーディオン（1つ開くと他を閉じる）---
function initFaqAccordion() {
  const details = document.querySelectorAll('.faq__item');

  details.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        details.forEach((other) => {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
}
