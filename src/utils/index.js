import { onMount } from 'svelte';
import { pageActive } from '../stores.js';

export const goToPage = (e) => {
  const link = e.target.closest('button');

  if (!link) {
    return;
  }

  const linkPage = link.getAttribute('data-link');
  pageActive.set(linkPage || 'tournament');
}

export const fetchApi = async (path) => {
  const res = await fetch(`http://localhost:3000/api${path}`);

  if(res.status === 404) {
    return null;
  }

  return await res.json();
}
