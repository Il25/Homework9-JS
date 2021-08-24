/*2. Написать функцию, которая принимает число от 1 до 999 и возвращает его строковый вариант.*/

function numToString(number) {
    let numbers = [{
            value: 900,
            string: "Девятьсот"
        },
        {
            value: 800,
            string: "Восемьсот"
        },
        {
            value: 700,
            string: "Семьсот"
        },
        {
            value: 600,
            string: "Шестьсот"
        },
        {
            value: 500,
            string: "Пятьсот"
        },
        {
            value: 400,
            string: "Четыреста"
        },
        {
            value: 300,
            string: "Триста"
        },
        {
            value: 200,
            string: "Двести"
        },
        {
            value: 100,
            string: "Сто"
        },
        {
            value: 100,
            string: "Сто"
        },
        {
            value: 90,
            string: "Девяносто"
        },
        {
            value: 80,
            string: "Восемьсот"
        },
        {
            value: 70,
            string: "Семьсот"
        },
        {
            value: 60,
            string: "Шестьсот"
        },
        {
            value: 50,
            string: "Пятьсот"
        },
        {
            value: 40,
            string: "Сорок"
        },
        {
            value: 30,
            string: "Тридцать"
        },
        {
            value: 20,
            string: "Двадцать"
        },
        {
            value: 19,
            string: "Девятнадцать"
        },
        {
            value: 18,
            string: "Восемнадцать"
        },
        {
            value: 17,
            string: "Семнадцать"
        },
        {
            value: 16,
            string: "Шеснадцать"
        },
        {
            value: 15,
            string: "Пятнадцать"
        },
        {
            value: 14,
            string: "Четырнадцать"
        },
        {
            value: 13,
            string: "Тринадцать"
        },
        {
            value: 12,
            string: "Двенадцать"
        },
        {
            value: 11,
            string: "Одинадцать"
        },
        {
            value: 10,
            string: "Десять"
        },
        {
            value: 9,
            string: "Девять"
        },
        {
            value: 8,
            string: "Восемь"
        },
        {
            value: 7,
            string: "Семь"
        },
        {
            value: 6,
            string: "Шесть"
        },
        {
            value: 5,
            string: "Пять"
        },
        {
            value: 4,
            string: "Четыре"
        },
        {
            value: 3,
            string: "Три"
        },
        {
            value: 2,
            string: "Два"
        },
        {
            value: 1,
            string: "Один"
        }
    ];
    let result = "";
    for (let num of numbers) {
        if (number >= num.value) {
            if (number <= 999) {
                result += num.string;
                number -= num.value;
                if (number > 0) result += " ";
            } else {
                let i = number % num.value;
                if (i > 0) {
                    return numToString() + " " + num.string + " " + numToString();
                } else {
                    return numToString() + " " + num.string;
                }
            }
        }
    }
    return result;
};

console.log(numToString(1));
console.log(numToString(99));
console.log(numToString(999));