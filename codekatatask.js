//codekata input and output

var str = "guvi";
console.log(str.split("").join(","));

//10
// var str = userInput[0].split("");

//   console.log(str.join(","));



// 9
//  var num = userInput[0].split("");
//  for (i = 0; i<num.length; i++){
//   console.log(num[i]);
// }


// 3
//  var num = userInput[0];
  
//   var num2 = userInput[1];

//   console.log(num);
//   console.log(num2);

//beginner
//24
// var str = userInput[0].split("");
// var num = str.sort();
// var even = "";
// var odd = "";
// for (var i=0; i<num.length; i++){
//     if(num[i] % 2 === 0){
//         even = even + num[i] + " "
//     }else{
//         odd = odd + num[i] + " "
//     }
// }
// console.log(even.trim());
// console.log(odd.trim());

// var str = "1234";
// var str1 = str.split("").sort();
// let even = [];
// let odd = [];
// for(i=0;i<str1.length; i++){
//     if (str1[i] % 2 == 0){
//         even.push(str1[i])
//     }else{
//         odd.push(str1[i])
//     }
// }
// console.log(even.join(" "))
// console.log(odd.join(" "))


//19

//   var str = userInput[0].split("");
//   let sum = 0;
//   for (let i=0; i<str.length; i++){
//       sum = sum + parseInt(str[i])
//   }
//   console.log(sum)



//16

// let x = userInput[0].split(" ");
// let a = (x[0]);
// let b = (x[1]);
// let c = (x[2]);
// let root = ((-b + (Math.sqrt(Math.pow(b,2) - (4 * a * c))))/(2*a));
// let coeeff = root.toFixed(2);
// console.log(coeeff);
// let roota = ((-b - (Math.sqrt(Math.pow(b,2) - (4 * a * c))))/(2*a));
// let coeeff2 = roota.toFixed(2);
// console.log(coeeff2);

//25
function findHCF(x, y) {
  let hcf = 1;
  let min = (x < y) ? x : y;

  for (let i = 1; i <= min; i++) {
    if (x % i === 0 && y % i === 0) {
      hcf = i;
    }
  }

  return hcf;
}

let input = "2 3"
let parts = input.split(" ").map(Number);
let result = findHCF(parts[0], parts[1]);

console.log(result);
