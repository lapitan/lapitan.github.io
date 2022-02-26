const inputBox = document.querySelector("#inputText")
const addButton = document.querySelector("#confirmButton")
const listOfCallBacks = document.querySelector("#pending")

let entryLocalStorage = localStorage.getItem("new entry");
let listCallBacks = [];
if (entryLocalStorage) {
    listCallBacks = JSON.parse(entryLocalStorage);
}
showCallBacks();

function showCallBacks() {
    let newLiTag = '';
    listCallBacks.forEach((element, index) => {
        newLiTag += `<li> ${element} <button onclick="deleteCallBack(${index})"> remove </button></li>`
    });
    listOfCallBacks.innerHTML = newLiTag;
}

addButton.onclick = ()=> {
    let text = inputBox.value;
    if (text !== "") {
        listCallBacks.push(text);
    }
    localStorage.setItem("new entry", JSON.stringify(listCallBacks));
    showCallBacks()
}

function deleteCallBack(index) {
    listCallBacks.splice(index, 1);
    localStorage.setItem("new entry", JSON.stringify(listCallBacks));
    iziToast.show({
        position: 'topLeft',
        color: 'blue',
        message: 'зачем удалил?'
    });
    showCallBacks()
}