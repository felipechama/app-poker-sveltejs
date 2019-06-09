<script>
  import AvatarPlayer from './AvatarPlayer.svelte';
  import { formatDateToBr, currencyFormatBr } from '../utils';

  export let ranking = [];
  export let stepsDate = [];

  const getPosition = (positions, index, date) => {
    const dateStep = new Date(date);
    const today = new Date();

    if(dateStep > today) {
      return '-';
    }

    const position = positions[index];

    if(!position) {
      return 'out';
    }

    return position;
  }
</script>

<style>
  .ranking {
    font-size: 13px;
    margin-top: 15px;
  }

  .header {
    color: #333;
    background-color: #b5d5f2;
  }

  .header td {
    padding: 10px;
  }

  .content tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .content td {
    padding: 0 10px;
    text-align: center;
    vertical-align: middle;
  }

  .content td.avatar {
    padding: 10px;
  }
</style>

<div>
  <table class="ranking">
    <thead class="header">
      <tr>
        <td></td>
        <td>Jogador</td>
        <td>Pontos</td>
        {#each stepsDate as date}
          <td>{formatDateToBr(date, true)}</td>
        {/each}
        <td>Prêmio</td>
      </tr>
    </thead>
    <tbody class="content">
      {#each ranking as player, index}
        <tr>
          <td>{index + 1}</td>
          <td class="avatar">
            <AvatarPlayer
              size={40}
              name={player.name}
              slug={player.slug}
            />
          </td>
          <td>{player.scoreAcumulate}</td>
          {#each stepsDate as date, index}
            <td>{getPosition(player.stepsPositions, index, date)}</td>
          {/each}
          <td>{currencyFormatBr(player.jackpotAcumulate)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
