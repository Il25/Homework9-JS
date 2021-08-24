/*9. Написать функцию, которая принимает два числа в параметрах (num, length) и возвращает массив множителей числа num, пока массив не получит длину равную length. Использовать цикл*/

function arrayOfMultiples(num, length) {
    const array = [];
    for (let i = 1; i <= length; i++) {
        array.push(num * i);
    }
    return array;
};

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));