// Задача 1: Определение типа данных без typeof

function getType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    if (value instanceof Date) return "date";
    if (value instanceof Function) return "function";
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

// Тесты
console.log(getType(42));          // "number"
console.log(getType("hello"));     // "string"
console.log(getType(null));        // "null"
console.log(getType([]));          // "array"
console.log(getType({}));          // "object"
console.log(getType(() => {}));    // "function"
console.log(getType(new Date()));  // "date"


// Задача 2: Проверка числового ввода и преобразование строки в число

function parseNumber(input) {
    if (typeof input === "number") return input; // Если уже число, возвращаем
    if (typeof input !== "string") return NaN; // Если не строка, то NaN

    const num = Number(input.trim()); // Убираем пробелы и преобразуем
    return isNaN(num) ? NaN : num; // Если получилось NaN, возвращаем ошибку
}

// Тесты
console.log(parseNumber("  42  "));  // 42
console.log(parseNumber("3.14"));    // 3.14
console.log(parseNumber("abc"));     // NaN
console.log(parseNumber("0xFF"));    // 255 (шестнадцатеричное число)
console.log(parseNumber(null));      // NaN

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
