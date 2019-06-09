<script>
  import Star from './icon/Star.svelte';
  import AvatarPlayer from './AvatarPlayer.svelte';

  export let name;
  export let slug;
  export let championships = [];

  const toggleInfoPlayer = (e) => {
    const container = e.target.closest('.container');
    const infoChampion = container.querySelector('.list-champion');

    const btnOpen = container.querySelector('.btn-open');
    const btnClose = container.querySelector('.btn-close');

    infoChampion.classList.toggle('open-list-champion');
    btnOpen.classList.toggle('hide');
    btnClose.classList.toggle('hide');
  }
</script>

<style>
  .container {
    display: flex;
    margin: 8px 0 0 0;
    padding: 8px 0 0 0;
    flex-direction: column;
    border-top: 1px solid #eee;
  }

  .card {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .info {
    flex-grow: 1;
    display: flex;
    margin-left: 10px;
    flex-direction: column;
  }

  .info .name {
    font-size: 12px;
    font-weight: bold;
  }

  .info .stars {
    color: gold;
    height: 15px;
    margin-top: 3px;
  }

  .btn-open,
  .btn-close {
    outline: 0;
    color: #fff;
    font-size: 14px;
    padding: 3px 8px;
    border-radius: 3px;
    border: 1px solid #3897f0;
    background-color: #3897f0;
  }

  .btn-close {
    color: #262626;
    border-color: #dbdbdb;
    background-color: #fafafa;
  }

  .container :global(.hide) {
    display: none;
  }

  .list-champion {
    max-height: 0;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    flex-direction: row;
    list-style-type: square;
    transition: max-height 0.3s ease-out;
  }

  .container :global(.open-list-champion) {
    max-height: 100px;
    transition: max-height 0.5s ease-out;
  }

  .list-champion li {
    margin: 15px 0 0 40px;
  }
</style>

<div class="container">
  <div class="card">
    <div class="image">
      <AvatarPlayer
        name={name}
        slug={slug}
      />
    </div>

    <div class="info">
      <p class="name">{name}</p>
      {#if championships.length}
        <span class="stars">
          {#each championships as i}
            <Star active size={15} />
          {/each}
        </span>
      {/if}
    </div>

    {#if championships.length}
      <button class="btn-open" on:click={toggleInfoPlayer}>
        Saiba mais
      </button>

      <button class="btn-close hide" on:click={toggleInfoPlayer}>
        Fechar
      </button>
    {/if}
  </div>

  <ul class="list-champion">
    {#each championships as champion}
      <li>
        {champion}
      </li>
    {/each}
  </ul>
</div>
