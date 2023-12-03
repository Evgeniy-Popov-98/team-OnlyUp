// /**
//  *? Напишіть функцію updateObject, яка приймає об'єкт та повертає
//  *? новий об'єкт без вказаного параметра
//  *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1}
//  */

const obj = { a: 1, b: 2, c: 3 };
function updateObject(newObj, key) {
    const resObj = { ...newObj }
    const status = delete resObj[key];
if (status) {
   return newObj[key]
}

    return resObj
}

console.log(updateObject(obj, 'c'))
