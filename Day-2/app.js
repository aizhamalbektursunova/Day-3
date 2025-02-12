for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

const person = { name: "Айжамал", age: 22 };

person.city = "Бишкек"; // ✅ Работает!
console.log(person); 

function test() {
    var a = 10;
    console.log(a); // ✅ Выведет 10

    if (true) {
        let b = 20;
        var c = 30;
        console.log(b); // ✅ Выведет 20
    }

    console.log(c); // ✅ Выведет 30
}

test();
