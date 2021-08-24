/*5. Написать функцию, которая принимает два массива чисел, сортирует их (можно использовать sort) и возвращает массив чисел, которые встречались в обоих входных массивах.*/

// let commonElements = array1.filter(function (val) {
//     return array2.indexOf(val) != -1;
// });

// console.log(commonElements);

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 7];

const commonElements = (arr1, arr2) => {
    arr1 = arr1.sort((a, b) => (a - b));
    arr2 = arr2.sort((a, b) => (a - b));
    arr1 = arr1.filter(val => arr2.indexOf(val) != -1);
    arr2 = arr2.filter(val => arr1.indexOf(val) != -1);
    return (arr1.length < arr2.length) ? arr1 : arr2;
};
console.log(commonElements(array1, array2));