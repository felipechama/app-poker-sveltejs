<script>
  import { onMount } from 'svelte';

  import Loading from '../components/Loading.svelte';
  import Title from '../components/Title.svelte';
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
  .content {
    margin-top: 25px;
    font-size: 16px;
    text-align: justify;
    line-height: 1.5em;
  }

  .content :global(h3) {
    float: left;
    color: #3897f0;
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
  }
</style>

{#if loading}
  <Loading />
{:else}
  <div>
    <Title text={title} />

    <div class="content">
      {@html content}
    </div>
  </div>
{/if}
