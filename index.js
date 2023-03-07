let header = document.querySelector('header');
let body = document.querySelector('body');
let popUpMenuDiv = document.createElement('div');
let unorderedList = document.createElement('ul');
let crossIcon = document.createElement('a');
let bottomLine = document.createElement('span');

let headerBar = document.querySelector('.header-bar');
let mainSection = document.querySelector('.main-section');
let mainContainerProjects = document.querySelector('.main-container-projects');

// add a class to the anchor tag

crossIcon.classList.add('crossIcon');

// Cross Icon styling

crossIcon.innerText = 'X';
crossIcon.style.color = 'white';
crossIcon.style.fontSize = '2rem';
crossIcon.style.position = 'absolute';
crossIcon.style.top = '1.5rem';
crossIcon.style.right = '1rem';
crossIcon.style.padding = '1rem';
crossIcon.style.cursor = 'pointer';

// popUpMenuDiv styling

popUpMenuDiv.style.fontWeight = '600';
popUpMenuDiv.style.fontSize = '32px';
popUpMenuDiv.style.display = 'flex';
popUpMenuDiv.style.padding = '7.6rem 1.5rem';
popUpMenuDiv.style.zIndex = '1';

// bluring the background

headerBar.style.filter = 'blur(6px)';
mainSection.style.filter = 'blur(6px)';
// mainContainerProjects.style.filter = 'blur(6px)';

////////////////////

popUpMenuDiv.appendChild(crossIcon);
body.insertBefore(popUpMenuDiv, header);
popUpMenuDiv.appendChild(unorderedList);

//////////////////

const titlesOfMenu = ['Portfolio', 'About', 'Contact'];
const anchorIds = ['#main-img', '#about-section-1', '#form-footer'];

for (let i = 0; i < titlesOfMenu.length; i++) {
  let listElement = document.createElement('li');
  let listElementAnchor = document.createElement('a');
  listElementAnchor.href = anchorIds[i];

  listElementAnchor.style.color = 'white';
  unorderedList.appendChild(listElement);
  listElement.appendChild(listElementAnchor);
  listElementAnchor.innerText = titlesOfMenu[i];
  listElement.style.color = 'white';
}

// popUpMenuDiv styling

popUpMenuDiv.style.position = 'absolute';
popUpMenuDiv.style.width = '100%';
popUpMenuDiv.style.height = '100vh';
popUpMenuDiv.style.backgroundColor = '#6070FF';
popUpMenuDiv.style.mixBlendMode = 'multiply';

// console.log(popUpMenuDiv);
/* <div class="popUpMenuDiv">
  <ul>
    <li>X</li>
    <li>Portfolio</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</div>; */

/* DEV TOOLS PROPERTIES */

// position: sticky;
// width: 100%;
// background: yellow;
// height: 100vh;

// header - bar;
// main - section;
// main - container - projects;

// font-weight: 600;
// font-size: 32px;
// display: flex;
// padding: 7.6rem 1.5rem;
