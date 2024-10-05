function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
}

function handleResize() {
    const menuButton = document.querySelector('.menu-button');
    const menuItems = document.querySelector('.menu-items');


    if (window.innerWidth >= 1000) {

        menuButton.style.display = 'none';
        menuItems.classList.add('show'); 
    } else {

        menuButton.style.display = 'inline'; 
        if (!menuItems.classList.contains('show')) {
            menuItems.classList.remove('show'); // 
        }
    }
}


const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);


window.addEventListener('resize', handleResize);


handleResize();
