
function openContactModal() {
    const modalOverlay2 = document.getElementById('form-container')
    modalOverlay2.style.display = 'flex';
}

const contactButton = document.getElementById("contact-button")
contactButton.addEventListener('click', openContactModal)

function closeModal() {
  const contactOverlay = document.getElementById('form-container');
  contactOverlay.style.display = 'none';
}

const closerButton = document.getElementById("closer-button-contact");
closerButton.addEventListener ('click', closeModal);


function closeContactModal(event) {
  const contactOverlay = document.getElementById('form-container');
  if (event.target === contactOverlay) {
    contactOverlay.style.display = 'none';
  }
}

const contactOverlay = document.getElementById('form-container');
contactOverlay.addEventListener('click', closeContactModal);

const contactMessage = document.getElementById("contact-message");
const form = document.getElementById("contact-form");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  contactMessage.style.display = 'block';
  window.setTimeout(closeModal, 5000)
})
