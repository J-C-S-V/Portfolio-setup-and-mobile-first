const hamburguerMenuIcon = document.querySelector('.three-bar-menu');
const header = document.querySelector('header');
const body = document.querySelector('body');
const popUpMenuDiv = document.createElement('div');
const unorderedList = document.createElement('ul');
const headerBar = document.querySelector('.header-bar');
const mainSection = document.querySelector('.main-section');
const crossIcon = document.createElement('a');
const titlesOfMenu = ['Portfolio', 'About', 'Contact'];
const anchorIds = ['#main-img', '#about-section-1', '#form-footer'];

hamburguerMenuIcon.addEventListener('click', () => {
  crossIcon.innerText = 'X';
  crossIcon.classList.add('crossIcon');
  popUpMenuDiv.appendChild(crossIcon);

  popUpMenuDiv.style.fontWeight = '600';
  popUpMenuDiv.style.fontSize = '32px';
  popUpMenuDiv.style.display = 'flex';
  popUpMenuDiv.style.padding = '7.6rem 1.5rem';
  popUpMenuDiv.style.zIndex = '1';
  popUpMenuDiv.style.position = 'absolute';
  popUpMenuDiv.style.width = '100%';
  popUpMenuDiv.style.height = '100vh';
  popUpMenuDiv.style.backgroundColor = '#6070FF';
  popUpMenuDiv.style.mixBlendMode = 'multiply';
  headerBar.style.filter = 'blur(6px)';
  mainSection.style.filter = 'blur(6px)';

  body.insertBefore(popUpMenuDiv, header);
  popUpMenuDiv.appendChild(unorderedList);

  for (let i = 0; i < titlesOfMenu.length; i += 1) {
    const listElement = document.createElement('li');
    const listElementAnchor = document.createElement('a');
    listElementAnchor.href = anchorIds[i];
    listElementAnchor.style.color = 'white';
    unorderedList.appendChild(listElement);
    listElement.appendChild(listElementAnchor);
    listElementAnchor.innerText = titlesOfMenu[i];
    listElement.style.color = 'white';
  }

  const crossIconClass = document.querySelector('.crossIcon');
  crossIconClass.addEventListener('click', () => {
    window.location.reload();
  });
});

const mainContainerProjects = document.querySelector(
  '.main-container-projects'
);

mainContainerProjects.innerHTML = `

      <div class="modal-container">
      <div class="modal">
      <h1>Modals are 😎</h1>
      <p>Modals are a great way to display 
      content without having to navigate to a new page.
      </p>
      </div>
      </div>
      <button id="close-modal">
      Close
      </button>


`;
