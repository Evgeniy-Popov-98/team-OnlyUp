//  *? При завантаженні сторінки користувачеві пропонується
//   *? в prompt ввести число. Введення додається до значення
//   *? змінної total.
//   *? Операція введення числа триває до того часу,
//   *? поки користувач не натисне кнопку Cancel у prompt.
//   *? Після того як користувач припинив введення, натиснувши на
//   *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
//   *! Робити перевірку, що користувач ввів саме число,
//   *! а не довільний набір символів не потрібно.
let number = prompt('Введіть число');
let total = 0;
let check = false;
do {
    if (number) {
        check = true;
        total += Number(number);
        number = prompt('Введіть число');
    } else {
        check = false;
        alert(`Загальна сума введених чисел дорівнює ${total} `);
    }

}
while (check) 