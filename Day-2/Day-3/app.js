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









