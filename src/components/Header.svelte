<script>
  import Help from './icon/Help.svelte';

  import { goToPage } from '../utils';
</script>

<style>
  .container {
    height: 45px;
    display: flex;
    flex: 0 0 auto;
    position: relative;
    background-color: #f9f9f9;
    border-bottom: 1px solid #eee;
  }

  .title {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
  }

  .title:active .logo {
    opacity: 0.3;
  }

  .title .logo {
    border: 0px;
    height: 23px;
  }

  .link-about {
    fill: #333;
    margin: 0;
    border: 0;
    outline: none;
    top: 0px;
    right: 15px;
    height: 45px;
    display: flex;
    background: none;
    position: absolute;
    align-items: center;
  }
</style>

<div class="container">
  <h1 class="title">
    Poker Brothers
    <img class="logo" src="images/logo/logo-small.png" alt="Poker Brothers">
  </h1>

  <button class="link-about" data-link="about" on:click={goToPage}>
    <Help />
  </button>
</div>
