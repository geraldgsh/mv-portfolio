import React, { Component } from "react";
import ReactDOM from "react-dom";
import './styles.css';
import Profile from './media/profile-sq-pic-2020-1.jpg';
import About from './components/about.js'
import Mywork from './components/mywork.js'
import Contact from './components/contact.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: <About />
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let sector = e.target.value
    if (sector === "Mywork") {
      this.setState(() => ({
        section: <Mywork />
      }))
    } else if (sector === "Contact" ) {
      this.setState(() => ({
        section: <Contact />
      }))
    } else {
      this.setState(() => ({
        section: <About />
      }))
    }
  }   
  render() {
    const section = this.state.section;
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
                            <img className="is-rounded" src={Profile} />
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
                            <div className="column buttons" value={"example"} onClick={e => this.handleClick(e, "value")}>
                              <button value="About" id="#about" className="button is-info is-fullwidth">About</button>
                              <button value="Mywork" name="Mywork" id="#mywork" className="button is-success is-fullwidth">My Work</button>
                              <button value="Contact" name="Contact" id="#contact" className="button is-danger is-fullwidth">Contact</button>
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
                              <a href="https://github.com/geraldgsh"><i className="fab fa-github-square fa-lg" /></a>
                              <a href="https://www.linkedin.com/in/geraldgsh/"><i className="fab fa-linkedin fa-lg" /></a>
                              <a href="https://twitter.com/geraldgsh"><i className="fab fa-twitter-square fa-lg" /></a>
                              <a href="https://angel.co/u/geraldgsh"><i className="fab fa-angellist fa-lg" /></a>
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>                
                  </div>
                  <div className="column is-9">
                    {section}
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

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;