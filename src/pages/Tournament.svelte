<script>
  import { onMount } from 'svelte';

  import Loading from '../components/Loading.svelte';
  import Title from '../components/Title.svelte';
  import Tournament from '../components/Tournament.svelte';
  import { fetchApi } from '../utils';

  let tournament;
  let loading = true;
  let error = false;
  let errorMessage = '';

  onMount(async () => {
    const tournaments = await fetchApi('/tournaments');

    if(!tournaments) {
      errorMessage = 'Ops! Ocorreu um erro para capturar os dados dos torneios.';
      error = true;
      return;
    }

    const idLastTournament = tournaments[0] && tournaments[0].id;

    if(!idLastTournament) {
      errorMessage = 'Ops! Não existe torneio cadastrado.';
      error = true;
    }

    const currentTournament = await fetchApi(`/tournament/${idLastTournament}`);

    if(!currentTournament) {
      errorMessage = 'Ops! Ocorre um erro para capturar os dados do torneio atual.'
      error = true;
    }

    tournament = currentTournament;
    loading = false;
  });
</script>

<style>

</style>

{#if loading}
  <Loading />
{:else if error}
  <div>
    <p>{errorMessage}</p>
  </div>
{:else}
  <div class="container">
    <Title text={`Torneio: ${tournament.name}`} />

    <Tournament
      score={tournament.score}
      ranking={tournament.ranking}
      stepsDate={tournament.stepsDate}
      jackpot={tournament.jackpotAcumulate}
    />
  </div>
{/if}
