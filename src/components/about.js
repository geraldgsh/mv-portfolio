/* eslint-disable react/no-unescaped-entities, arrow-body-style  */
import React from 'react';

const About = () => {
  return (
    <div className="canvas rows columns is-gapless">
      <div className="container is-fluid">
        <div className="column is-half">
          <div className="row">
            <div className="intro">
              <h3 className="title is-4 has-text-black info">
                Hello. My name is
                <span className="highlight">Gerald Goh.</span>
                I enjoy blending aesthetics with sophistication. Besides
                coding, I'm intrigued by science and engineering, both which I pursued
                academically. When I'm travelling, you'll find me trigger ready with my
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
