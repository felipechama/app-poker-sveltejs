<script>
  import { onMount } from 'svelte';

  import Loading from '../components/Loading.svelte';
  import Title from '../components/Title.svelte';
  import Player from '../components/Player.svelte';
  import { fetchApi } from '../utils';

  let loading = true;
  let players = [];

  const sortByChampion = (a, b) => {
    if(a.championships.length > b.championships.length) {
      return -1;
    }

    if(a.championships.length < b.championships.length) {
      return 1;
    }

    return 0;
  }

  onMount(async () => {
    const res = await fetchApi('/players');
    players = res.sort(sortByChampion);
    loading = false;
  });
</script>

<style>
  .container {
    padding: 0 15px;
  }

  .list-players {
    margin-top: 15px;
  }
</style>

{#if loading}
  <Loading />
{:else}
  <div class="container">
    <Title text="Jogadores" />

    <ul class="list-players">
      {#each players as player}
        <li>
          <Player
            name={player.name}
            slug={player.slug}
            championships={player.championships}
          />
        </li>
      {/each}
    </ul>
  </div>
{/if}
