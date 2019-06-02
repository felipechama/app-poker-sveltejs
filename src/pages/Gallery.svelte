<script>
  import Loading from '../components/Loading.svelte';

  let loading = false;
</script>

<style>

</style>

{#if loading}
  <Loading />
{:else}
  <div>
    gallery page
  </div>
{/if}
