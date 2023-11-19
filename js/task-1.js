//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10

const value = 70;

function formatTime(time) {
  const hour = String(Math.floor(time / 60)).padStart(2, 0);
  const min = String(time % 60).padStart(2, 0);

  //   const modHour = String(hour).padStart(2, 0);
  //   const modMin = String(min).padStart(2, 0);

  return `${hour}:${min}`;
}

console.log(formatTime(value));
