function viewerTemplate(pic, alt) {
    return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

//This took forever to get to work
function viewHandler(event) {
    // Get the clicked element (the image)
    const clickedElement = event.target;

    // Get the src attribute of the image and split it at the hyphen
    const imgSrc = clickedElement.src.split("-");

    // Construct the new image file name for the full-sized image
    const fullImgSrc = imgSrc[0] + "-full.jpeg";

    // Insert the viewerTemplate into the body element at the beginning
    const viewerHtml = viewerTemplate(fullImgSrc, clickedElement.alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHtml);

    // Add an event listener to the close button after it has been added to the DOM
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    // Remove the viewer element when the close button is clicked
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

// Attach the click event listeners to the gallery images
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach((image) => {
    image.addEventListener('click', viewHandler);
});



function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
}

function handleResize() {
    const menuButton = document.querySelector('.menu-button');
    const menuItems = document.querySelector('.menu-items');


    if (window.innerWidth >= 1000) {
        // For large screens: show the menu, hide the button
        menuButton.style.display = 'none';
        menuItems.classList.add('show'); 
    } else {
        // For small screens: hide the menu, show the button
        menuButton.style.display = 'inline';
        menuItems.classList.remove('show');
    }

}
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);


window.addEventListener('resize', handleResize);


handleResize();
