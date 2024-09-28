const themeSelector = document.querySelector('#mode-select');

function changeTheme() {
  const logo = document.getElementById('logo'); // Use getElementById instead of getElementsById

  if (themeSelector.value === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'dark-logo.png';
  } else {
    document.body.classList.remove('dark');
    logo.src = 'byuilogo.webp';
  }
}

// Add an event listener to the themeSelector element
themeSelector.addEventListener('change', changeTheme);