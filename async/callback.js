"use strict";

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
console.clear();
//hoisting : var , function declaration

console.log("1");
//setTimeout(() => console.log("2"), 1000); //비동기적 실행방법
setTimeout(() => console.log("2"), 1000);
//우리가 setTimeout으로 function () { //
//    console.log("2");
//} 이렇게 전달하는 함수는 바로 실행되는 것이 아니라
//setTimeout이라는 함수안에 하나의 파라미터 인자로
//우리가 지정한 즉, 만든 함수를 전달해준다.
//그래서 지금당장 실행 하지는않고, 1초가 지난 다음에,
//내 함수를 불러줘~ 라고해서
//callback "나중에 다시 불러줘~ "라고 해서
//전달하는 함수들을 callback함수라고하는것이다.
console.log("3");

//callback 내가 부르면 다시와줘!
////////////////////////////////////////////////////////////////

//다음으로 그럼, callback은 항상 비동기일때만 쓰일까? 아니다.
//callback또한 2가지의 경우로 나뉜다.

//Synchronous callback ( '동기' 즉각적으로 나오는 )

//callback을 파라미터인자로 받아서 일을 처리하는 함수
function printImmediately(print) {
    //print라는 callback을 받아서
    print(); //callback 을 바로 실행!
}

//함수실행
printImmediately(() => console.log("hello"));

//Asynchronous callback ('비동기' 나중에~ 언제나올지 예측할 수 없는)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

//Callback Hell example
//
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === "ellie" && password === "dream") ||
                (id === "coder" && password === "academy")
            ) {
                onSuccess(id);
            } else {
                onError(new Error("not found"));
            }
        }, 2000);
    }
}
