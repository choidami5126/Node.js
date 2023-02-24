const {add} = require('./math.js');
console.log(add) //[Function: add]
// 객체구조분해할당을 통해서 add라는 함수 하나만 가져와서 실제 사용하겠다고 설정 가능


// console.log(add); // { add: [Function: add] } 객체임을 알 수 있음
// console.log(add.add(10, 20)) // 30
console.log(add(10, 30)); // 40 module.exports로 내보내진 함수자체임으로 바로 40의 값을 나타낸다.