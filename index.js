let header = document.querySelector('header');
let body = document.querySelector('body');
let popUpMenuDiv = document.createElement('div');
body.style.filter = 'blur(3px)';
body.insertBefore(popUpMenuDiv, header);
// console.log(body);
// popUpMenuDiv.innerText = 'hey!';
popUpMenuDiv.style.position = 'fixed';
popUpMenuDiv.style.width = '100%';
popUpMenuDiv.style.backgroundColor = '#6070FF';
popUpMenuDiv.style.mixBlendMode = 'multiply';
popUpMenuDiv.style.height = '100vh';
// popUpMenuDiv.style.opacity = '0.9';

// console.log(popUpMenuDiv);
let unorderedList = document.createElement('ul');

popUpMenuDiv.appendChild(unorderedList);

{
  /* <div class="popUpMenuDiv">
  <ul>
    <li>X</li>
    <li>Portfolio</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</div>; */
}

// position: sticky;
// width: 100%;
// background: yellow;
// height: 100vh;
