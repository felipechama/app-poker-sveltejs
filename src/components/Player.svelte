<script>
  import Star from './icon/Star.svelte';

  export let name;
  export let slug;
  export let championships = [];

  const onErrorImage = (e) => {
    e.target.src = '../images/players/default.jpg';
  }
</script>

<style>
  .container {
    display: flex;
    margin: 8px 0 0 0;
    padding: 8px 0 0 0;
    align-items: center;
    flex-direction: row;
    border-top: 1px solid #eee;
  }

  .image {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #ddd;
  }

  .image img {
    width: 100%;
    height: auto;
  }

  .info {
    display: flex;
    margin-left: 10px;
    flex-direction: column;
  }

  .name {
    font-size: 12px;
    font-weight: bold;
  }

  .stars {
    color: gold;
    height: 15px;
    margin-top: 3px;
  }
</style>

<div class="container">
  <div class="image">
    <img src="../images/players/{slug}.jpg" alt="{name}" on:error={onErrorImage}>
  </div>

  <div class="info">
    <p class="name">{name}</p>
    {#if championships.length}
      <p class="stars">
        {#each championships as i}
          <Star
            active
            size={15}
          />
        {/each}
      </p>
    {/if}
  </div>
</div>
