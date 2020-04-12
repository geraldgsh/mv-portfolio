/* eslint-disable arrow-body-style */
import React from 'react';
import Grid from '../media/grid.jpg';
import Mint from '../media/mint.jpg';
import Social from '../media/social.jpg';
import Todo from '../media/todo.jpg';
import Weather from '../media/weather.jpg';

const projects = [
  {
    id: 1,
    img: Grid,
    desc: 'Built a custom grid-based framework (similar to bootstrap) with basic functionality necessary to build a website.',
    stack: ' (HTML + CSS)',
    live: 'https://rawcdn.githack.com/davitomix/CustomGridFrameWork/b5320d1646cea5bc2e0e9bdbcfe881e37083e70f/index.html',
    github: 'https://github.com/davitomix/CustomGridFrameWork',
  },
  {
    id: 2,
    img: Mint,
    desc: 'Built a form based HTML site that matches the appearance of mint.com’s signup page.',
    stack: ' (HTML + CSS)',
    live: 'https://geraldgsh.github.io/mint-sign-up-clone/',
    github: 'https://github.com/geraldgsh/mint-sign-up-clone',
  },
  {
    id: 3,
    img: Social,
    desc: 'A Facebook-like social network application. Features – users, profiles, “friending”, posts, newsfeed, and likes.',
    stack: ' (Ruby on Rails + Heroku)',
    live: 'https://societalbook.herokuapp.com/',
    github: 'https://github.com/geraldgsh/societalbook',
  },
  {
    id: 4,
    img: Todo,
    desc: 'An Objected Oriented Javascript To Do List app.',
    stack: ' (HTML + CSS + JS + Bulma)',
    live: 'https://rawcdn.githack.com/geraldgsh/todo-list/10b5955ab59a3ca8048f348bf3ed253ffd558b90/dist/index.html',
    github: 'https://github.com/geraldgsh/todo-list',
  },
  {
    id: 4,
    img: Weather,
    desc: 'A weather application that shows weather info on queried location(s) via API from openweathermap',
    stack: ' (HTML + CSS + JS + API)',
    live: 'https://raw.githack.com/geraldgsh/weather-app/master/dist/index.html',
    github: 'https://github.com/geraldgsh/weather-app',
  },
];

const mywork = () => {
  return (
    <div id="list" className="card-container">
      {projects.map(project => {
        return (
          <div className="card" key={project.id}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={project.img} alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="desc">
                {project.desc}
                {project.stack}
              </div>
            </div>
            <footer className="card-footer foot">
              <a href={project.live}>
                <i className="fas fa-tv" />
              </a>
              <a href={project.github}>
                <i className="fab fa-github" />
              </a>
            </footer>
          </div>
        );
      })}
    </div>
  );
};

export default mywork;
