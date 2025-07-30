let textInput = document.getElementById("text-input");
let addBtn= document.getElementById("add-btn");
let listContainer = document.getElementById("list");

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(textInput.value == ""){
        return
    }
    let listElement = document.createElement("li");
    let spanElement = document.createElement("span");
    spanElement.innerText = `${textInput.value}`
    const editBtn = document.createElement("button");
})