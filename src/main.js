import './style.css';
import pubmats from './data.js';

// ── DOM refs ────────────────────────────────────────
const grid = document.getElementById('grid');
const nav = document.getElementById('site-nav');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDate = document.getElementById('lightbox-date');
const lightboxOrg = document.getElementById('lightbox-org');
const lightboxDesc = document.getElementById('lightbox-description');
const lightboxTags = document.getElementById('lightbox-tags');
const lightboxClose = document.getElementById('lightbox-close');

// ── Render grid ─────────────────────────────────────
function renderGrid() {
  grid.innerHTML = '';

  if (pubmats.length === 0) {
    grid.innerHTML = `
      <div class="grid-empty">
        <p class="grid-empty__heading">Nothing here yet</p>
        <p class="grid-empty__sub">Check back later for more updates.</p>
      </div>
    `;
    return;
  }

  pubmats.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'grid-item';
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', item.title);
    const imgLoading = index === 0 ? 'eager' : 'lazy';
    const imgPriority = index === 0 ? ' fetchpriority="high"' : '';
    el.innerHTML = `
      <img class="grid-item__img" src="${item.image}" alt="${item.title}" loading="${imgLoading}"${imgPriority} />
      <div class="grid-item__label">
        <p class="grid-item__title">${item.title}</p>
        ${item.date ? `<p class="grid-item__meta">${item.date}${item.org ? ` · ${item.org}` : ''}</p>` : ''}
      </div>
    `;

    el.addEventListener('click', () => openLightbox(item));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item);
      }
    });

    grid.appendChild(el);
  });
}

// ── Lightbox ────────────────────────────────────────
function openLightbox(item) {
  lightboxImg.src = item.image;
  lightboxImg.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxDate.textContent = item.date || '';
  lightboxOrg.textContent = item.org || '';
  lightboxDesc.textContent = item.description || '';

  lightboxTags.innerHTML = '';
  if (item.tags) {
    item.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'lightbox__tag';
      span.textContent = tag;
      lightboxTags.appendChild(span);
    });
  }

  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ── Init ────────────────────────────────────────────
renderGrid();
