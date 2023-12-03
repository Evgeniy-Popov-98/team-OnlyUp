/**
 *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
 *? розгорнути масив,
 *? вирізати foo,
 *? перевести його в рядок розділений пробілами
 */

const arr = ['BEST', 'the', 'foo', 'is', 'JS'];
const newArray = arr.reverse();
const a = newArray.indexOf('foo');
newArray.splice(a, 1);
console.log(newArray.join(' '));

const newArr = [];
if (!newArr.length) {
  console.log('This massive is empty');
}

const newObj = {};
if (!Object.keys(newObj).length) {
  console.log('This object is empty');
}
