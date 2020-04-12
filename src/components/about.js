import React from 'react';

const About = () => {
  return (
    <div className="canvas rows columns is-gapless">
      <div className="container is-fluid">
        <div className="column is-half">
          <div className="row">
            <div className="intro"> 
              <h3 className="title is-4 has-text-black info">
                Hello. My name is <span className="highlight">Gerald Goh.</span>
                I enjoy blending aesthetics with sophistication. Besides
                coding, I am keen on science and engineering that I've pursued
                them academically. On my travel, I'd be trigger ready on my 
                camera or looking for a photogenic location to launch my drone.                               
              </h3> 
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
};

export default About;
