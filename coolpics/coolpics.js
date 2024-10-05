function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');

    menuItems.classList.toggle('show');
}

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);

