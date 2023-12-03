// /**
//  *? Напишіть функцію, яка приймає як параметр об'єкт
//  *? та формує об'єкти у новому масиві у форматі [key, value]
//  *? https://question-it.com/questions/245501/kak-razbit-obekt-js-na-massiv-par-kljuch-znachenie
//  */


const user = {
  name: "John",
  surName: "Stones",
  age: 20,
  hobby: "tennis",
  haveCar: true,
  married: false,
};
function newArray(obj) {
  return  Object.entries(obj)
}
console.log(newArray(user))