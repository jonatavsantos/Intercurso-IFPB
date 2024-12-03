let maxPlayers = 0;

        function atualizarCampos() {
          const modalidade = document.getElementById("modalidade").value;
          if (modalidade === "voleibol") {
            maxPlayers = 9;  
          } else if (modalidade === "futsal") {
            maxPlayers = 10;  
          } else {
            maxPlayers = 0;
          }

          const container = document.getElementById("players-container");
          container.innerHTML = '<div class="player-field"><input type="text" name="player[]" placeholder="Digite o nome do jogador" required><button type="button" class="remove-player-button" onclick="removerJogador(this)">Remover</button></div>';
        }

        function adicionarJogador() {
          const modalidade = document.getElementById("modalidade").value;
          if (!modalidade) {
            alert("Por favor, selecione sua modalidade antes de adicionar jogadores.");
            return;
          }

          const container = document.getElementById("players-container");
          const currentPlayers = container.getElementsByClassName("player-field").length;
          
          if (currentPlayers < maxPlayers) {
            const novoCampo = document.createElement("div");
            novoCampo.classList.add("player-field");
            novoCampo.innerHTML = `<input type="text" name="player[]" placeholder="Digite o nome do jogador" required><button type="button" class="remove-player-button" onclick="removerJogador(this)">Remover</button>`;
            container.appendChild(novoCampo);
          } else {
            alert("Número máximo de jogadores atingido.");
          }
        }
        
        function removerJogador(button) {
          const campoJogador = button.parentElement;
          campoJogador.remove();
        }