<script>
  import Splash from './components/Splash.svelte';
  import Header from './components/Header.svelte';

	let loading = true;

  setTimeout(() => {
    loading = false;
  }, 5000);
</script>


{#if loading}
  <Splash />
{:else}
  <div>
    <Header />
  </div>
{/if}
