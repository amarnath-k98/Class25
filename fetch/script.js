let main = document.getElementById("main");
let cardList = document.createElement("div");
cardList.setAttribute("class","cardList")

function createNewCard(value) {
    cardList.innerHTML += `
    <div class="card">
    <img class="card-image" src=${value.flags.png} alt=${value.name.common}/>
    <div class="card-name">${value.name.common}</div>
    </div>
    `
}

function renderAllCard(countryArr){
    console.log(countryArr)
    countryArr.map((value)=>{
        createNewCard(value)
    })
}

main.append(cardList);

async function get(){
    try {
        let res = await fetch("https://restcountries.com/v3.1/independent?status=true",{
            method:"GET"
        })
        let data = await res.json()
        renderAllCard(data)
    }catch(err){
        console.log(err)
    }
}
get();

// fetch("https://restcountries.com/v3.1/independent?status=true",{
//     method:"GET"
// }).then((res)=>res.json())
// .then((data)=>renderAllCard(data))
// .catch((err)=>console.log(err))

