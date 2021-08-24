/*7. Числа Фибоначчи считаются следующим образом:
F(0) = 0
F(1) = 1
...
F(n) = F(n-2) + F(n-1)
Написать функцию, которая будет считать n-ное число из ряда Фибоначчи. Использовать рекурсию*/

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(8));