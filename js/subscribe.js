const playersContainer = document.getElementById('players-container');
    const addPlayerButton = document.getElementById('add-player-button');

    addPlayerButton.addEventListener('click', () => {
      const playerField = document.createElement('div');
      playerField.classList.add('player-field');
      playerField.innerHTML = `
        <input type="text" name="player[]" placeholder="Digite o nome do jogador" required>
        <button id="removebutton" type="button" onclick="removePlayer(this)">Remover</button>
      `;
      playersContainer.appendChild(playerField);
    });

    function removePlayer(button) {
      button.parentElement.remove();
    }