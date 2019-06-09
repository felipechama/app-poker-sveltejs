<script>
  import Feedback from './icon/Feedback.svelte';
  import Assessment from './icon/Assessment.svelte';
  import RankingInfo from './RankingInfo.svelte';
  import Ranking from './Ranking.svelte';

  export let jackpot = 0;
  export let score = [];
  export let ranking = [];
  export let stepsDate = [];

  let tabActive = 'ranking';
  let color = {
    active: '#3897f0',
    inative: '#d2d2d2',
  };

  const goToTab = (e) => {
    const link = e.target.closest('button');

    if (!link) {
      return;
    }

    const tab = link.getAttribute('data-link');
    tabActive = tab || 'ranking';
  }
</script>

<style>
  .container {
    margin-top: 15px;
  }

  .nav {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .links {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }

  .links .link {
    fill: #222;
    margin: 0;
    border: 0;
    outline: 0;
    display: flex;
    background: none;
    padding: 7px 15px;
  }

  .content {
    overflow-y: auto;
  }
</style>

<div class="container">
  <nav class="nav">
    <ul class="links">
      <li>
        <button class="link" data-link="ranking" on:click={goToTab}>
          <Assessment color={tabActive === 'ranking' ? color.active : color.inative} />
        </button>
      </li>
      <li>
        <button class="link" data-link="info" on:click={goToTab}>
          <Feedback color={tabActive === 'info' ? color.active : color.inative} />
        </button>
      </li>
    </ul>
  </nav>

  <div class="content">
    {#if tabActive === 'ranking'}
      <Ranking
        ranking={ranking}
        stepsDate={stepsDate}
      />
    {:else}
      <RankingInfo
        score={score}
        jackpot={jackpot}
      />
    {/if}
  </div>
</div>
