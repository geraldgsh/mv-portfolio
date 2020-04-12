const mywork = () => {
  const projects = [
    {
      img: './media/custom-grid.jpg',
      desc: 'Built a custom grid-based framework (similar to bootstrap) with basic functionality necessary to build a website.',
      stack: ' (HTML + CSS)',
      live: 'https://rawcdn.githack.com/davitomix/CustomGridFrameWork/b5320d1646cea5bc2e0e9bdbcfe881e37083e70f/index.html',
      github: 'https://github.com/davitomix/CustomGridFrameWork',
    },
    {
      img: './media/mint.jpg',
      desc: 'Built a form based HTML site that matches the appearance of mint.com’s signup page.',
      stack: ' (HTML + CSS)',
      live: 'https://geraldgsh.github.io/mint-sign-up-clone/',
      github: 'https://github.com/geraldgsh/mint-sign-up-clone',
    },
    {
      img: './media/social.jpg',
      desc: 'A Facebook-like social network application. Features – users, profiles, “friending”, posts, newsfeed, and likes.',
      stack: ' (Ruby on Rails + Heroku)',
      live: 'https://societalbook.herokuapp.com/',
      github: 'https://github.com/geraldgsh/societalbook',
    },
    {
      img: './media/todo.jpg',
      desc: 'An Objected Oriented Javascript To Do List app.',
      stack: ' (HTML + CSS + JS + Bulma)',
      live: 'https://rawcdn.githack.com/geraldgsh/todo-list/10b5955ab59a3ca8048f348bf3ed253ffd558b90/dist/index.html',
      github: 'https://github.com/geraldgsh/todo-list',
    },
    {
      img: './media/weather.jpg',
      desc: 'A weather application that shows weather info on queried location(s) via API from openweathermap',
      stack: ' (HTML + CSS + JS + API)',
      live: 'https://raw.githack.com/geraldgsh/weather-app/master/dist/index.html',
      github: 'https://github.com/geraldgsh/weather-app',
    },
  ];
  const container = document.createElement('div');
  container.id = 'list';
  container.classList.add('card-container');

  projects.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    card.appendChild(cardImage);

    const figure = document.createElement('figure');
    figure.classList.add('image', 'is-4by3');
    cardImage.appendChild(figure);

    const img = document.createElement('img');
    img.setAttribute('src', project.img);
    figure.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.appendChild(cardContent);

    const desc = document.createElement('div');
    desc.classList.add('desc');
    desc.innerHTML = `${project.desc} ${project.stack}`;
    cardContent.appendChild(desc);

    const footer = document.createElement('footer');
    footer.classList.add('card-footer', 'foot');
    card.appendChild(footer);

    const a1 = document.createElement('a');
    a1.setAttribute('href', project.live);
    footer.appendChild(a1);

    const i1 = document.createElement('i');
    i1.classList.add('fas', 'fa-tv');
    a1.appendChild(i1);

    const a2 = document.createElement('a');
    a2.setAttribute('href', project.github);
    footer.appendChild(a2);

    const i2 = document.createElement('i');
    i2.classList.add('fab', 'fa-github');
    a2.appendChild(i2);
  });
  return container;
};
export default mywork;
