<script>
  import { onMount } from 'svelte';

  import Loading from '../components/Loading.svelte';
  import Player from '../components/Player.svelte';
  import { fetchApi } from '../utils';

  let loading = true;
  let players = [];

  onMount(async () => {
    const res = await fetchApi('/players');
    players = res;
    loading = false;
  });
</script>

<style>
  .title {
    font-weight: bold;
    margin-bottom: 15px;
  }
</style>

{#if loading}
  <Loading />
{:else}
  <div>
    <h2 class="title">
      Jogadores
    </h2>

    <ul class="list-players">
      {#each players as player}
        <li>
          <Player
            name={player.name}
            slug={player.slug}
          />
        </li>
      {/each}
    </ul>
  </div>
{/if}
