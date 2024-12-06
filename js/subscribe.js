        function adicionarGenero() {

          const genero = document.getElementById("gender").value;

          if (!genero) {
            alert("Por favor, selecione o gênero da equipe antes de enviar o formulário!")
            return false;
          }
          return true;
        }

        function adicionarCurso () {
          const curso = document.getElementById("course").value;

          if (!curso) {
            alert("Por favor, selecione o curso antes de enviar o formulário!")
            return false;
          }
          return true;
        }

        function validarTelefone() {
          const telefone = document.getElementById("captain-phone").value;
          const padraoBrasileiro = /^(\(?\d{2}\)?\s?)?\d{5}-?\d{4}$/;
        
          if (!padraoBrasileiro.test(telefone)) {
            alert("Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.");
            return false;
          }
        
          return true;
        }
        

        function validarForm(event) {
        
          if (!adicionarGenero() && !adicionarCurso() && !validarTelefone) {
            event.preventDefault(); 
            return false;
          };
          
          alert("Sua inscrição foi recebida, QUE COMECEM OS JOGOS!");
        };
      
        document.getElementById("team-form").addEventListener("submit", validarForm);