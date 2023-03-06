let header = document.querySelector('header');
let body = document.querySelector('body');
let popUpMenuDiv = document.createElement('div');
let unorderedList = document.createElement('ul');

body.insertBefore(popUpMenuDiv, header);
popUpMenuDiv.appendChild(unorderedList);

//////////////////

const titlesOfMenu = ['X', 'Portfolio', 'About', 'Contact'];

for (let i = 0; i < titlesOfMenu.length; i++) {
  let listElement = document.createElement('li');
  listElement.innerText = titlesOfMenu[i];
  unorderedList.appendChild(listElement);
}

/////////////////
// let listElements = document.createElement('li');
// let listElements2 = document.createElement('li');
// let listElements3 = document.createElement('li');
// let listElements4 = document.createElement('li');
// unorderedList.appendChild(listElements);
// unorderedList.appendChild(listElements2);
// unorderedList.appendChild(listElements3);
// unorderedList.appendChild(listElements4);

body.style.filter = 'blur(3px)';
// console.log(body);
// popUpMenuDiv.innerText = 'hey!';
popUpMenuDiv.style.position = 'fixed';
popUpMenuDiv.style.width = '100%';
popUpMenuDiv.style.height = '100vh';
popUpMenuDiv.style.backgroundColor = '#6070FF';
popUpMenuDiv.style.mixBlendMode = 'multiply';
// popUpMenuDiv.style.opacity = '0.9';

// console.log(popUpMenuDiv);

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

header - bar;
main - section;
main - container - projects;
