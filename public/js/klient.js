//клиент
console.log("OK");
var socket = io.connect('http://localhost:8080');

function getRandomInt(max) {
  return console.log(Math.floor(Math.random() * Math.floor(max)));
}
var rnd;
//генерация массива случайных чисел через интервал времени
function generate(){
    console.log(Math.floor(Math.random() * Math.floor(100)));
    time = setTimeout(generate, 1000);	
} 

