// Se você precisar de algum JavaScript adicional para o botão, adicione no arquivo scripts/index.js

// Example: Log a message when the contact button is clicked
document.querySelector('.contact-button-container .btn').addEventListener('click', function() {
    console.log('Formulário de contato aberto');
  });

const button = document.querySelector('form button')
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialogbutton")

button.onclick = function () {
  Modal.showModal()

}
  

buttonClose.onclick = function () {
  modal.close()
}