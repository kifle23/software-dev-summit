const speakerArr = [
  {
    name: 'Yochai Benkler',
    description:
      'Benkler studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
    title:
      'Benkler Professor of Software Engineering at Massachusetts Institute of Technology',
    picture: 'Images/speaker/speaker1.png',
    alt: 'A picture of Yochai Benkler',
  },
  {
    name: 'SohYeong Noh',
    description:
      'Noh studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
    title:
      'Noh Professor of Software Engineering at Massachusetts Institute of Technology',
    picture: 'Images/speaker/speaker2.png',
    alt: 'A picture of SohYeong Noh',
  },
  {
    name: 'Julia Leda',
    description:
      'Leda studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
    title:
      'Leda Professor of Software Engineering at Massachusetts Institute of Technology',
    picture: 'Images/speaker/speaker3.png',
    alt: 'A picture of Julia Leda',
  },
  {
    name: 'Lila tretikov',
    description:
      'Tretikov studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
    title:
      'Tretikov Professor of Software Engineering at Massachusetts Institute of Technology',
    picture: 'Images/speaker/speaker4.png',
    alt: 'A picture of Lila tretikov',
  },
  {
    name: 'Ryan Merkley',
    description:
      'Merkley studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
    title:
      'Merkley Professor of Software Engineering at Massachusetts Institute of Technology',
    picture: 'Images/speaker/speaker5.png',
    alt: 'A picture of Ryan Merkley',
  },
  {
    name: 'Karl Miguel',
    description:
      'Miguel studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
    title:
      'Miguel Professor of Software Engineering at Massachusetts Institute of Technology',
    picture: 'Images/speaker/speaker6.png',
    alt: 'A picture of Karl Miguel',
  },
];
function isFullyVisible(element) {
  return element.display !== 'none';
}
function appendSpeaker(i) {
  const speakerWrapper = document.createElement('div');
  const speakerImage = document.createElement('img');
  speakerImage.setAttribute('alt', `${speakerArr[i].alt}`);
  speakerImage.setAttribute('src', `${speakerArr[i].picture}`);
  const speakerInfoWrapper = document.createElement('div');
  const speakerName = document.createElement('h3');
  speakerName.textContent = `${speakerArr[i].name}`;
  const speakerTitle = document.createElement('p');
  speakerTitle.textContent = `${speakerArr[i].title}`;
  const speakerDescription = document.createElement('p');
  speakerDescription.textContent = `${speakerArr[i].description}`;
  speakerWrapper.classList.add('speaker');
  speakerInfoWrapper.classList.add('speaker-info');
  speakerWrapper.appendChild(speakerImage);
  speakerInfoWrapper.appendChild(speakerName);
  speakerInfoWrapper.appendChild(speakerTitle);
  speakerInfoWrapper.appendChild(speakerDescription);
  speakerWrapper.appendChild(speakerInfoWrapper);
  document.querySelector('.speakers-container').appendChild(speakerWrapper);
}
const loadMore = document.querySelector('.load-more');
if (isFullyVisible(loadMore) && window.innerWidth <= 768) {
  for (let i = 0; i < 2; i += 1) {
    appendSpeaker(i);
  }
  loadMore.addEventListener('click', (e) => {
    e.target.classList.add('show-loader');
    if (document.querySelector('.speakers-container')) {
      for (let i = 2; i < speakerArr.length; i += 1) {
        appendSpeaker(i);
      }
    }
  });
} else if (isFullyVisible(loadMore) && window.innerWidth > 768) {
  for (let i = 0; i < speakerArr.length; i += 1) {
    appendSpeaker(i);
  }
}
