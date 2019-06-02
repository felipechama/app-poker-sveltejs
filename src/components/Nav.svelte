<script>
  import Home from './icon/Home.svelte';
  import Star from './icon/Star.svelte';
  import User from './icon/User.svelte';
  import Document from './icon/Document.svelte';
</script>

<style>
  .container {
    height: 40px;
    display: flex;
    flex: 0 0 auto;
    background-color: #f9f9f9;
    border-top: 1px solid #eee;
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
    display: flex;
    padding: 7px 15px;
  }
</style>

<div class="container">
  <ul class="links">
    <li>
      <a class="link" href="#">
        <Home active={true} />
      </a>
    </li>
    <li>
      <a class="link" href="#">
        <Star active={false} />
      </a>
    </li>
    <li>
      <a class="link" href="#">
        <User active={false} />
      </a>
    </li>
    <li>
      <a class="link" href="#">
        <Document active={false} />
      </a>
    </li>
  </ul>
</div>
