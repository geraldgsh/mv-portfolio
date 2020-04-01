const contact = () => {
  const contactForm = document.createElement('div');
  contactForm.id = 'contact';
  contactForm.classList.add('section-light', 'contact');
  contactForm.innerHTML = `<div class="container">
                            <div class="columns is-multiline"
                              data-aos="fade-in-up"
                              data-aos-easing="linear">
                              <div class="column is-12 about-me">
                                <h1 class="title has-text-black has-text-centered section-title">
                                  Get in touch
                                </h1>
                              </div>
                              <div class="form-col column is-8 is-offset-2">
                                <form name="contact" action="POST" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                                  <div class="field">
                                    <label class="label">Name</label>
                                    <div class="control has-icons-left">
                                      <input class="input" type="text" 
                                      placeholder="Ex. Jane Smith" name="Name"/>
                                      <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="field">
                                    <label class="label">Email</label>
                                    <div class="control has-icons-left">
                                      <input
                                        class="input"
                                        type="email"
                                        placeholder="Ex. hello@arctheme.com"
                                        name="Email"/>
                                      <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="field">
                                    <label class="label">Message</label>
                                    <div class="control">
                                      <textarea
                                        class="textarea"
                                        placeholder="Textarea"
                                        name="Message"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div class="field">
                                    <div data-netlify-recaptcha="true"></div>
                                  </div>                                  
                                  <div class="field">
                                    <div class="control">
                                      <button class="button submit-button">
                                        Submit&nbsp;&nbsp;
                                        <i class="fas fa-paper-plane"></i>
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>`;
  return contactForm;
};
export default contact;
