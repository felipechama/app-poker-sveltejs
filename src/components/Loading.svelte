<style>
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .image {
    display: flex;
    width: 120px;
    height: 120px;
    align-self: center;
    transform: translateZ(1px);
  }

  .logo {
    width: 100%;
    height: 100%;
    animation: anim-logo 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  @keyframes anim-logo {
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
</style>

<div class="container">
  <div class="image">
    <img class="logo" src="images/favicon-image.png" alt="Carrengando...">
  </div>
</div>
