import {agregar, objetoEnCarrito,caruselPost} from "./modulosIndex.js"
let caruselObj = document.getElementById("carouselDeObjetos")

fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        console.log(respuesta);
        let pocoStock = respuesta.filter(obj => obj.disponibles <= 5 && obj.disponibles > 0)
        let ordenadosStock = pocoStock.sort((a,b) => a.disponibles - b.disponibles)
        let arrayNombres = respuesta.map(obj => obj.producto)
        console.log(arrayNombres);
        caruselPost(ordenadosStock,caruselObj)
        
        //--------------- botones-------------------
const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');
const quantityElements = document.querySelectorAll('.quantity');
const addCarrito = document.querySelectorAll(`.addCarrito`)
const carritoPestania = document.getElementById(`carritoPestania`)
let arrayCarrito = []
decrementButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityElements[index].textContent);
    if (currentQuantity > 1) {
      quantityElements[index].textContent = currentQuantity - 1;
    }
  });
});

incrementButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityElements[index].textContent);
    quantityElements[index].textContent = currentQuantity + 1;
  });
});

addCarrito.forEach(button => {
    
    button.addEventListener(`click` , (e)=>{
        e.preventDefault()
        let objeto = e.target.dataset._id
        agregar(respuesta,objeto,arrayCarrito)
        postCarrito(arrayCarrito,carritoPestania) 
    })
})
function eliminarObj(carrito,objelm) {
    let objetoAEliminar = carrito.find(obj => obj._id !== objelm)
    return objetoAEliminar
    
}
function postCarrito(carrito,contenedor) {
    contenedor.innerHTML = ""
    carrito.forEach(obj => {
        console.log(objetoEnCarrito(obj)); 
        contenedor.innerHTML += objetoEnCarrito(obj)
        
    })
}


let btnEliminar = document.getElementsByClassName("btnCarritoEliminar")
console.log(btnEliminar);
btnEliminar.forEach((button=>{
    button.addEventListener(`click`, (e) =>{
        let eliminarObjetos = e.target.dataset._id
        postCarrito(eliminarObj(arrayCarrito,eliminarObjetos),carritoPestania) 
        console.log(arrayCarrito);
    })
}))


    })
.catch(error => console.error("surgio un error", error))


