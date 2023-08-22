import {
    obtenerObjetosJugueteria,
    crearCardToys,
} from "./funcionesExport.js"

// INICIO DEL FETCH//
fetch("https://mindhub-xj03.onrender.com/api/petshop")
    // respuesta en caso de ser exitosa la  promise//
    .then(respuesta => respuesta.json())
    .then(data => {// array de objetos con juegueteria, y farmacia//
        const listaDejuguetes = obtenerObjetosJugueteria(data)
        crearCardToys(listaDejuguetes)
    })
    .catch(error => console.log(error))
// recibe  un REJECT en caso de  fallo en la promise//