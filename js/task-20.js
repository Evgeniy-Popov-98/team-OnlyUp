/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// <!-- ЗАДАЧА 3 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 3</p>
//       <input id="passwordInput" type="text" />
//       <button id="passwordButton">Приховати</button>
//     </div>

const button = document.querySelector("#passwordButton");
const input = document.querySelector("#passwordInput");

button.addEventListener("click", clickButton);

function clickButton() {
  const valueInput = input.getAttribute("type");
  if (valueInput === "text") {
    input.setAttribute("type", "password");
    button.textContent = "Розкрити";
  } else {
    input.setAttribute("type", "text");
    button.textContent = "Приховати";
  }
}
