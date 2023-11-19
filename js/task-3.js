//  *? Напишіть цикл, який виводить у консоль
//   *? Виведіть у консоль усіх парних чисел від min до max

const max = 50;
const min = 23;
let sum = 0;
for (let index = min; index <= max; index++) {
    if (index % 2 === 0) {
       sum += index; 
     
    }
   
   } 

console.log(sum);