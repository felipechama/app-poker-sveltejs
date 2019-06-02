import { pageActive } from '../stores.js';

export const goToPage = (e) => {
  const link = e.target.closest('button');

  if (!link) {
    return;
  }

  const linkPage = link.getAttribute('data-link');
  pageActive.set(linkPage || 'tournament');
}
