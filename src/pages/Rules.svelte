<script>
  import { onMount } from 'svelte';

  import Loading from '../components/Loading.svelte';
  import { fetchApi } from '../utils';

  let loading = true;
  let title = '';
  let content = '';

  onMount(async () => {
    const res = await fetchApi('/page/regras');

    title = res.title;
    content = res.content;
    loading = false;
  });
</script>

<style>
  .title {
    font-weight: bold;
  }

  .content {
    margin-top: 25px;
    font-size: 16px;
    text-align: justify;
    line-height: 1.5em;
  }

  .content :global(h3) {
    float: left;
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
  }
</style>

{#if loading}
  <Loading />
{:else}
  <div>
    <h2 class="title">
      {title}
    </h2>

    <div class="content">
      {@html content}
    </div>
  </div>
{/if}
