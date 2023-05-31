let x = 5;  // 숫자형(Number)
let y = 'five'; // 문자형(String)
let isTrue = true;  // 불린형(Boolean)
let empty = null;   // null
let nothing // undefined
let sym = Symbol('me'); // Symbol

let item = {
    price : 5000,
    count : 10
};  // 객체(object)

let fruits = ['apple', 'orange', 'kiwi'];   // 배열(Array)
let addFruit = function (fruit) {
    fruits.push(fruit);
}

// 함수(function)

addFruit('watermelon');
console.log(fruits)