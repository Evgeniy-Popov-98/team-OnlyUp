// <!-- ЗАДАЧА 1 -->
    // <div>
    //   <p class="taskTitle">ЗАДАЧА 1</p>
    //   <button id="alertButton">SHOW ME</button>
    //   <input id="alertInput" type="text" />
    // </div>

/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
const btn = document.querySelector('#alertButton');
const inputElem = document.querySelector('#alertInput');

btn.addEventListener('click', onClickBtn);

function onClickBtn() {
    console.log(inputElem.value);
}