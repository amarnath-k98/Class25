let mainContainer = document.getElementById("main");
console.log(mainContainer);
mainContainer.innerText = "Hello";
mainContainer.style.backgroundColor ="red";

let classElement =document.getElementsByClassName("element");
console.log(classElement[0]);
classElement[0].style.backgroundColor = "blue";
console.log(classElement[1]);

let queryElement = document.querySelector("div");
console.log(queryElement)
let allQueryElement = document.querySelectorAll("div");
console.log(allQueryElement);

let contain =document.getElementById("contain");

contain.style.border = "1px solid black";
contain.style.padding = "10px";
contain.style.margin = "0 auto";
contain.style.width = "500px";
contain.style.height = "max-height";
contain.style.display = "flex";
contain.style.flexDirection = "column";
contain.style.gap = "1rem";
contain.style.justifyContent = "center";
contain.style.alignItems = "center";

contain.innerHTML = `
    <h1>Hello</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur magni labore delectus voluptatibus! Magnam doloremque unde sapiente. Voluptatum non earum sed sunt veritatis dolor harum molestiae, veniam cum atque.</p>
    <button>Save</button>
`;