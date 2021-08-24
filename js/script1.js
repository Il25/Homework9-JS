/*1. Написать функцию, которая принимает массив из чисел, строку с одним из значений “Asc”, “Desc”, “None” и возвращает массив тех же чисел, но отсортированный по следующим правилам:
- Если отправить “Asc” - возвращает отсортированный массив в возрастающем порядке
- Если отправить “Desc” - возвращает отсортированный массив в убывающем порядке
- Если отправить “None” - возвращает массив без каких-либо модификаций*/

const array = [8, 5, 1, 22, 13, 1];

const getArray = (array, func) => {
    if (func === "Asc" || func === "asc") {
        return array.sort((a, b) => a - b);
    } else if (func === "Desc" || func === "desc") {
        return array.sort((a, b) => b - a);
    } else if (func === "None" || func === "none") {
        return array;
    }
};

const quession = prompt("Choose a function to sort array: Asc/ Desc/ None");

console.log(getArray(array, quession));