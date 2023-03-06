let header = document.querySelector('header');
let body = document.querySelector('body');
console.log(body);
let popUpMenuDiv = document.createElement('div');
popUpMenuDiv.innerText = 'hey!';
body.insertBefore(popUpMenuDiv, header);
popUpMenuDiv.style.position = 'fixed';
popUpMenuDiv.style.width = '100%';
popUpMenuDiv.style.backgroundColor = '#6070FF';
popUpMenuDiv.style.opacity = '0.9';

popUpMenuDiv.style.height = '100vh';

// console.log(popUpMenuDiv);
let unorderedList = document.createElement('ul');

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
