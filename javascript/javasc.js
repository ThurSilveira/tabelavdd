// script.js
function validarCelula(input) {
    const respostaCorreta = input.dataset.resposta.toUpperCase();  // Pega a resposta correta e transforma em maiúscula
  
    if (input.value.trim().toUpperCase() === respostaCorreta) {
      input.classList.remove('errado');
      input.classList.add('correto');
    } else {
      resetarTabela();
      alert ("Tente novamente!")
    }
  }
  
  function resetarTabela() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = ''; 
      input.classList.remove('correto', 'errado'); 
    });
  }
  