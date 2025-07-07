function calc(operation,num1,num2){
    if (operation == "add"){
        console.log("add",num1 + num2)
    }else if (operation == "sub"){
         console.log("sub",num1 - num2)
    }else{
        console.log("please select [add,sub]")
    }
}
calc("add",15,25)


// return fn
var arr = () =>{
    console.log("Oras")
}
arr();

// anonymous fn
var str = function (){
    console.log("Amar")
}
str();

//IIFE fn
(() => {
    console.log("Amarnath")
})
();

//task
let object = [
  {
    name: "sanjay",
    subjects: ["phy", "maths", "chemistry"],
    marks: [80, 40, 20],
  },
  {
    name: "moorthy",
    subjects: ["phy", "maths", "chemistry"],
    marks: [20, 30, 80],
  },
];

(function(){
    let totalMark = 0;
    for (let i=0; i<object.length;i++){
        let markArr = object[i].marks;
        for (let j=0; j<markArr.length; j++){
            totalMark = totalMark + markArr[j];
        }
        console.log("Total marks for ",object[i].name, totalMark);
        totalMark = 0;
    }

})();