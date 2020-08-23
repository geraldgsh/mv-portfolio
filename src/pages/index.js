/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import About from '../components/about';
import Mywork from '../components/mywork';
import Contact from '../components/contact';

config.autoAddCss = true;
library.add(fas, fab);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: <About />,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const sector = e.target.value;
    if (sector === 'Mywork') {
      this.setState(() => ({
        section: <Mywork />,
      }));
    } else if (sector === 'Contact') {
      this.setState(() => ({
        section: <Contact />,
      }));
    } else {
      this.setState(() => ({
        section: <About />,
      }));
    }
  }

  render() {
    const sector = this.state.section;
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns is-centered is-mobile">
              <div className="box">
                <div className="columns is-gapless">
                  <div className="sidebar column is-3">
                    <div className="rows columns is-centered is-gapless">
                      <div className="row">
                        <div className="column">
                          <figure className="image is-128x128 pic">
                            <img className="is-rounded" src="/img/profile-sq-pic-2020-1.jpg" alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="rows columns is-centered is-gapless">
                      <div className="row">
                        <div className="wording column has-text-centered">
                          <h1 className="title has-text-black">Gerald Goh</h1>
                          <h2 className="subtitle has-text-black">Full Stack Developer</h2>
                        </div>
                      </div>
                    </div>
                    <div className="rows columns is-centered is-gapless">
                      <div className="container is-fluid">
                        <div className="column">
                          <div className="row">
                            <div className="column buttons" value="example" onClick={e => this.handleClick(e, 'value')}>
                              <button value="About" id="#about" className="button is-info is-fullwidth" type="button">
                                About
                              </button>
                              <button value="Mywork" name="Mywork" id="#mywork" className="button is-success is-fullwidth" type="button">
                                My Work
                              </button>
                              <button value="Contact" name="Contact" id="#contact" className="button is-danger is-fullwidth" type="button">
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rows columns is-centered is-gapless">
                      <div className="container is-fluid">
                        <div className="column">
                          <div className="row">
                            <div className="column social-media">
                              <a href="https://github.com/geraldgsh">
                                <i>
                                  <FontAwesomeIcon icon={['fab', 'github-square']} size="lg" />
                                </i>
                              </a>
                              <a href="https://www.linkedin.com/in/geraldgsh/">
                                <i>
                                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                                </i>
                              </a>
                              <a href="https://twitter.com/geraldgsh">
                                <i>
                                  <FontAwesomeIcon icon={['fab', 'twitter-square']} size="lg" />
                                </i>
                              </a>
                              <a href="https://angel.co/u/geraldgsh">
                                <i>
                                  <FontAwesomeIcon icon={['fab', 'angellist']} size="lg" />
                                </i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-9">
                    {sector}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
