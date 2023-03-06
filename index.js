let hamburgerMenu = document.querySelector('.three-bar-menu');

// hamburgerMenu.innerText = 'Hello';

// document.body.appendChild(hamburgerMenu);

hamburgerMenu.addEventListener('click', () => {
  // alert("It's working!");
  // document.body.style.backGroundColor = '#6070ff';
  document.body.style.backgroundColor = '#6070ff';
  // document.body.style.mixBlendMode = multiply;
  document.body.style.backdropFilter = "blur(5px)";
});
