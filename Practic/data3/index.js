"use strict";




// let array=["summer", "winter", "spring", "autum"];

//  array[0]="Hello, world!!!";
//  array[2]="bogs";

//  console.log(array);

// const string = "hello world my friends";

// console.log(string.split(" ").join(" ").includes("my"));



// const arr = [];
// arr.push(1, 2, 4, 5, 6);
// arr.unshift(1, 5);
// arr.pop()
// arr.shift(); 

// console.log(arr);







// const arr = ["a","b","c","d","f"];
// const arrNum = [1,2,3,4,5,6];

// const newArr = arr.slice(0,0);
// const newArr = arr.splice(2, 0)
// const newArr = arrm.Str.concat(arrNum);

// console.log(newNum);
// console.log(arrNum);

// console.log(arr);
// console.log(newArr);







// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// // Удалить первый элемент массива
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить последний элемент массива
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива пользователя "Lux"
// users.unshift("Lux");
// console.log(users); // ["Lux", "Poly", "Ajax"]

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push("Jay, Kiwi");
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]


// const i = 0;

// while(i<10){
//     i = i + 1;
//     console.log("counter", i);
// }




// const reservedPlace = 25;
// let taketPlace = 18;

// while(taketPlace < reservedPlace){
//     takenPlace++;
//     console.log(`$(taketPlace) of $(reservedPlace)`);
// }








// const arr = ["Ajax", "Mango", "Jay", "Hello"];
// let i = 0;

// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }






//  const arr = ["a","b","c","d"];
// let i = 0;

// do{
//     console.log(arr[i]);
//     i++;
//     console.log(i);
// }
// while(i<arr.length);

// for(let i = 1; i < arr.length; i++){
//     console.log(arr[i]);
// }




// const number = 10;
// for (let i = 0, max = 10; i < max; i += 1){
//     console.log(`${max} % ${i} =`, max % 1);
// }


// const arr = ["a","b","c","d"];

// for(let el of arr){
//     console.log(el);
// }





/*
* Есть массив имен пользователей users
*
* Напиши цикл, который для каждого пользователя будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента]. 
* 
* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
*
* Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
*/

const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

for(let i = 0; i < users.length; i++){
    console.log(`${i+1} - ${users[i]}`);
}

