"use strict";

/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted);

// function copySorted(arr) {
//     let newArr = [];
//     arr.forEach(function(value, key) {
//         newArr[key] = value;
//     });

//     return newArr;
// }

// function copySorted(arr) {
//     return arr.slice().sort();
// }

//

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];
// let names = [];

// users.forEach(function(val, key) {
//     // старый вариант
//     // names[key] = users[key]["name"];

//     // деструктуризация
//     const {name} = users[key];
//     names[key] = name;
// });

// console.log(names);

//
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
// где fullName – состоит из name и surname.
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(function(val, key){
    id: users[key]["id"],
    fullName: `${users[key][name]} ${users[key][surname]}`
});

console.log(usersMapped);