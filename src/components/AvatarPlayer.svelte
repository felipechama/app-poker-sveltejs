<script>
  export let name;
  export let slug;
  export let size = 50;

  const onErrorImage = (e) => {
    if(e.target.src.match(/default/)) {
      return;
    }

    e.target.src = '../images/players/default.jpg';
  }
</script>

<style>
  .image {
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #ddd;
  }

  .image img {
    width: 100%;
    height: auto;
  }
</style>

<div
  class="image"
  style="width: {size}px; height: {size}px"
>
  <img
    alt="{name}"
    on:error={onErrorImage}
    src="../images/players/{slug}.jpg"
  />
</div>
