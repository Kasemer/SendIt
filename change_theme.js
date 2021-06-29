

// переменная для фона
let body =document.querySelector('.body');  
// переменная для текстового блока
let textarea=document.querySelector('.textarea');
// переменная для кнопки с действием
let input=document.querySelector('.input');
// переменная для части логотипа (IT)
let header=document.querySelector('.header');


// переменная для кнопки изменения темы
let button = document.querySelector('button');
// функцияя, меняющая цвет фона,текстового блока, кнопки и части логотипа
button.onclick = function() {
body.classList.toggle('dark');
textarea.classList.toggle('dark');
input.classList.toggle('dark');
header.classList.toggle('dark');



}
// функция с исчезновением текстового блока
let text = document.getElementById('text');
document.getElementById('myButton').onclick= function(){
text.classList.add('fade');

}


