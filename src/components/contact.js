/* eslint-disable jsx-a11y/label-has-associated-control  */
/* eslint-disable react/no-unescaped-entities, arrow-body-style  */
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  return (
    <div className="container">
      <div className="columns is-multiline" data-aos="fade-in-up" data-aos-easing="linear">
        <div className="column is-12 about-me">
          <h1 className="title has-text-black has-text-centered section-title">
            Get in touch
          </h1>
        </div>
        <div className="form-col column is-8 is-offset-2">
          <form name="Contact Form" action="POST" method="POST" data-netlify-recaptcha="true" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Ex. Jane Smith" name="Name" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" type="email" placeholder="Ex. hello@arctheme.com" name="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea" name="Message" defaultValue="" />
              </div>
            </div>
            <div className="field">
              <div data-netlify-recaptcha="true" />
            </div>
            <div className="field">
              <div className="control">
                <ReCAPTCHA sitekey={process.env.SITE_RECAPTCHA_KEY} />
                <button type="button" className="button submit-button">
                  Submit&nbsp;&nbsp;
                  <i className="fas fa-paper-plane" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
