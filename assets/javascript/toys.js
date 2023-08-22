import {
    obtenerObjetosJugueteria,
    crearCardToys
} from "./funcionesExport.js"

const botonBuscar = document.getElementById("boton-buscar");

// INICIO DEL FETCH//
fetch("https://mindhub-xj03.onrender.com/api/petshop")
    // respuesta en caso de ser exitosa la  promise//
    .then(respuesta => respuesta.json())
    .then(data => {// array de objetos con juegueteria, y farmacia//
        const listaDejuguetes = obtenerObjetosJugueteria(data)

        crearCardToys(listaDejuguetes)

        botonBuscar.addEventListener("click", () => {
            ocultarTarjetasToys()

            const resultadoTarjetasFiltradas = filtroPorNombreInput(listaDejuguetes)
            crearCardToys(resultadoTarjetasFiltradas)
        })
    })
    .catch(error => console.log(error))
// recibe  un REJECT en caso de  fallo en la promise//



// FILTRO POR INPUT BUSCADOR//

// elimina tarjetas//
function ocultarTarjetasToys() {

    const contenedorCard = document.getElementById("card")

    contenedorCard.innerHTML = "";
}


//filtro por producto//
function filtroPorNombreInput(arrayDeNombres) {
    const inputBuscar = document.getElementById("input-buscar");

    const filtro = arrayDeNombres
        .filter(juguete => juguete.producto.trim().toLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
    if (filtro.length === 0) {
        return arrayDeNombres
    }
    else {
        return filtro
    }

}