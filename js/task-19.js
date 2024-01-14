// Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// */
// <!-- ЗАДАЧА 2 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 2</p>
//       <button id="swapButton">SWAP ME</button>
//       <input id="leftSwapInput" type="text" value="???" />
//       <input id="rightSwapInput" type="text" value="!!!" />
//     </div>


const btn = document.querySelector('#swapButton');
const inputLeft = document.querySelector('#leftSwapInput');
const inputRight = document.querySelector('#rightSwapInput');


btn.addEventListener('click', onClickBtn)

function onClickBtn() {
    const inputThree = inputLeft.value;
    const inputForth = inputRight.value;
    inputRight.value = inputThree;
    inputLeft.value = inputForth;
}