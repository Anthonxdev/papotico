const productos = ["mangos", "platano", "yautia", "arroz"]

console.log(productos)

const productos2 = productos.filter(function(palo){
    if(palo === "mangos"){
        console.log("pera")
    }
})