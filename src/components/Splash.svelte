<style>
  .container {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    background-color: #4d4d4d;
    background: linear-gradient(-20deg, #ca0a48, #4d4d4d);
    background: -o-linear-gradient(-20deg, #ca0a48, #4d4d4d);
    background: -moz-linear-gradient(-20deg, #ca0a48, #4d4d4d);
    background: -webkit-linear-gradient(-20deg, #ca0a48, #4d4d4d);
  }

  .image {
    width: 120px;
    height: auto;
    align-self: center;
  }

  .loading {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }

  @keyframes blink {
    0% {
      opacity: .7;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: .7;
    }
  }

  .title {
    color: #fff;
    display: flex;
    font-size: 28px;
    line-height: 28px;
    align-self: center;
    position: relative;
  }
</style>

<div class="container">
  <img class="image loading" src="../images/splash-icon.png">

  <p class="title">
    Poker Brothers
  </p>
</div>
