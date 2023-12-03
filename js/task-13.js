///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function newObj(obj) {
  const newArray = [];
  for (const item of obj) {
    const id = Math.round(Math.random() * 100);
    const price = item.price * 0.8;
    newArray.push({ ...item, price, id });
  }
  return newArray;
}

console.log(newObj(fruits));
