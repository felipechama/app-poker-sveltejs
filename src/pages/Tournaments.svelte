<script>
  import { onMount } from 'svelte';

  import Title from '../components/Title.svelte';
  import Loading from '../components/Loading.svelte';
  import Tournament from '../components/Tournament.svelte';
  import Close from '../components/icon/Close.svelte';
  import { fetchApi, formatDateToBr } from '../utils';

  let loading = true;
  let tournament = null;
  let allTournaments = [];
  let showsTournament = false;

  onMount(async () => {
    const res = await fetchApi('/tournaments');
    allTournaments = res || [];
    loading = false;
  });

  const closeTournament = () => {
    tournament = null;
    showsTournament = false;
  };

  const openTournament = async (e) => {
    const button = e.target.closest('button');
    const idTournament = button.getAttribute('data-tournament');

    if (!button || !idTournament) {
      return;
    }

    loading = true;

    tournament = await fetchApi(`/tournament/${idTournament}`);
    loading = false;
    showsTournament = true;
  };
</script>

<style>
  .container {
    padding: 0 15px;
  }

  .list-tournaments {
    display: flex;
    margin-top: 15px;
    flex-direction: column;
    border-top: 1px solid #eee;
  }

  .list-tournaments li {
    padding: 15px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
  }

  .info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .btn-open {
    outline: 0;
    color: #fff;
    font-size: 14px;
    padding: 3px 8px;
    border-radius: 3px;
    border: 1px solid #3897f0;
    background-color: #3897f0;
  }

  .btn-close {
    border: 0;
    outline: 0;
    color: #fff;
    width: 28px;
    height: 25px;
    background: none;
  }

  .title-tournament {
    color: #fff;
    padding: 15px;
    display: flex;
    margin-top: 15px;
    align-items: center;
    flex-direction: row;
    background-color: #3897f0;
    justify-content: space-between;
  }
</style>

{#if loading}
  <Loading />
{:else}
  <div class="container">
    <Title text="Histórico de torneios" />

    {#if showsTournament}
      <div>
        <div class="title-tournament">
          <Title text={`Torneio: ${tournament.name}`} />

          <button class="btn-close" on:click={closeTournament}>
            <Close />
          </button>
        </div>

        <Tournament
          score={tournament.score}
          ranking={tournament.ranking}
          stepsDate={tournament.stepsDate}
          jackpot={tournament.jackpotAcumulate}
        />
      </div>
    {:else}
      <ul class="list-tournaments">
        {#each allTournaments as tournament}
          <li>
            <div class="info">
              <p class="title">{tournament.name}</p>
              <p class="date">
                Data do torneio:
                {formatDateToBr(tournament.startAt)}
              </p>
            </div>

            <button
              class="btn-open"
              on:click={openTournament}
              data-tournament={tournament.id}
            >
              Abrir
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{/if}
