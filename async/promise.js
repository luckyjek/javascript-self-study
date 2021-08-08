'use strict';
//Promise : 약속 
//js에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 Object이다.
//Promise는 정해진 장시간의 기능을 수행하고나서, 정상적으로 수행이 되어졌다면,
//성공의 메시지와 함께 처리된 결과값을 전달해주고,
//만약 기능을 수행하다가 , 예상치못한 문제가 발생하면 에러를 보내준다.

//그럼 어떻게 callback을 쓰지않고, promise Object를 통해서 
//비동기코드를 깔끔하게 처리할 수 있는지 알아보자! 


//Promise is a JavaScript object asynchronous opration.
//프로미스는 자바스크립트의 내장객체이며, 비동기적으로 실행할때 
//callback함수대신 사용할 수 있다.

//정리: 
// Promise의 상태(state)는 프로미스가 만들어져서 우리가 지정한
// opration이 수행 중일때는 pending상태가 되고, 이 opration을 성공적으로
// 끝나게 되면, fulfilled state(완벽하게 완료된 상태)가 된다. or rejected

//1.state(상태) : pending-> fulfilled or rejected
//2.정보를제공하는 Producer vs 정보를 소비하는 Consumer

//Promise만들기


//1. Producer
//when new Promise is created, the executor runs automatically.
//우리가 원하는 기능을 비동기적으로 실행하는 Promise를 만들어보자! 
const promise = new Promise((resolve, reject)=>{
  //doing some heavy work(network, read files)
  console.log('doing someting...')
  setTimeout(()=>{
    resolve('ellie')
    //reject(new Error('no network'))
  },2000);
});


// 2. Consumers: then, catch, finally
promise
.then((value)=>{
  console.log(value);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log('finally');
})

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(1),1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(num-1), 1000);
  });
})
.then(num => console.log(num));



//4. 오류를 잘 처리하자 (Error Handling)

const getHen = () =>
new Promise((resolve, reject)=>{
  setTimeout(()=>resolve('🐓'),1000);
})

const getEgg = hen =>
new Promise((resolve, reject)=>{
//setTimeout(()=>resolve(`${hen}=>🥚`),1000);
setTimeout(()=>reject(new Error (`error! ${hen}=>🥚`)),1000);
})
const cook = egg=>
new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(`${egg}=>🍳`),1000);
})

//getHen()
//.then(hen=> getEgg(hen))
//.then(egg=> cook(egg))
//.then(meal => console.log(meal));
getHen()
.then(getEgg)
.catch(error=>{
  return '🥨'
})
.then(cook)

.then(console.log)

.catch(console.log);