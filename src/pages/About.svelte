<script>
  import Loading from '../components/Loading.svelte';
  import Title from '../components/Title.svelte';
</script>

<style>
  .loading {
    margin-top: 50px;
    position: relative;
  }

  p {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .email a {
    color: #666;
  }

  .loading {
    width: 120px;
    height: 120px;
    display: flex;
    margin: 0 auto;
  }
</style>

<div>
  <Title text="Sobre" />

  <p>
    Desenvolvido por <a href="http://felipechama.com" target="_blank">Felipe Chama</a>
  </p>
  <p class="email">
    <a href="mailto:felipechama42@gmail.com" target="_blank">felipechama42@gmail.com</a>
  </p>

  <img class="loading" src="../images/favicon-image.png" alt="Sobre">
</div>
