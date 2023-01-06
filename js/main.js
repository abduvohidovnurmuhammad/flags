import fn from "../js/utels.js"

const {$,$$} = fn
let countries = []

async function Fetchdata(url){
    await fetch(url).then(res=>res.json()).then(data=>{countries=data; renderCards(data)})
}
 
function renderCards(data){
    data.forEach(element => {
        $('.cards').innerHTML = ""
        console.log(element);
        let card = $$("div","card d-inline-block",`
        <img class="w-100" height="200" src="${element.flags.png}" alt="">
        <h5>${element.name.official}</h5>
        `)
     
        $('.cards').appendChild(card)
    });
}


$(".search").addEventListener("input",function(e){
    let searchData = countries.filter(el=>el.name.official.toLowerCase().includes($(".search").value.toLowerCase())||(el.capital && el.capital[0].toLowerCase().includes($(".search").value.toLowerCase()) )
    )


    renderCards(searchData)
})


Fetchdata("https://restcountries.com/v3.1/all")








