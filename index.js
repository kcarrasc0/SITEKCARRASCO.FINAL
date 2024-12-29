// Se você precisar de algum JavaScript adicional para o botão, adicione no arquivo scripts/index.js

// Example: Log a message when the contact button is clicked
document.querySelector('.contact-button-container .btn').addEventListener('click', function() {
    console.log('Formulário de contato aberto');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o envio padrão do formulário
      // Lógica para enviar o email (ex.: via API ou backend)
      // Simulação de envio:
      setTimeout(() => {
        popup.style.display = "flex"; // Exibe o modal
      }, 500); // Atraso simulado
    });
  
    closePopup.addEventListener("click", () => {
      popup.style.display = "none"; // Fecha o modal ao clicar no "x"
    });
  
    // Fechar o modal ao clicar fora do conteúdo
    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  