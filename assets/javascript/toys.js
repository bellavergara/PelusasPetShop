import {
    obtenerObjetosJugueteria,
    crearCardToys,
} from "./funcionesExport.js"

import {
    agregar,
    eliminarObj,
    postCarrito,
  } from "./modulosIndex.js";
// INICIO DEL FETCH//
fetch("https://mindhub-xj03.onrender.com/api/petshop")
    // respuesta en caso de ser exitosa la  promise//
    .then(respuesta => respuesta.json())
    .then(data => {// array de objetos con juegueteria, y farmacia//
        const listaDejuguetes = obtenerObjetosJugueteria(data)
        crearCardToys(listaDejuguetes)

        //events
        const addCarrito = document.querySelectorAll(`.addCarrito`);
        const carritoPestania = document.getElementById(`carritoPestania`);
        let storage = JSON.parse(localStorage.getItem("carrito"));
        let arrayCarrito = storage ? storage : [];
        postCarrito(arrayCarrito, carritoPestania);
    
        addCarrito.forEach((button) => {
          button.addEventListener(`click`, (e) => {
            e.preventDefault();
            let objeto = e.target.dataset._id;
            agregar(listaDejuguetes, objeto, arrayCarrito);
            postCarrito(arrayCarrito, carritoPestania);
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
          });
        });
    
        let inputs = document.getElementsByClassName("quantity");
        carritoPestania.addEventListener(`click`, (e) => {
          for (let input of inputs) {
            if (e.target === input) {
              console.log("Clic en input");
              return;
            }
          }
          let eliminarObjetos = e.target.dataset._id;
          let nuevoArray = eliminarObj(arrayCarrito, eliminarObjetos);
          postCarrito(nuevoArray, carritoPestania);
          localStorage.setItem("carrito", JSON.stringify(nuevoArray));
          arrayCarrito = nuevoArray;
        });
        let finCompra = document.getElementById("compraFin")
        finCompra.addEventListener("click", ()=>{
            let arrayFin = []
            carritoPestania.innerHTML = ""
            localStorage.setItem("carrito", JSON.stringify(arrayFin));
            arrayCarrito = arrayFin
        })

        
    })
    .catch(error => console.log(error))
// recibe  un REJECT en caso de  fallo en la promise//