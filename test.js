function add(num1, num2) {
    return num1 + num2;
}

function surprise(operator) {
    //add를 복사를한다.
    const result = operator(2, 3);
    console.log(result);
}

surprise(add);

//----------------------------------Class 함수부분작성

class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes; //받아온 인자값을 기억한다.
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`yo! ${num}`);
}

function alertNum(num) {
    alert(`yo! ${num}`);
}
const coolCounter = new Counter(alertNum);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
