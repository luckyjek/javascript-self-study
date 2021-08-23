const age = parseInt(prompt("How old are you?"));

// parseInt(age);
// console.log(isNaN(age));

if (isNaN(age) || age < 0) {
    //age가 NaN(숫자가 아님 )이거나 또는 0보다 작을 때 실행
    console.log("Please write a real positive number");
} else {
    console.log("Thank you for writing your age.");
}

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + "and I'm" + age);
// }

// sayHello("nico", 33);
// sayHello("dal", 22);
// sayHello("lynn", 21);

// const player = {
//     name: "elin",
//     sayHello: function (otherPersonsName) {
//         console.log("hello!" + otherPersonsName + "nice to meet you!");
//     },
// };

//나만의 console.log 혹은 array.push와 같은 걸 가지게 되었다.
//function이 object안에 있을때
// console.log(player.name);
// console.log(player.sayHello("enkyung "));
// player.sayHello("lynn ");
// player.sayHello("nico ");

// const calculator = {
//     plus: function (a, b) {
//         return a + b;
//     },
//     times: function (a, b) {
//         return a * b;
//     },
//     minus: function (a, b) {
//         return a - b;
//     },
//     divide: function (a, b) {
//         return a / b;
//     },
//     power: function (a, b) {
//         return a ** b;
//     },
// };

//이렇게 하는 이유는 즉, return을 사용하는 이유는
//console.log는 콘솔에 결과를 보여주기 위한 것.
//망고쥬스를 마셔야돼서 꺼내고싶은데, 그냥 바라보고있는것과같아.
// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// const age = 96;

// function calculator(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculator(age);

// console.log(krAge);
