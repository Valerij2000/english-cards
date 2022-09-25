document.addEventListener('DOMContentLoaded', function () {
  let user = document.querySelector('[name="user"]'),
    pass = document.querySelector('[name="pass"]');
  const button = document.querySelector('[data-button]');    
  button.addEventListener('click', () => {
    if (user.value !== '' && user.value === 'marina' && pass.value !== '' && pass.value == 123) {
      document.querySelector('.error').innerHTML = '';
      window.location.href = 'public/index.html';
    } else {
      document.querySelector('.error').innerHTML = 'Form invalid';
    }
  })
})