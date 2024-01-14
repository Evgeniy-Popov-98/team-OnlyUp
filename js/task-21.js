// /*
// Завдання 4
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
// */

// < !--ЗАДАЧА 4 -- >
// 	<div>
// 		<p class="taskTitle">ЗАДАЧА 4</p>
// 		<div id="box"></div>
// 		<button id="decrease">Зменшити</button>
// 		<button id="increase">Збільшити</button>
// 	</div>;


const inc = document.getElementById("increase");
const dec = document.getElementById("decrease");
const box = document.getElementById("box");

let boxWidth = parseInt(getComputedStyle(box).width);
let boxHight = parseInt(getComputedStyle(box).height);
inc.addEventListener("click", () => {
	boxWidth += 10;
	boxHight += 10;
	box.style.width = `${boxWidth}px`;
	box.style.height = `${boxHight}px`;
});
dec.addEventListener("click", () => {
	boxWidth -= 10;
	boxHight -= 10;
	box.style.width = `${boxWidth}px`;
	box.style.height = `${boxHight}px`;
});
