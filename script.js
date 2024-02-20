

const scriptURL = 'https://script.google.com/macros/s/AKfycbw64YOMLC7mDgIjaC4SVO-Vp6hFBZ_7I-OBTTVn0-Tq8PXxKq2AP8Hwgbqyez3AHPJs/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Thank you for visiting!";
      setTimeout(function(){msg.innerHTML=""}, 5000);
    })
    .catch(error => console.error('Error!', error.message));
});

