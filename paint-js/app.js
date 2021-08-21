function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + "and I'm" + age);
}

sayHello("nico", 33);
sayHello("dal", 22);
sayHello("lynn", 21);

const player = {
    name: "elin",
    sayHello: function (otherPersonsName) {
        console.log("hello!" + otherPersonsName + "nice to meet you!");
    },
};

//나만의 console.log 혹은 array.push와 같은 걸 가지게 되었다.
//function이 object안에 있을때
console.log(player.name);
console.log(player.sayHello("enkyung "));
player.sayHello("lynn ");
player.sayHello("nico ");
