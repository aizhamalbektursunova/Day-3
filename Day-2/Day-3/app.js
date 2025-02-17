// Задача 1: Определение типа данных без typeof

function getType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    if (value instanceof Date) return "date";
    if (value instanceof Function) return "function";
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

// Тесты
console.log(getType(42));          
console.log(getType("hello"));     
console.log(getType(null));        
console.log(getType([]));          
console.log(getType({}));          
console.log(getType(() => {}));    
console.log(getType(new Date()));  


// Задача 2: Проверка числового ввода и преобразование строки в число

function parseNumber(input) {
    if (typeof input === "number") return input; 
    if (typeof input !== "string") return NaN; 

    const num = Number(input.trim()); 
    return isNaN(num) ? NaN : num; 
}

// Тесты
console.log(parseNumber("  42  ")); 
console.log(parseNumber("3.14"));    
console.log(parseNumber("abc"));     
console.log(parseNumber("0xFF"));    
console.log(parseNumber(null));      

// Задача 3: Спрашиваем возраст, но с валидацией ввода

function askAge() {
    let age;
    
    while (true) {
        age = prompt("Введите ваш возраст:");
        if (age === null) {
            console.log("Ввод отменен.");
            return;
        }

        age = Number(age.trim());
        if (!isNaN(age) && age > 0) break;

        console.log("Ошибка! Введите корректный возраст.");
    }

    console.log(`Через 5 лет вам будет: ${age + 5}`);
}

askAge();

// Day-4
// Задача 1: Определить чётное или нечётное число без %

function isEven(num) {
    return (num & 1) === 0; // Используем побитовую операцию AND
}

// Тесты
console.log(isEven(10)); 
console.log(isEven(7));  
console.log(isEven(0));  
console.log(isEven(-4)); 

// Задача 2: Реализовать оператор ?? вручную

function nullishCoalescing(a, b) {
    return (a === null || a === undefined) ? b : a;
}

// Тесты
console.log(nullishCoalescing(null, "default")); 
console.log(nullishCoalescing(undefined, 42));  
console.log(nullishCoalescing(0, 100));         
console.log(nullishCoalescing("", "hello"));    
console.log(nullishCoalescing(false, true));    

// Задача 3: Выполнение математического выражения из строки

// Условие:
// Напишите функцию calculate(expression), которая принимает строку вида "2 + 3 * 4" и вычисляет её результат.

function calculate(expression) {
    try {
        return new Function(return ${expression})();
    } catch (error) {
        return "Ошибка в выражении!";
    }
}

// Тесты
console.log(calculate("2 + 3 * 4"));
console.log(calculate("10 / 2 - 3")); 
console.log(calculate("5 ** 2 + 1")); 
console.log(calculate("100 % 3")); 
console.log(calculate("abc + 5")); 



// Day-5

// Задача 1: Найти наибольшее из трёх чисел без Math.max

// Условие:
// Написать функцию maxOfThree(a, b, c), которая возвращает наибольшее из трёх чисел, используя только условные операторы (if или тернарный ? :).


function maxOfThree(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}

// Тесты
console.log(maxOfThree(10, 20, 30)); 
console.log(maxOfThree(-5, -2, -10)); 
console.log(maxOfThree(7, 7, 7)); 
console.log(maxOfThree(100, 50, 99));

// Задача 2: Проверка, является ли число степенью двойки

// Условие:
// Написать функцию isPowerOfTwo(n), которая определяет, является ли число n степенью двойки (например, 1, 2, 4, 8, 16, 32, ...).


function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// Тесты
console.log(isPowerOfTwo(1)); 
console.log(isPowerOfTwo(2)); 
console.log(isPowerOfTwo(8)); 
console.log(isPowerOfTwo(10)); 
console.log(isPowerOfTwo(1024));

// Задача 3: Определить, является ли год високосным

// Условие:
// Написать функцию isLeapYear(year), которая проверяет, является ли год високосным.

// Правила високосного года:
// 1. Делится на 4.
// 2. Не делится на 100, кроме случаев, когда делится на 400.

Решение:

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


console.log(isLeapYear(2024)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(2023));

// Day-6
// Задача 1: Проверка, является ли число простым

// Условие:
// Написать функцию isPrime(n), которая проверяет, является ли число n простым (делится только на 1  само себя).

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Тесты
console.log(isPrime(2));
console.log(isPrime(7)); 
console.log(isPrime(10));
console.log(isPrime(17)); 
console.log(isPrime(25));


// Задача 2: Нахождение НОД (наибольшего общего делителя)

// Условие:
// Написать функцию gcd(a, b), которая находит НОД двух чисел (используем алгоритм Евклида).


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Тесты
console.log(gcd(48, 18)); 
console.log(gcd(101, 103)); 
console.log(gcd(56, 98)); 
console.log(gcd(270, 192));


// Задача 3: Вывод всех чисел Фибоначчи до n

// Условие:
// Написать функцию fibonacci(n), которая выводит все числа Фибоначчи, не превышающие n.


function fibonacci(n) {
    let a = 0, b = 1;
    let sequence = [a, b];
    
    while (true) {
        let next = a + b;
        if (next > n) break;
        sequence.push(next);
        a = b;
        b = next;
    }

    return sequence;
}

// Тесты
console.log(fibonacci(10)); 
console.log(fibonacci(50)); 
console.log(fibonacci(100);

// Day-7

// Задача 1: Проверка, является ли строка палиндромом

// Условие:
// Написать функцию isPalindrome(str), которая проверяет, является ли строка палиндромом (читается одинаково слева направо и справа налево).

const isPalindrome = (str) => {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

// Тесты
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("12321")); 
console.log(isPalindrome("Was it a car or a cat I saw?"));


// Задача 2: Найти сумму всех чисел в массиве (используем reduce)

// Условие:
// Написать функцию sumArray(arr), которая принимает массив чисел и возвращает их сумму.


const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

// Тесты
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([10, -2, 8, -4]));
console.log(sumArray([0, 0, 0]));
console.log(sumArray([100])); 
console.log(sumArray([]));


// Задача 3: Переставить слова в строке в обратном порядке

// Условие:
// Написать функцию reverseWords(str), которая принимает строку и меняет порядок слов в ней.



const reverseWords = (str) => str.split(' ').reverse().join(' ');

// Тесты
console.log(reverseWords("Hello World")); 
console.log(reverseWords("The quick brown fox")); 
console.log(reverseWords("JavaScript is awesome")); 
console.log(reverseWords("OneWord")); 
console.log(reverseWords("  Multiple   spaces "));
