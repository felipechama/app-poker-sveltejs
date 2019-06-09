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
    all tournaments page
  </div>
{/if}
