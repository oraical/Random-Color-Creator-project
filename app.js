
var hexCode = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
var btn = document.querySelector('#btn');
var container = document.querySelector('.container');
var code = document.getElementById('code');
function getNumber(){
  return Math.floor(Math.random()*hexCode.length);
}

function changeColor(){
  let hexValue ='#';
for(let i = 0; i<6; i++){
  let random = getNumber();
  let value = hexCode[random];
  hexValue += value;
}
  container.style.backgroundColor = hexValue;
  code.innerHTML = hexValue;
}
btn.addEventListener('click',changeColor);

