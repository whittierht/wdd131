import services from './services.mjs';

function generateServiceHTML(service) {
  return `
    <div class="service-card" id="${service.id}">
      <img class="img-${service.id}" alt="${service.name}" src="${service.image}">
      <h2>${service.name}</h2>
      <h3 class="price">$${service.price} ${service.frequency}</h3>
      <div class="tags">
        <h4>Includes: ${service.tags.map(tag => `<span class="tag"> ${tag}</span>`).join(' ')}<h4>
      </div>
      <p>${service.description}</p>
      
      <button 
        class="open-modal" 
        data-service="${service.name}" 
        data-price="${service.price}">
      </button>
    </div>
  `;
}

function renderServices() {
  const servicesBlock = document.getElementById('services-block');
  servicesBlock.innerHTML = services.map(service => generateServiceHTML(service)).join('');

  const serviceButtons = servicesBlock.querySelectorAll('button');
  serviceButtons.forEach(button => {
    button.addEventListener('click', handleServiceClick);
  });
}

function handleServiceClick(event) {
  const button = event.target;

  const serviceName = button.getAttribute('data-service');
  const servicePrice = button.getAttribute('data-price');

  document.getElementById('service-name').value = serviceName;
  document.getElementById('service-price').value = `$${servicePrice}`;

  openModal();
}

function openModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  modalOverlay.style.display = 'flex';
}

function closeModal(event) {
  const modalOverlay = document.getElementById('modal-overlay');
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
}

renderServices();

const modalOverlay = document.getElementById('modal-overlay');
modalOverlay.addEventListener('click', closeModal);

// Smooth Scroll for Services Section
const myButton = document.getElementById("button2");
myButton.addEventListener("click", () => {
  window.scrollTo({
    top: 590,
    behavior: "smooth"
  });
});

function closeModal2() {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.style.display = 'none';
}

const closerButton = document.getElementById("closer-button");
closerButton.addEventListener ('click', closeModal2);

function openContactModal() {
    const modalOverlay2 = document.getElementById('form-container')
    modalOverlay2.style.display = 'flex';
}

const contactButton = document.getElementById("contact-button")
contactButton.addEventListener('click', openContactModal)

function closeModal3() {
    const contactOverlay = document.getElementById('form-container');
    contactOverlay.style.display = 'none';
}
  
const closerButton2 = document.getElementById("closer-button-contact");
closerButton2.addEventListener ('click', closeModal3);

function closeContactModal(event) {
    const contactOverlay = document.getElementById('form-container');
    if (event.target === contactOverlay) {
      contactOverlay.style.display = 'none';
    }
  }
  
  const contactOverlay = document.getElementById('form-container');
  contactOverlay.addEventListener('click', closeContactModal);


  

