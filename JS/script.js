"use strict"; // Запуск современного JS! (Использовать всегда в самом начале кода).

const obj = { // Объект со свойствами.
    name: "John",
    age: 25,
    isMarried: false
};

//console.log(obj.name); //Вывод свойства обьекта "Имя" - John

//let arr = ['plumb.png', 'orange.jpg', 'apple.bmp', {},[]]; //Массив упорядочивает данные строго по порядку.
//Исчисление элементов массива начинаеться с 0. Элементами массива могут быть файлы, числа, объекты, и другие массивы.

//console.log(arr[1]); //Выведение элемента массива под №1


//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = prompt("Вам есть 18?", "18");
//console.log(answer + 5); //Вся информация от пользователя будет в формате "string"!

//const answers = [];

//answers [0] = prompt('Как ваше имя?', '');
//answers [1] = prompt('Как ваша фамилия?', '');
//answers [2] = prompt('Сколько вам лет?', '');

//console.log(typeof(answers));
//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`); - Интерполяция в ES6. Упрощает обращение к переменным в динамике.

//const user = "Ivan";

//alert(`Привет, ${user}`);

console.log('arr' + " - object");

let incr = 10,
    decr = 10;

//  ++incr;
//  --decr;

/*  Постфиксная форма сначала возвращает старое 
*   значение инкремента, 
*   а уже после попадение в лог прибавляет значение 
*   (аналогично и дикремент)
    console.log(incr++);
    console.log(decr--);
*/

/*  Префиксная форма сразу изменяет значение инкремента,
*    после чего выводит его в лог.
*   (аналогично и дикремент)
    console.log(++incr);
    console.log(--decr);
*/
console.log(5%2);