const hamburguerMenuIcon = document.querySelector('.three-bar-menu');
// const crossIcon = document.querySelector('.crossIcon');

hamburguerMenuIcon.addEventListener('click', () => {
  // console.log('test');

  const header = document.querySelector('header');
  const body = document.querySelector('body');
  const popUpMenuDiv = document.createElement('div');
  const unorderedList = document.createElement('ul');
  const crossIcon = document.createElement('a');
  // const bottomLine = document.createElement('span');

  const headerBar = document.querySelector('.header-bar');
  const mainSection = document.querySelector('.main-section');
  // let mainContainerProjects = document.querySelector(
  //   '.main-container-projects'
  // );

  // add a class to the anchor tag
  crossIcon.classList.add('crossIcon');

  crossIcon.innerText = 'X';

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

  popUpMenuDiv.appendChild(crossIcon);
  body.insertBefore(popUpMenuDiv, header);
  popUpMenuDiv.appendChild(unorderedList);

  const titlesOfMenu = ['Portfolio', 'About', 'Contact'];
  const anchorIds = ['#main-img', '#about-section-1', '#form-footer'];

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

  // popUpMenuDiv styling

  popUpMenuDiv.style.position = 'absolute';
  popUpMenuDiv.style.width = '100%';
  popUpMenuDiv.style.height = '100vh';
  popUpMenuDiv.style.backgroundColor = '#6070FF';
  popUpMenuDiv.style.mixBlendMode = 'multiply';
});

// crossIcon.addEventListener('click', () => {
//   console.log("it's working");
//   location.reload();
// });

// console.log(popUpMenuDiv);
/* <div class="popUpMenuDiv">
  <ul>
    <li>X</li>
    <li>Portfolio</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</div>; */
