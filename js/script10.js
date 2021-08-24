/*10. Написать функцию, которая принимает значения start и end в параметрах, возвращает массив, который содержит все числа в данном диапазоне, включая отправленные. Порядок расположения чисел в возвращаемом массиве зависит от того, какие параметры были отправлены*/

const reversibleInclusiveList = (start, end) => new Array(end - start + 1).fill().map(() => start++);

console.log(reversibleInclusiveList(1, 5));
console.log(reversibleInclusiveList(2, 8));
console.log(reversibleInclusiveList(10, 20));