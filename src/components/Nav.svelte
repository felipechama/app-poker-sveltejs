<script>
  import Home from './icon/Home.svelte';
  import List from './icon/List.svelte';
  import User from './icon/User.svelte';
  import Document from './icon/Document.svelte';

  import { pageActive } from '../stores.js';
  import { goToPage } from '../utils';
</script>

<style>
  .container {
    z-index: 9;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40px;
    display: flex;
    position: fixed;
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
    margin: 0;
    border: 0;
    outline: none;
    display: flex;
    background: none;
    padding: 7px 15px;
  }
</style>

<nav class="container">
  <ul class="links">
    <li>
      <button class="link" data-link="tournament" on:click={goToPage}>
        <Home active={$pageActive === 'tournament' ? true : false} />
      </button>
    </li>
    <li>
      <button class="link" data-link="tournaments" on:click={goToPage}>
        <List active={$pageActive === 'tournaments' ? true : false} />
      </button>
    </li>
    <li>
      <button class="link" data-link="players" on:click={goToPage}>
        <User active={$pageActive === 'players' ? true : false} />
      </button>
    </li>
    <li>
      <button class="link" data-link="rules" on:click={goToPage}>
        <Document active={$pageActive === 'rules' ? true : false} />
      </button>
    </li>
  </ul>
</nav>
