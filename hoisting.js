// var input = "praveen";
// var inputArr = input.split("");
// console.log(inputArr);
// console.log(inputArr.join("\n"));

var str = [2,4,5,6,8];
var strArr = str.map((value,index,accArr)=> {
    console.log("value", value)
    console.log("index", index)
    console.log("accArr",accArr)
    return value * 2;
})
console.log(strArr)

