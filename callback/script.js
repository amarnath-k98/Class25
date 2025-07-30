// function abc(name) {
//     console.log("abc is called", name);
// }

// abc("Amar");
// abc(9);
// let valuea = 15;
// let valueb = valuea;
// console.log(valueb);

// let xyz =abc;
// xyz("magesh");

// function greetMe(cdk) {
//     console.log("greetme is called");
//     cdk();
// }

// function gbc(num){
//     console.log ("gbc is callled",num);
// }
// const number = 10;
// gbc(number);

// greetMe(()=> {
//     gbc(number);
// });

// console.log("............................");

// function task1(cb) {
//     console.log("task1 start")
//     setTimeout(() => {
//         console.log("task1 end");
//         cb();
//     },2000);
// }
// function task2(cb) {
//     console.log("task2 start")
//     console.log("task2 end")
//     cb();
// }
// function task3(cb) {
//     console.log("task3 start")
//     setTimeout(() => {
//         console.log("task3 end");
//         cb();
//     },3000);
// }
// function task4(cb) {
//     console.log("task4 start")
//     setTimeout(() => {
//         console.log("task4 end");
//         cb();
//     },2000);
// }
// function task5(cb) {
//     console.log("task5 start")
//     setTimeout(() => {
//         console.log("task5 end");
//     },1000);
// }

// task1(()=>{
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 task5();
//             });
//         });
//     });
// });




// let allNames = [];

// function verifyData(username) {
//     return new Promise ((res, rej) =>{
//         console.log("normalizeName : ",username)
//         setTimeout(()=>{
//             if(allNames.includes(username)){
//                rej({error:"username already taken"}) 
//             } else {
//                 res({status:"success", response:"User verified sucessfully", username:username})
//             }
//         }, 2000)
//     })
// }

// function updateToDB(username){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(allNames.length>=5){
//                 rej({error:"DB limit reached"})
//             }else{
//                 allNames.push(username)
//                 res({status:"succes",
//                     response:"User added to DB",
//                     data:allNames
//                 })
//             }
//         },2000)
//     })
// }
// function normalizeData(name){
//     return name.toLowerCase();
// }
// async function updateUserToDB(name) {
//     try{
//         let normalizedUsername = normalizeData();
//         let result = await verifyData(normalizedUsername);
//         console.log("verify",result)
//         let dbResponce = await updateToDB(result.username)
//         console.log("DB",dbResponce)
//     }catch(err){
//         console.log(err)
//     }
// }
// updateUserToDB("amar");




