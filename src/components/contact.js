/* eslint-disable react/jsx-one-expression-per-line, react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div className="container">
        <div className="columns is-multiline" data-aos="fade-in-up" data-aos-easing="linear">
          <div className="column is-12 about-me">
            <h1 className="title has-text-black has-text-centered section-title">
              Get in touch
            </h1>
          </div>
          <div className="form-col column is-8 is-offset-2">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/xzbakpbv"
              method="POST"
            >
              <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-left">
                  <input className="input" type="text" placeholder="Ex. Jane Smith" name="name" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input className="input" type="email" placeholder="Ex. hello@arctheme.com" name="email" />
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
              {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit&nbsp;&nbsp;<i className="fas fa-paper-plane" /></button>}
              {status === 'ERROR' && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
