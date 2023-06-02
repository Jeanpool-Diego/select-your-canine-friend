
const $app = document.getElementById("app")
const Cards = params =>{
    const src = `./image/dog${params.id}.jpg`
    return `
            <div class="main">
                <h3>${params.title}</h3>
                <p>${params.description}<h2>
                <img src="${src}">
            </div> 
    `
}
$app.innerHTML += Cards({title:"Dog Favorite", description:"cacharro de reza pequeña", id: 1})
$app.innerHTML += Cards({title:"Dog Favorite", description:"Pastor alemán", id: 2})
$app.innerHTML += Cards({title:"Dog Favorite", description:"cacharro de reza pequeña", id: 3})
$app.innerHTML += Cards({title:"Dog Favorite", description:"cacharro de reza pequeña", id: 4})
$app.innerHTML += Cards({title:"Dog Favorite", description:"cacharro de reza pequeña", id: 5})
$app.innerHTML += Cards({title:"Dog Favorite", description:"cacharro de reza pequeña", id: 6})
$app.innerHTML += Cards({title:"Dog Favorite", description:"cacharro de reza pequeña", id: 7})
$app.innerHTML += Cards({title:"Dog Favorite", description:"cacharro de reza pequeña", id: 8})
$app.innerHTML += Cards({title:"Dog Favorite", description:"cacharro de reza pequeña", id: 9})
$app.innerHTML += Cards({title:"Dog Favorite", description:"cacharro de reza pequeña", id: 10})


$app.querySelectorAll("div").forEach(div =>{
    div.addEventListener("click", () =>{
        div.classList.toggle("disable")
    })
})










