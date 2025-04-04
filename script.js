document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = e.target.querySelector('input[type="text"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  const message = e.target.querySelector('textarea').value;

  if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      e.target.reset();
  } else {
      alert('Please fill out all fields!');
  }
});
