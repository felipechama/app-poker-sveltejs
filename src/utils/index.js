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
  const res = await fetch(`https://poker-brothers.herokuapp.com/api${path}`);

  if(res.status === 404) {
    return [];
  }

  return await res.json();
}

export const currencyFormatBr = (number) => (
  number
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
)

export const formatDateToBr = (date, short) => {
  const longDate = date.substr(0, 10).split('-').reverse().join('/');

  if(short) {
    return longDate.substr(0, 5);
  }

  return longDate;
}
