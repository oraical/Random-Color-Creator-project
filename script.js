var color = ['#32a852','#e34094','227, 64, 64','#e39c19','#e31919','#c8e319','#48e319']

var btn = document.querySelector('#btn');
var container = document.querySelector('.container');
var code = document.getElementById('code');
function getNumber(){
  return Math.floor(Math.random()*color.length);
}

function changeColor(){
let randomNumber = getNumber();
container.style.backgroundColor = color[randomNumber];
code.innerHTML = color[randomNumber];
}

btn.addEventListener('click',changeColor);