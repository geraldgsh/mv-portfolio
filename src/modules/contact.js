const contact = () => {
  const contactForm = document.createElement('div');
  contactForm.id = 'contact';
  contactForm.classList.add('section-light', 'contact');

  const container = document.createElement('div');
  container.classList.add('container');
  contactForm.appendChild(container);

  const columns = document.createElement('div');
  columns.classList.add('columns', 'is-multiline');
  columns.setAttribute('data-aos', 'fade-in-up');
  columns.setAttribute('data-aos-easing', 'linear');
  container.appendChild(columns);

  const column = document.createElement('div');
  column.classList.add('column', 'is-12', 'about-me');
  columns.appendChild(column);

  const h1 = document.createElement('h1');
  h1.classList.add('title', 'has-text-black', 'has-text-centered', 'section-title');
  h1.innerHTML = 'Get in touch';
  column.appendChild(h1);

  const formCol = document.createElement('div');
  formCol.classList.add('form-col', 'column', 'is-8', 'is-offset-2');
  columns.appendChild(formCol);
  
  const form = document.createElement('div');
  form.setAttribute('name', 'contact');
  form.setAttribute('action', 'POST');
  form.setAttribute('method', 'POST');
  form.setAttribute('data-netlify-recaptcha', 'true');
  form.setAttribute('data-netlify', 'true');
  formCol.appendChild(form);

  const field1 = document.createElement('div');
  field1.classList.add('field');
  form.appendChild(field1);

  const label1 = document.createElement('label');
  label1.classList.add('label');
  label1.innerHTML = 'Name';
  field1.appendChild(label1);

  const control1 = document.createElement('div');
  control1.classList.add('control', 'has-icons-left');
  field1.appendChild(control1);

  const nameInput = document.createElement('input');
  nameInput.classList.add('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Ex. Jane Smith';
  nameInput.name = 'Name';
  control1.appendChild(nameInput);

  const icon1 = document.createElement('span');
  icon1.classList.add('icon', 'is-small', 'is-left');
  control1.appendChild(icon1);

  const user =  document.createElement('i');
  user.classList.add('fas', 'fa-user')
  icon1.appendChild(user);

  const field2 = document.createElement('div');
  field2.classList.add('field');
  form.appendChild(field2);

  const label2 = document.createElement('label');
  label2.classList.add('label');
  label2.innerHTML = 'Email';
  field2.appendChild(label2);

  const control2 = document.createElement('div');
  control2.classList.add('control', 'has-icons-left');
  field2.appendChild(control2);

  const emailInput = document.createElement('input');
  emailInput.classList.add('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Ex. hello@arctheme.com';
  emailInput.name = 'Email';
  control2.appendChild(emailInput);

  const icon2 = document.createElement('span');
  icon2.classList.add('icon', 'is-small', 'is-left');
  control2.appendChild(icon2);

  const email =  document.createElement('i');
  email.classList.add('fas', 'fa-envelope')
  icon2.appendChild(email);

  const field3 = document.createElement('div');
  field3.classList.add('field');
  form.appendChild(field3);

  const label3 = document.createElement('label');
  label3.classList.add('label');
  label3.innerHTML = 'Message';
  field3.appendChild(label3);

  const control3 = document.createElement('div');
  control3.classList.add('control');
  field3.appendChild(control3);

  const msgInput = document.createElement('textarea');
  msgInput.classList.add('textarea');
  msgInput.placeholder = 'Textarea';
  msgInput.name = 'Message';
  control3.appendChild(msgInput);

  const field4 = document.createElement('div');
  field4.classList.add('field');
  form.appendChild(field4);

  const netlify = document.createElement('div');
  netlify.setAttribute('data-netlify-recaptcha', 'true');
  field4.appendChild(netlify);

  const field5 = document.createElement('div');
  field5.classList.add('field');
  form.appendChild(field5);

  const control5 = document.createElement('div');
  control5.classList.add('control');
  field5.appendChild(control5);

  const button = document.createElement('button');
  button.classList.add('button', 'submit-button');
  button.innerHTML = 'Submit&nbsp;&nbsp';
  control5.appendChild(button);

  const plane = document.createElement('i');
  plane.classList.add('fas', 'fa-paper-plane');
  button.appendChild(plane);

  return contactForm;
};
export default contact;
