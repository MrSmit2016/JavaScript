"use strict"


// const abc = function(a, b, c){
//     return a+b+c;
// };

// console.log(abc(1,2,3));

// const multi = funtion(a,b) {
//     return a*b-c;
// };

// console.log(multi(1,2,3,4,5,6));

// const fnB = function() {
//     console.log("this is function 2"); 
// };

// const fnA = function() {
//     console.log("this is function 1");
//     fnB();
//     console.log("this is function 1 & 2")
// };
 
// console.log(fnA());



// const count = function(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   };
  
//   count(1, 5); // countFrom = 1, countTo = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
//   count(); // countFrom = 0, countTo = 10, step = 1




//   const args = function() {
//       let sum = 0; 

//       for(let el of arguments){
//           sum += el;
//       };
//       return sum;
//   };

//   console.log(args(1,2,3));


// const  arrFromArgs = function() {
//     let arr = Array.from(arguments);

//     if(arr.includes(5)){
//         alert("Molodez");
//     }
//     else {
//         alert("Rozbiinik");
//     }
// };

// arrFromArgs(1,2,3,4,5);



// const operator = function(...args){
//     console.log(...arg);
// };
// operator("a", "b", "c");

// const withdraw = function(amount, balance) {
//     /*
//      * Проверяется условие. Если оно выполняется, происходит
//      * console.log и выход из функции. Код идущий после тела if
//      * не выполнится.
//      */
//     if (amount === 0) {
//       console.log('Для проведения операции введите сумму больше нуля.');
//       return;
//     }
  
//     /*
//      * Если условие первого if не выполнилось, его тело пропускается
//      * и интерпретатор доходит до этого if.
//      * Проверяется условие. Если оно выполняется, происходит
//      * console.log и выход из функции. Код идущий после тела if
//      * не выполнится.
//      */
//     if (amount > balance) {
//       console.log('Недостаточно средств на счету.');
//       return;
//     }
  
//     /*
//      * Если ни один из предыдущих if не выполнился,
//      * интерпретатор доходит до этого кода и выполняет его.
//      */
//     console.log('Операция снятия средств проведена.');
//   };
  
//   withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// //   withdraw(500, 300); // Недостаточно средств на счету.
// //   withdraw(100, 300); // Операция снятия средств проведена.



// const hello1 = function(){
//     alert("Привет JavaScript");
// }
// hello1()



// const hello2 = function(name="Гость"){
//     console.log(`Привет, ${name}`);

// };
// hello2("MAKAR");
// hello2();





// const c = 5;

// function a(){
//     if(1==1){

//     }

//     function b(){

//     }
// }




// const r = 10;

// const sum = function( ){
//     let a=5;
//     console.log(a+r);
// };

// sum();




// const host = function(){
//     let c =5;
//     const fot = function(){
//         let b = 10;
//         console.log(b + c)
        
//     }
//     return fot()
// };
//     host();



// const sum = function(a,b,c){
//     console.log(a+b+c);
// };
// console.log(sum(1,2,3));

// const sum2 = (a,b,c) => a + b + c;

// console.log();




// const avg = function(...arg){
//     console.log(Math.max(...arg));
// }
// avg(100,12,43,65,7);



// const avg = function(num1, num2){
//     console.log(Math.min(num1, num2));
    
// };
// avg(1,5);



// const multi = function(arr, num){
//     let newArr = arr.slice(0);
//     for (const el of newArr) {
//     newArr.push(el*num);
//     }
//     console.log(newArr);
// }
// const number = [1,2,3,4,5]
// multi(number, 2)




const pass = prompt("please password");
const valitation = function(pass){
    if(pass.length>6 && pass.length<12){
    return   alert("true")
    } else{
    return   alert("false")
    }
    return valitation;
}
console.log(valitation(pass));