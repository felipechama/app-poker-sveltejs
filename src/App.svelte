<script>
  import Routes from './Routes.svelte';
  import Loading from './components/Loading.svelte';
  import Header from './components/Header.svelte';
  import Nav from './components/Nav.svelte';
</script>

<style>
  .main {
    margin-top: 60px;
    margin-bottom: 60px;
  }
</style>

<div>
  <Header />

  <div class="main">
    <Routes />
  </div>

  <Nav />
</div>
