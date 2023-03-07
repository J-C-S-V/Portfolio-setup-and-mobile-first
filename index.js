let header = document.querySelector('header');
let body = document.querySelector('body');
let popUpMenuDiv = document.createElement('div');
let unorderedList = document.createElement('ul');

let headerBar = document.querySelector('.header-bar');
let mainSection = document.querySelector('.main-section');
let mainContainerProjects = document.querySelector('.main-container-projects');

headerBar.style.filter = 'blur(6px)';
mainSection.style.filter = 'blur(6px)';
mainContainerProjects.style.filter = 'blur(6px)';

body.insertBefore(popUpMenuDiv, header);
popUpMenuDiv.appendChild(unorderedList);

//////////////////

const titlesOfMenu = ['Portfolio', 'About', 'Contact'];

for (let i = 0; i < titlesOfMenu.length; i++) {
  let listElement = document.createElement('li');
  listElement.innerText = titlesOfMenu[i];
  unorderedList.appendChild(listElement);
  listElement.style.color = 'white';
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

// body.style.filter = 'blur(3px)';

console.log(body.length);

// console.log(body);
// popUpMenuDiv.innerText = 'hey!';
popUpMenuDiv.style.position = 'absolute';
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

// header - bar;
// main - section;
// main - container - projects;
