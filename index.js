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

  const anchorTags = document.querySelectorAll('body div ul li a');
  for (let i = 0; i < anchorTags.length; i += 1) {
    anchorTags[i].classList.add(`anchorTags${i}`);
  }

  const anchorTags0 = document.querySelector('.anchorTags0');
  anchorTags0.addEventListener('click', () => {
    window.location.reload();
  });

  const anchorTags1 = document.querySelector('.anchorTags1');
  anchorTags1.addEventListener('click', () => {
    window.location.reload();
  });

  const anchorTags2 = document.querySelector('.anchorTags2');
  anchorTags2.addEventListener('click', () => {
    window.location.reload();
  });
});

const projectListObject = [
  {
    name: 'Tonic',
    company: 'Canopy',
    role: 'Back end dev',
    year: '2015',
    featuredImage: './img/Snapshoot Portfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.",
    technologies: ['html', 'css', 'javascript'],
    seeLive: 'See live',
    seeSource: 'See Source',
  },
  {
    name: 'Multi-post stories',
    company: 'Canopy',
    role: 'Back end dev',
    year: '2015',
    featuredImage: './img/Snapshoot Portfolio (1).png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.",
    technologies: ['html', 'css', 'javascript'],
    seeLive: 'See live',
    seeSource: 'See Source',
  },
  {
    name: 'Tonic',
    company: 'Canopy',
    role: 'Back end Dev',
    year: '2015',
    featuredImage: './img/Snapshoot Portfolio (2).png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.",
    technologies: ['html', 'css', 'javascript'],
    seeLive: 'See live',
    seeSource: 'See Source',
  },
  {
    name: 'Multi-post stories',
    company: 'Canopy',
    role: 'Back end dev',
    year: '2018',
    featuredImage: './img/Snapshoot Portfolio (3).png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.",
    technologies: ['html', 'css', 'javascript'],
    seeLive: 'See live',
    seeSource: 'See Source',
  },
];

const buttonProject1 = document.querySelector('.see-project');
const body2 = document.querySelector('body');
buttonProject1.addEventListener('click', () => {
  body2.innerHTML = `
<article class="modal-card">
<h2 class="modal-card__h2">
  ${projectListObject[0].name}
  <svg
    class="modal-card__cancel"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
      fill="#67798E"
    />
  </svg>
</h2>

<ul class="modal-card__list">
  <li class="modal-card__canopy">${projectListObject[0].company}</li>
  <li class="modal-card__role">
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
    </svg>
    ${projectListObject[0].role}
  </li>
  <li class="modal-card__year">
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
    </svg>
    ${projectListObject[0].year}
  </li>
</ul>
<img class="modal-card__img" src="${projectListObject[0].featuredImage}" alt="" />
<div class="modal-card__desktop-section">
<p class="modal-card__p">
${projectListObject[0].description}
</p>
<div class="modal-card__desktop-section2">
<ul class="modal-card__lits-2">
  <li class="modal-card__html modal-card__li">${projectListObject[0].technologies[0]}</li>
  <li class="modal-card__css modal-card__li">${projectListObject[0].technologies[1]}</li>
  <li class="modal-card__javascript modal-card__li">${projectListObject[0].technologies[2]}</li>
</ul>
<hr class="modal-card__hr">
<div class="modal-card__buttons">
  <button class="modal-card__button" type="button">
    ${projectListObject[0].seeLive}<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
        fill="#6070FF"
      />
    </svg>
  </button>
  <button class="modal-card__button" type="button">
    ${projectListObject[0].seeSource}<svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9852 7.46114C17.9852 6.32124 17.6192 5.25043 16.9205 4.31779C17.1867 3.41969 17.2532 2.27979 17.1867 0.967185C17.1534 0.414508 16.7209 0 16.1885 0C15.8891 0 13.3604 0.0345423 11.8965 1.38169C10.6321 1.1399 9.30128 1.1399 8.00368 1.38169C6.573 0.0345423 4.04435 0 3.71163 0C3.17928 0 2.74675 0.414508 2.71348 0.967185C2.61366 2.27979 2.71348 3.41969 2.97965 4.31779C2.28095 5.28497 1.91496 6.35579 1.91496 7.46114C1.91496 9.8791 3.71163 12.0553 6.43991 13.0915C6.3401 13.2988 6.27355 13.5406 6.20701 13.7824C3.31237 13.4715 1.94823 10.7427 1.88169 10.639C1.64878 10.1209 1.04989 9.91364 0.550818 10.19C0.0517425 10.4318 -0.147888 11.0535 0.118286 11.5717C0.184829 11.7444 2.01477 15.4404 6.04065 15.8549V18.9637C6.04065 19.5509 6.47319 20 7.0388 20H12.8614C13.427 20 13.8595 19.5509 13.8595 18.9637V14.8532C13.8595 14.2314 13.7264 13.6442 13.4935 13.1261C16.1885 12.0553 17.9852 9.91364 17.9852 7.46114Z"
        fill="#505F79"
      />
    </svg>
  </button>
  </div>
  </div>
</div>
</article>
<span class="modal-card__span"></span>
`;

  const corssIconPopUpCard = document.querySelector('.modal-card__cancel');
  corssIconPopUpCard.addEventListener('click', () => {
    window.location.reload();
  });
});

const buttonProject2 = document.querySelector('.see-project2');
const body3 = document.querySelector('body');
buttonProject2.addEventListener('click', () => {
  body3.innerHTML = `
<article class="modal-card">
<h2 class="modal-card__h2">
  ${projectListObject[1].name}
  <svg
    class="modal-card__cancel"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
      fill="#67798E"
    />
  </svg>
</h2>

<ul class="modal-card__list">
  <li class="modal-card__canopy">${projectListObject[1].company}</li>
  <li class="modal-card__role">
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
    </svg>
    ${projectListObject[1].role}
  </li>
  <li class="modal-card__year">
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
    </svg>
    ${projectListObject[1].year}
  </li>
</ul>
<img class="modal-card__img" src="${projectListObject[1].featuredImage}" alt="" />
<div class="modal-card__desktop-section">
<p class="modal-card__p">
${projectListObject[1].description}
</p>
<div class="modal-card__desktop-section2">

<ul class="modal-card__lits-2">
  <li class="modal-card__html modal-card__li">${projectListObject[1].technologies[0]}</li>
  <li class="modal-card__css modal-card__li">${projectListObject[1].technologies[1]}</li>
  <li class="modal-card__javascript modal-card__li">${projectListObject[1].technologies[2]}</li>
</ul>
<hr class="modal-card__hr">
<div class="modal-card__buttons">
  <button class="modal-card__button" type="button">
  ${projectListObject[1].seeLive}<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
        fill="#6070FF"
      />
    </svg>
  </button>
  <button class="modal-card__button" type="button">
  ${projectListObject[1].seeSource}<svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9852 7.46114C17.9852 6.32124 17.6192 5.25043 16.9205 4.31779C17.1867 3.41969 17.2532 2.27979 17.1867 0.967185C17.1534 0.414508 16.7209 0 16.1885 0C15.8891 0 13.3604 0.0345423 11.8965 1.38169C10.6321 1.1399 9.30128 1.1399 8.00368 1.38169C6.573 0.0345423 4.04435 0 3.71163 0C3.17928 0 2.74675 0.414508 2.71348 0.967185C2.61366 2.27979 2.71348 3.41969 2.97965 4.31779C2.28095 5.28497 1.91496 6.35579 1.91496 7.46114C1.91496 9.8791 3.71163 12.0553 6.43991 13.0915C6.3401 13.2988 6.27355 13.5406 6.20701 13.7824C3.31237 13.4715 1.94823 10.7427 1.88169 10.639C1.64878 10.1209 1.04989 9.91364 0.550818 10.19C0.0517425 10.4318 -0.147888 11.0535 0.118286 11.5717C0.184829 11.7444 2.01477 15.4404 6.04065 15.8549V18.9637C6.04065 19.5509 6.47319 20 7.0388 20H12.8614C13.427 20 13.8595 19.5509 13.8595 18.9637V14.8532C13.8595 14.2314 13.7264 13.6442 13.4935 13.1261C16.1885 12.0553 17.9852 9.91364 17.9852 7.46114Z"
        fill="#505F79"
      />
    </svg>
  </button>
    </div>
  </div>
</div>
</article>
<span class="modal-card__span"></span>
`;

  const corssIconPopUpCard = document.querySelector('.modal-card__cancel');
  corssIconPopUpCard.addEventListener('click', () => {
    window.location.reload();
  });
});

const buttonProject3 = document.querySelector('.see-project3');
const body4 = document.querySelector('body');
buttonProject3.addEventListener('click', () => {
  body4.innerHTML = `
<article class="modal-card">
<h2 class="modal-card__h2">
  ${projectListObject[2].name}
  <svg
    class="modal-card__cancel"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
      fill="#67798E"
    />
  </svg>
</h2>

<ul class="modal-card__list">
  <li class="modal-card__canopy">${projectListObject[2].company}</li>
  <li class="modal-card__role">
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
    </svg>
    ${projectListObject[2].role}
  </li>
  <li class="modal-card__year">
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
    </svg>
    ${projectListObject[2].year}
  </li>
</ul>
<img class="modal-card__img" src="${projectListObject[2].featuredImage}" alt="" />
<div class="modal-card__desktop-section">
<p class="modal-card__p">
${projectListObject[2].description}
</p>
<div class="modal-card__desktop-section2">
<ul class="modal-card__lits-2">
  <li class="modal-card__html modal-card__li">${projectListObject[2].technologies[0]}</li>
  <li class="modal-card__css modal-card__li">${projectListObject[2].technologies[1]}</li>
  <li class="modal-card__javascript modal-card__li">${projectListObject[2].technologies[2]}</li>
</ul>
<hr class="modal-card__hr">
<div class="modal-card__buttons">
  <button class="modal-card__button" type="button">
  ${projectListObject[2].seeLive}<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
        fill="#6070FF"
      />
    </svg>
  </button>
  <button class="modal-card__button" type="button">
  ${projectListObject[2].seeSource}<svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9852 7.46114C17.9852 6.32124 17.6192 5.25043 16.9205 4.31779C17.1867 3.41969 17.2532 2.27979 17.1867 0.967185C17.1534 0.414508 16.7209 0 16.1885 0C15.8891 0 13.3604 0.0345423 11.8965 1.38169C10.6321 1.1399 9.30128 1.1399 8.00368 1.38169C6.573 0.0345423 4.04435 0 3.71163 0C3.17928 0 2.74675 0.414508 2.71348 0.967185C2.61366 2.27979 2.71348 3.41969 2.97965 4.31779C2.28095 5.28497 1.91496 6.35579 1.91496 7.46114C1.91496 9.8791 3.71163 12.0553 6.43991 13.0915C6.3401 13.2988 6.27355 13.5406 6.20701 13.7824C3.31237 13.4715 1.94823 10.7427 1.88169 10.639C1.64878 10.1209 1.04989 9.91364 0.550818 10.19C0.0517425 10.4318 -0.147888 11.0535 0.118286 11.5717C0.184829 11.7444 2.01477 15.4404 6.04065 15.8549V18.9637C6.04065 19.5509 6.47319 20 7.0388 20H12.8614C13.427 20 13.8595 19.5509 13.8595 18.9637V14.8532C13.8595 14.2314 13.7264 13.6442 13.4935 13.1261C16.1885 12.0553 17.9852 9.91364 17.9852 7.46114Z"
        fill="#505F79"
      />
    </svg>
  </button>
    </div>
  </div>
</div>
</article>
<span class="modal-card__span"></span>
`;

  const corssIconPopUpCard = document.querySelector('.modal-card__cancel');
  corssIconPopUpCard.addEventListener('click', () => {
    window.location.reload();
  });
});

const buttonProject4 = document.querySelector('.see-project4');
const body5 = document.querySelector('body');
buttonProject4.addEventListener('click', () => {
  body5.innerHTML = `
<article class="modal-card">
<h2 class="modal-card__h2">
${projectListObject[3].name}
  <svg
    class="modal-card__cancel"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
      fill="#67798E"
    />
  </svg>
</h2>

<ul class="modal-card__list">
  <li class="modal-card__canopy">${projectListObject[3].company}</li>
  <li class="modal-card__role">
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
    </svg>
    ${projectListObject[3].role}
  </li>
  <li class="modal-card__year">
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
    </svg>
    ${projectListObject[3].year}
  </li>
</ul>
<img class="modal-card__img" src="${projectListObject[3].featuredImage}" alt="" />
<div class="modal-card__desktop-section">
<p class="modal-card__p">
${projectListObject[3].description}
</p>
<div class="modal-card__desktop-section2">
<ul class="modal-card__lits-2">
  <li class="modal-card__html modal-card__li">${projectListObject[2].technologies[0]}</li>
  <li class="modal-card__css modal-card__li">${projectListObject[2].technologies[1]}</li>
  <li class="modal-card__javascript modal-card__li">${projectListObject[2].technologies[2]}</li>
</ul>
<hr class="modal-card__hr">
<div class="modal-card__buttons">
  <button class="modal-card__button" type="button">
  ${projectListObject[3].seeLive}<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
        fill="#6070FF"
      />
    </svg>
  </button>
  <button class="modal-card__button" type="button">
  ${projectListObject[3].seeSource}<svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9852 7.46114C17.9852 6.32124 17.6192 5.25043 16.9205 4.31779C17.1867 3.41969 17.2532 2.27979 17.1867 0.967185C17.1534 0.414508 16.7209 0 16.1885 0C15.8891 0 13.3604 0.0345423 11.8965 1.38169C10.6321 1.1399 9.30128 1.1399 8.00368 1.38169C6.573 0.0345423 4.04435 0 3.71163 0C3.17928 0 2.74675 0.414508 2.71348 0.967185C2.61366 2.27979 2.71348 3.41969 2.97965 4.31779C2.28095 5.28497 1.91496 6.35579 1.91496 7.46114C1.91496 9.8791 3.71163 12.0553 6.43991 13.0915C6.3401 13.2988 6.27355 13.5406 6.20701 13.7824C3.31237 13.4715 1.94823 10.7427 1.88169 10.639C1.64878 10.1209 1.04989 9.91364 0.550818 10.19C0.0517425 10.4318 -0.147888 11.0535 0.118286 11.5717C0.184829 11.7444 2.01477 15.4404 6.04065 15.8549V18.9637C6.04065 19.5509 6.47319 20 7.0388 20H12.8614C13.427 20 13.8595 19.5509 13.8595 18.9637V14.8532C13.8595 14.2314 13.7264 13.6442 13.4935 13.1261C16.1885 12.0553 17.9852 9.91364 17.9852 7.46114Z"
        fill="#505F79"
      />
    </svg>
  </button>
    </div>
  </div>
</div>
</article>
<span class="modal-card__span"></span>
`;

  const corssIconPopUpCard = document.querySelector('.modal-card__cancel');
  corssIconPopUpCard.addEventListener('click', () => {
    window.location.reload();
  });
});

const form = document.querySelector('.form-container');
const email = document.querySelector('#email');
const error = document.querySelector('#error-message');
const regexAZ = /[A-Z]/;

form.addEventListener('submit', (e) => {
  if (regexAZ.test(email.value)) {
    e.preventDefault();
    error.innerHTML = 'Are you using uppercase in the email field? 👀';
  }
});
