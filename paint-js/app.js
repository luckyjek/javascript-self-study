//HTML을 가져오는것을 JavaScript에서 하고있다.
//그리고 JavsScript는 이 HTML element를 가지고 오지만,
//HTML 자체를 보여주지는 않는다.
const title = document.getElementById("title");

//document함수이고, document는 알다시피 HTML을 뜻한다.
//JavaScript 관점에서의 HTML을 말한다.
title.innerText = "Got you!";

//console.dir(title);
console.log(title);
console.log(title.id);
console.log(title.className);
