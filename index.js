let hamburgerMenu = document.querySelector('.three-bar-menu');
let popUpMenu = document.createElement('div');
let unorderedList = document.createElement('ul');
// hamburgerMenu.innerText = 'Hello';

// document.body.appendChild(hamburgerMenu);

hamburgerMenu.addEventListener('click', () => {
  // alert("It's working!");
  document.body.style.backgroundColor = '#6070ff';
  document.body.style.backdropFilter = "blur(5rem)";
});

<div class="popUpMenu">
  <ul>
    <li>X</li>
    <li>Portfolio</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</div>
