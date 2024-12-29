// Se você precisar de algum JavaScript adicional para o botão, adicione no arquivo scripts/index.js

// Example: Log a message when the contact button is clicked
document.querySelector('.contact-button-container .btn').addEventListener('click', function() {
    console.log('Formulário de contato aberto');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const dialog = document.getElementById("thank-you-dialog");
    const closeBtn = document.getElementById("close-dialog-btn");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Impede o envio do formulário para testar localmente
      dialog.showModal(); // Exibe o popup
    });
  
    closeBtn.addEventListener("click", () => {
      dialog.close(); // Fecha o popup
    });
  });
  