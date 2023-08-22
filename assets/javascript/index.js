import {
    agregar,
    eliminarObj,
    caruselPost,
    postCarrito,
  } from "../javascript/modulosIndex.js";
  let caruselObj = document.getElementById("carouselDeObjetos");
  
  fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      console.log(respuesta);
      let pocoStock = respuesta.filter(
        (obj) => obj.disponibles <= 5 && obj.disponibles > 0
      );
      let ordenadosStock = pocoStock.sort(
        (a, b) => a.disponibles - b.disponibles
      );
      let arrayNombres = respuesta.map((obj) => obj.producto);
      console.log(arrayNombres);
      caruselPost(ordenadosStock, caruselObj);
  
      //--------------- botones-------------------
      // const decrementButtons = document.querySelectorAll(".decrement");
      // const incrementButtons = document.querySelectorAll(".increment");
      // const quantityElements = document.querySelectorAll(".quantity");
      const addCarrito = document.querySelectorAll(`.addCarrito`);
      const carritoPestania = document.getElementById(`carritoPestania`);
      let storage = JSON.parse(localStorage.getItem("carrito"));
      let arrayCarrito = storage ? storage : [];
      postCarrito(arrayCarrito, carritoPestania);
  
      addCarrito.forEach((button) => {
        button.addEventListener(`click`, (e) => {
          e.preventDefault();
          let objeto = e.target.dataset._id;
          agregar(respuesta, objeto, arrayCarrito);
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
    .catch((error) => console.error("surgio un error", error));