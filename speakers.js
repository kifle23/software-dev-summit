const speakerArr = [
  {
    name: 'P.T.Usha',
    description: `India's greatest athletes, often called the country's "queen of track and field". She is the first
      woman president of the IOA in its 95-year history and the first Olympian appointed as IOA
      president.`,
    title: 'President of the IOA',
    picture: 'Images/P-T-Usha.jpg',
    alt: 'A picture of P.T.Usha',
  },
  {
    name: 'Vijay Amritraj',
    description: `Vijay Amritraj is an India sports commentator and retired professional tennis player. Vijay
      Amritraj kept the Indian flag flying high, with his notable performances at the international
      tennis circuit.`,
    title: 'Retired Tennis Player',
    picture: 'Images/AMRITRAJ.jpg',
    alt: 'A picture of Vijay Amritraj',
  },
  {
    name: 'Prakash Padukone',
    description: `Prakash Padukone is widely regarded as the pioneer of Indian badminton. He was ranked World No. 1 in
      1980 – the same year in which he became the first Indian to win the All England Badminton
      Championship. Prakash Padukone continued the winning streak throughout his career and bagged over 20
      international medals before he retired as a player in 1989.`,
    title: 'Retired Badminton Player',
    picture: 'Images/badminton-great-prakash-padukone.jpg',
    alt: 'A picture of Prakash Padukone',
  },
  {
    name: 'Sachin Tendulkar',
    description: `Indian professional cricket player, considered by many to be one of the greatest batsmen of all
      time.In 1998 he was chosen for the Rajiv Gandhi Khel Ratna Award, the highest award given to an
      Indian athlete, for his outstanding performance in the 1997–98 season.`,
    title: 'Retired Cricket Player',
    picture: 'Images/1604946178_sachin.jpg',
    alt: 'A picture of Sachin Tendulkar',
  },
  {
    name: 'Dhanraj Pillay',
    description: `Dhanraj Pillay is a retired Indian field hockey player and former captain of the India national
      team. He also looks after the Air India Sports Promotion Board as a Joint Secretary based in Mumbai.`,
    title: 'Retired Hockey Player',
    picture: 'Images/dhanraj.jpg',
    alt: 'A picture of Dhanraj Pillay',
  },
  {
    name: 'Deepa Malik',
    description: `Deepa Malik is an Indian athlete. She started her career at the age of 30. She is the first
    Indian woman to win a medal in Paralympic Games and won a silver medal at the 2016 Summer Paralympics
    in shot put. She also won gold in the F-53/54 Javelin event at the para athletic Grand Prix held in
    Dubai in 2018`,
    title: 'Athlete',
    picture: 'Images/Deepa Malik.jpeg',
    alt: 'A picture of Deepa Malik',
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
