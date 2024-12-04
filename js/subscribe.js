let maxPlayers = 0;
        function adicionarGenero() {

          const genero = document.getElementById("gender").value;

          if (!genero) {
            alert("Por favor, selecione o gênero da equipe antes de adicionar jogadores!")
            return false;
          }
          return true;
        }

        function adicionarCurso () {
          const curso = document.getElementById("course").value;

          if (!curso) {
            alert("Por favor, selecione o curso antes de adicionar jogadores!")
            return false;
          }
          return true;
        }

        function atualizarCampos() {
          const modalidade = document.getElementById("modalidade").value;
          if (modalidade === "voleibol") {
            maxPlayers = 11;  
          } else if (modalidade === "futsal") {
            maxPlayers = 11;  
          } else if (modalidade === "basquete") {
            maxPlayers = 11;
          } else if (modalidade === "handebol") {
            maxPlayers = 11;
          } else if (modalidade === "xadrez") {
            maxPlayers = 1;
          } else if (modalidade === "tenismesa") {
            maxPlayers = 1;
          } else if (modalidade === "praia") {
            maxPlayers = 1;
          } else {
            maxPlayers = 0;
          }

          const container = document.getElementById("players-container");
          container.innerHTML = '<div class="player-field"><input type="text" name="player[]" placeholder="Digite o nome do jogador" required><button type="button" class="remove-player-button" onclick="removerJogador(this)">Remover</button></div>';
        }

        function adicionarJogador() {

          const validarGen = adicionarGenero()
          if (!validarGen) {
            return;
          }

          const validarCur = adicionarCurso()
          if (!validarCur) {
            return;
          }

          const modalidade = document.getElementById("modalidade").value;

          if (!modalidade) {
            alert("Por favor, selecione sua modalidade antes de adicionar jogadores!");
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