const $button =document.getElementById("buttons")
const button =params =>{
   return `
   <button>${params.name}</button>
`


}

$button.innerHTML +=button({name:"seleccionar"})
$button.innerHTML +=button({name:"eliminar"})



