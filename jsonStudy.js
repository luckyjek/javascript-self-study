//AJAX는 동적으로 서버에게 데이터를 주고 받을수 있는 기술
//대표적으로XHR 이라는 대표적 Object가있다
//new fetch() API or XMLHttpReuest(불필요한 태그들이 너무많다) or
//요즘,JSON을 많이쓴다. 자바스크립트 Object 1999년! 키와 벨류로 이루어져있다!

//1.Object to JSON
//stringfy(obj) 'stringfy을 어떻게 사용할 수 있나?'

//간단한 데이터타입먼저 Json으로 변환해보기
//JSON 하고 .을 찍으면 2 가지 api이다있다.
//이중 stringfi를 사용하면 Object를 json으로 변환할 수 있다.
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);
console.log(json);
const rabbit = {
    name: "tory",
    color: "white",
    size: null,
    birthDate: new Date(),
    jump: () => {
        //함수는 Object에 있는 데이터가 아니므로 함수는 제외되고,
        //js자체에 들어있는 symbol안에있는 데이터도(ex. id ) json 에 포함되지않는다.
        console.log(`${name} can jump!`);
    },
};

console.log(rabbit);
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

//세밀하게 통제하고싶을때, 콜백함수를 이용해서 사용

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "name" ? "ellie" : value; //만약 key가 이름이라는 것이 들어오게되면,
    //무조건 ellie라고 설정하고, key가 name이 아닌경우는
    //원래 orignal을 써야지! -> 그럼 name만 ellie로 변환되는걸확인가능
});

//2.JSON to Object
//parse(json) 'stringfy(직렬화)로 만들어진 JSON을 다시 어떻게 Object로 변환할 수 있는지?'
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);

rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
