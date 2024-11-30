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
                class="service-button" 
                data-service="${service.name}" 
                data-price="${service.price}">
                Sign up for ${service.name}
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

    const hiddenForm = document.getElementById('hidden-form');
    hiddenForm.style.display = 'block';

    hiddenForm.scrollIntoView({ behavior: 'smooth' });
}

renderServices();

const myButton = document.getElementById("button2");

myButton.addEventListener("click", scrollFunction);

function scrollFunction() {
    window.scrollTo({
        top:590,
        behavior: "smooth"
    });
    
}

const myButton2 = document.getElementById("closer-button");
myButton2.addEventListener("click", closerFunction);

function closerFunction() {
    const hiddenForm = document.getElementById('hidden-form');
    hiddenForm.style.display = 'none';
    window.scrollTo({
        top:590,
        behavior: "smooth"
    });

}

