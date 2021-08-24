/*8. Написать функцию, которая принимает число и возвращает другую функцию. Возвращаемая функция должна принимать массив чисел в качестве параметра и возвращать тот же массив, но где каждое число разделено на число, которое было отправлено в первую функцию*/

const array = [30, 45, 60];

const getArray = (factory) => {
    const arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        let result = array[i] / factory;
        arrayResult.push(result);
    }
    return arrayResult;
};

console.log(getArray(15));
console.log(getArray(3));