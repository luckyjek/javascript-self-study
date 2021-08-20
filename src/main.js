//Fetch the items from the JSON file
function loadItems() {
    return fetch("data/data.json")
        .then((response) => response.json())
        .then((json) => console.log(json));
}

//main
loadItems() //itmes를 동적으로 받아와서 , promis가 retrun(값을 성공적으로 전달해주면 ) 이되면,
    .then((items) => {
        // displayItems(items);
        // setEventListeners(items);
    })
    .catch(console.log);
