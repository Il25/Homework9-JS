/*6. Написать функцию, которая принимает строку и возвращает первый элемент, который повторяется. Если таких элементов нет, вернуть -1.*/

function firstRepeat(string) {
    for (let i = 0; i < string.length; i++) {
        let n = string.charAt(i);
        if (string.indexOf(n) !== string.lastIndexOf(n)) {
            return n;
        }
    }
    return -1;
};

console.log(firstRepeat("legolas"));
console.log(firstRepeat("Gandalf"));
console.log(firstRepeat("Balrog"));
console.log(firstRepeat("Isildur"));