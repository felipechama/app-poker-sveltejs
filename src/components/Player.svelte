<script>
  export let name;
  export let slug;

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

  .name {
    font-size: 14px;
    margin-left: 10px;
  }
</style>

<div class="container">
  <div class="image">
    <img src="../images/players/{slug}.jpg" alt="{name}" on:error={onErrorImage}>
  </div>

  <p class="name">{name}</p>
</div>
