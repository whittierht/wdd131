const themeSelector = document.querySelector('#mode-select');

function changeTheme() {
  const logo = document.getElementById('logo'); 

  if (themeSelector.value === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'dark-logo.png';
  } else {
    document.body.classList.remove('dark');
    logo.src = 'byuilogo.webp';
  }
}


themeSelector.addEventListener('change', changeTheme);
