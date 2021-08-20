//Fetch the items from the JSON file
function loadItems() {
    return (
        fetch("data/data.json") //fatch를 통해 데이터를 받아온다.
            .then((response) => response.json()) //받아온데이터가 성공적이면, json으로 변환하고
            // .then((json) => json.items); //json안에있는 items를 return하게된다.
            .then((json) => json.items)
    ); //json안에있는 items를 return하게된다.
}

//Update the list with the given items
function displayItems(items) {
    //받아온 items라는 데이터를 html 요소로 변환해서 페이지에 표기가되도록 만들기
    const container = document.querySelector(".items");
    //const html = items.map((item) => createHTMLString(item)).join("");
    //console.log(html);
    container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

//Create HTML list item from the given data item
function createHTMLString(item) {
    return `
  <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
      <span calss="item__description">${item.gender},${item.size} </span>
  </li>
  `;
}

function onButtonClick(event, items) {
    //console.log(event.target.dataset.key);
    //console.log(event.target.dataset.value);
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return; //함수를 끝내겠다.
    }

    const filtered = items.filter((item) => item[key] === value);
    console.log(filtered);
    displayItems(filtered);
}

function setEventListeners(items) {
    const logo = document.querySelector(".logo");
    const buttons = document.querySelector(".buttons");
    logo.addEventListener("click", () => displayItems(items));
    buttons.addEventListener("click", (event) => onButtonClick(event, items));
}
//main
loadItems()
    .then((items) => {
        //console.log(items); //배열 자체만 출력되는것을 볼 수 있다.
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);
