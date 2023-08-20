const contenedorCard = document.getElementById("contenedor-card");

function crearCardToys(listaDejuguetes) {
    let card = "";
    for (const jueguete of listaDejuguetes) {
        card += `
            <div class="card" style="width: 18rem;">
                <img src="../image/juguete-para-mascotas.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver producto</a>
                </div>
              </div> `

    }
    contenedorCard.innerHTML = card;
}
// INICIO DEL FETCH//
fetch("https://mindhub-xj03.onrender.com/api/petshop")
    // respuesta en caso de ser exitosa la  promise//
    .then(respuesta => respuesta.json())
    .then(data => {// array de objetos con juegueteria, y farmacia//

        const listaDejuguetes = obtenerObjetosJugueteria(data)
        // devuelve un array de objetos  de jugueteria//
    })
    .catch(error => console.log(error))
// recibe  un REJECT en caso de  fallo en la promise//



function obtenerObjetosJugueteria(array) {
    return array.filter(objeto => objeto.categoria == "jugueteria")
    //  filtro  el array  por la categoria "jugueteria"
}