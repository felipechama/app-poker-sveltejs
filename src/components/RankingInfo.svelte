<script>
  import { currencyFormatBr } from '../utils';

  export let jackpot = 0;
  export let score = [];
</script>

<style>
  .container {
    font-size: 17px;
    padding: 0 15px;
  }

  h3 {
    margin: 15px 0;
    color: #3897f0;
    font-weight: 500;
  }

  strong {
    font-weight: 600;
  }

  .list-score li {
    margin: 15px 0;
  }
</style>

<div class="container">
  <h3>Pote</h3>

  <p>
    <strong>R$</strong> {currencyFormatBr(jackpot)}
  </p>

  <h3>Pontuação</h3>

  <ul class="list-score">
    {#each score as value, index}
      <li>
        <strong>
          {index + 1}º
          {#if score.length-1 === index}
            ou mais
          {/if}
        </strong> : {value} pontos
      </li>
    {/each}
  </ul>
</div>
