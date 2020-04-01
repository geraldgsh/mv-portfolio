const contact = () => {
  const contactForm = document.createElement('div');
  contactForm.id = 'contact';
  contactForm.classList.add('section-light', 'contact');
  contactForm.innerHTML = `<form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                            <p>
                              <label>Email: <input type="text" name="name" /></label>
                            </p>
                            <p>
                              <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <div data-netlify-recaptcha="true"></div>
                            <p>
                              <button type="submit">Send</button>
                            </p>
                          </form>`;
  return contactForm;
};
export default contact;
