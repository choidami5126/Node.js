// function add(a, b) {
//     return a + b;
// };

// module.exports = add;
// module.exports로 내보낼 때는 함수 자체를 내보낸다.


// exports.add = function add(a, b) { 
//     return a + b;
// };
// 'exports.add =' 익명 함수로 내보내게 되면 객체를 내보낸다.


// function add(a, b) {
//     return a + b;
// };
// module.exports = {add: add};
// // 내보내줄 때 바로 객체 형식으로 내보내줄 수 있다.

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

// 1. module.exports = add; 모듈 그 자체를 바로 add 함수를 할당한다.
// 2. module.exports = {add: add}; 모듈을 호출했을 때, add 키 값에는 add 함수가 들어가는 방법이다.
// 3. exports.add = function add(a, b) {
//     return a + b;
//     }; 모듈을 호출했을 때, add 키 값에는 (a,b){return a + b;} 익명함수가 할당되는 방법이다.
//4.
const add = (a, b) => {
    return a +b;
}

exports.add = add;
// 변수에 익명 함수를 할당해 내보내는 것도 가능하다.
// 모듈을 호출했을 때, add 키 값에는 add 변수 함수가 가지고 있는 값이 할당된다.