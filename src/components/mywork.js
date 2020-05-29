/* eslint-disable arrow-body-style */
import React from 'react';
import Grid from '../media/grid.jpg';
import Entracker from '../media/entracker.jpg';
import Social from '../media/social.jpg';
import Todo from '../media/todo.jpg';
import Weather from '../media/weather.jpg';
import Calculator from '../media/calculator.jpg';

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
    img: Entracker,
    desc: 'Built a form based React/Redux site with Rails Backend API to Create and Read data.',
    stack: ' (React + Rails + API + Heroku)',
    live: 'https://energy-track.herokuapp.com/',
    github: 'https://github.com/geraldgsh/energy-tracker',
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
    desc: 'An Objected Oriented Javascript To Do List app that uses local storage on browser.',
    stack: ' (HTML + CSS + JS + Bulma)',
    live: 'https://rawcdn.githack.com/geraldgsh/todo-list/10b5955ab59a3ca8048f348bf3ed253ffd558b90/dist/index.html',
    github: 'https://github.com/geraldgsh/todo-list',
  },
  {
    id: 5,
    img: Weather,
    desc: 'A weather application that shows weather info on queried location(s) via API from openweathermap.',
    stack: ' (HTML + CSS + JS + API)',
    live: 'https://raw.githack.com/geraldgsh/weather-app/master/dist/index.html',
    github: 'https://github.com/geraldgsh/weather-app',
  },
  {
    id: 6,
    img: Calculator,
    desc: 'A simple calculator app built with React. It uses Stateful component which are defined using a class.',
    stack: ' (React + Heroku)',
    live: 'https://react-calculate.herokuapp.com/',
    github: 'https://github.com/geraldgsh/react-calculator',
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
              <div className="desc is-capitalized">
                {project.desc}
                {project.stack}
              </div>
            </div>
            <footer className="card-footer foot">
              <a href={project.live} target={project.live}>
                <i className="fas fa-tv" />
              </a>
              <a href={project.github} target={project.live}>
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
