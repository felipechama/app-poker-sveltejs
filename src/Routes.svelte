<script>
  import Tournament from './pages/Tournament.svelte';
  import Players from './pages/Players.svelte';
  import Rules from './pages/Rules.svelte';
  import Gallery from './pages/Gallery.svelte';
  import About from './pages/About.svelte';

  import { pageActive } from './stores.js';
</script>

{#if $pageActive == 'players'}
  <Players />
{:else if $pageActive == 'rules'}
  <Rules />
{:else if $pageActive == 'gallery'}
  <Gallery />
{:else if $pageActive == 'about'}
  <About />
{:else}
  <Tournament />
{/if}
