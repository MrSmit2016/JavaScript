"use strict"

//Задание 1 ==========================================================================
const logItems = function(array){
  for(let i = 0; i < array.length; i++){
    console.log(`${i}-${array[i]}`);
  }
}
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

  //Задаине 2 ========================================================================
  const calculateEngravingPrice = function(message, pricePerWord) {
    let arr = message.split(" ");
    let sum =  pricePerWord * arr.length;
    return sum;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120


  //Задание 3 =====================================================================

  const findLongestWord = function(string) {
    let arr = string.split(" ");
    let max = 0;
    let str = "";
    for(let i = 0; i < arr.length; i++ ){
      if(arr[i].length > max){
        max = arr[i].length;
        str = arr[i];
      }
    }
    return str;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'

  // Задание 4 =====================================================================


  const formatString = function(string) {
    let formated 
      if(string.length > 40) {
        formated = string.slice(0,40) + "...";

      }
      return formated;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка


//  Задание 5 ========================================================================


  const checkForSpam = function(message) {
    let str = message.toLowerCase()
    if(str.includes("sale") || str.includes("spam")){
      console.log(true)
    } else{
      console.log(false)
    }
  };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

  

  // Задание 6 ========================================================================

  let input;
const numbers = [];
let total = 0;

do{
  input = prompt("Enter number");
  if(input && !Number.isNaN(input)){
    numbers.push(+input);
  }
}while(input)

if(numbers.length>0){
  for(let el of numbers){
    total += el
  }
  alert(`Общая сумма чисел равна ${total}`)
}