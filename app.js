const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');

text1.addEventListener('click', copyToClipBoard(this));
text2.addEventListener('click', copyToClipBoard(this));
text3.addEventListener('click', copyToClipBoard(this));
text4.addEventListener('click', copyToClipBoard(this));



const popup = document.getElementById('popup');

function copyToClipBoard(element){
  element.select();
  document.execCommand("copy");



  popup.classList.add('active');
  setTimeout(() => {
    popup.classList.remove('active');
  }, 1500);
}