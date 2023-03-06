let hamburgerMenu = document.querySelector('.three-bar-menu');

hamburgerMenu.innerText = 'Hello';

document.body.appendChild(hamburgerMenu);

addEventListener('onclick', () => {
  alert("It's working!");
});
