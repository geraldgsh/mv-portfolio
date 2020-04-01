import about from './modules/about';
import mywork from './modules/mywork';
import contact from './modules/contact';

const filling = document.getElementById('content');

const start = () => {
  filling.innerHTML = '';
  filling.appendChild(about());
};

start();

const aboutPage = document.getElementById('#about');
const myworkPage = document.getElementById('#mywork');
const contactPage = document.getElementById('#contact');

const togglePage = (event) => {
  if (event.target === aboutPage) {
    start();
  } else if (event.target === myworkPage) {
    filling.innerHTML = '';
    filling.appendChild(mywork());
  } else {
    filling.innerHTML = '';
    filling.appendChild(contact());
  }
};

aboutPage.addEventListener('click', togglePage);
myworkPage.addEventListener('click', togglePage);
contactPage.addEventListener('click', togglePage);