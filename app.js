const text_textarea = document.getElementById('text')

console.log(text_textarea.innerHTML)

text_textarea.addEventListener('click', ()=>{
  
  text_textarea.select();
  document.execCommand('copy');
  
  
  
  
});



// copyToClipBoard();todo reservado 3
  
  // text_p.select();
  // document.execCommand('copy');todotodo reservado 2 reservado 1


// function copyToClipBoard(){

//   const hiddenInput = document.createElement('textarea');
//   hiddenInput.setAttribute('readonly', '');
//   hiddenInput.style.position = 'absolute';
//   // hiddenInput.style.top = '-10%';
//   hiddenInput.value = text_textarea.innerHTML;
//   document.body.appendChild(hiddenInput);
//   hiddenInput.select();
//   document.execCommand('copy');
// }