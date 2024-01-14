// <!-- ЗАДАЧА 7 -->
    // <div>
    //   <p class="taskTitle">ЗАДАЧА 7</p>
    //   <div class="outerCircle">
    //     <div class="innerCircle"></div>
    //   </div>
// </div>
    
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

const outCircle = document.querySelector(".outerCircle");

outCircle.addEventListener('click', onCircleClick);

function onCircleClick(e) {
const circle = e.currentTarget;

    if (circle.style.position === "absolute") {
        circle.style.position = "static";
        window.removeEventListener('mousemove', mover);
        return;
    }
    
    circle.style.position = "absolute";

    window.addEventListener('mousemove', mover);
    }

function mover(e) {
    console.log(e);
    let topPosition = e.pageY;
    let leftPosition = e.pageX;
    outCircle.style.top = `${ topPosition - 15 }px`;
    outCircle.style.left = `${leftPosition - 15}px`;
}