"use strict";

//hoisting : var , function declaration
//Synchronous callback (즉각적으로 나오는 )
function printImmediately(print) {
    print();
}

console.log("1");
setTimeout(() => console.log("2"), 1000);

console.log("3");

//그럼 callback 내가 부르면 다시와줘!
//callback은 그럼 비동기일때만 쓰일까?
//2가지의 경우로 나뉜다.

printImmediately(() => console.log("hello"));
//Asynchronous callback (나중에~ 언제나올지 예측할 수 없는)

function log(message) {
    console.log(message);
    let test = message;
    return console.log(test);
}

log("Hello!");

//return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);
console.log(`sum: ${sum(1, 2)}`);

//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}
//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//Callback function using function expression
//너가 상황이맞으면 전달된 함수를 불러! = callback 함수
function randomQuiz(answer, printYes, printNo) {
    if (answer === "love you") {
        printYes();
    } else {
        printNo();
    }
}

//anonymous function 이름이없는 함수
const printYes = function () {
    console.log("yes!");
};
//named function
//better debugging in debugger's statck traces
//recursions
const printNo = function print() {
    console.log("no!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

//Arrow function
//항상 이름이없는 always anonymous

const simplePrint = function () {
    console.log("simplePrint!");
};

const simplePrint2 = () => console.log("simplePrint!");

//일반 함수
const add = function (a, b) {
    return a + b;
};
//Arrow function
//한줄인 경우에는 블록없이 작성가능
const add2 = (a, b) => a + b;

//함수안에서 쫌 더 다양한 일들을 해야돼서 블록이 필요하다면,
//아래와 같이 블럭을 넣어서 처리할 수 있다.
//대신에 블록을 쓰게되면, return이라는 키워드를 이용해서 값을 return해줘야된다.
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

//IIEE: Immediately Invoked Function Expression
(function hello() {
    console.log("IIEE");
})();
