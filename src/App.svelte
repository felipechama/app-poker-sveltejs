<script>
  import Routes from './Routes.svelte';
  import Loading from './components/Loading.svelte';
  import Header from './components/Header.svelte';
  import Nav from './components/Nav.svelte';
</script>

<style>
  :global(html) {
    height: 100%;
  }

  :global(body) {
    height: 100%;
    overflow: hidden;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .main {
    padding: 15px;
    flex: 1 1 auto;
    overflow-y: auto;
    position: relative;
  }

  .main .loading {
    height: 100%;
    display: flex;
    justify-content: center;
  }
</style>

<div class="container">
  <Header />

  <div class="main">
    <Routes />
  </div>

  <Nav />
</div>
