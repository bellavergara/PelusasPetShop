// /* let $hideText = document.getElementById("hideText")

// let $hideTextbtn= document.getElementById("hideTextbtn")

// $hideTextbtn.addEventListener("mouseover", ocultarboton)

// function ocultarboton (){
//     $hideText.classList.toggle("show");
// } */

const url = "https://mindhub-xj03.onrender.com/api/petshop";

fetch(url)  
.then(response => response.json())
.then(data => {
    mostrarFarmacia(data);
});

function mostrarFarmacia(array){
    const container = document.getElementById("textCard");
    const farmacos = array.filter(element => element.categoria === "farmacia");
    let html = "";
    farmacos.forEach(element => {
        html += `<div class="card" style="width: 18rem;">
        <div class="card-body-datails mh-100 rounded-start-1 figure-img img-fluid rounded p-2">
        <img src="${element.imagen}" id="${element._id}" class="figure-img img-fluid rounded p-2" style="height: 18rem; "alt="${element.producto}">
        </div>
        <div class="card-body">
        <div id="textCard" class="d-flex flex-column">
        <figcaption> <h5 class="card-title">${element.producto}</h5> </figcaption>
        <figcaption> <h6 class="card-text">Disponibles: ${element.disponibles} </h6></figcaption>
        <figcaption> <h5 class="card-text ">Precio:$${element.precio}</h5></figcaption>
        </div>
        <button style="width: 15rem;" id="hideTextbtn"> </button> 
        <hr style="color: transparent;">     
        <span class="ocultar" id="hideText">
        <div class="d-flex justify-content-around">
        <a href="#" class="btn btn-outline-success ">Comprar</a>
        <a href="../html/verProducto.html" class="btn btn-outline-success ">Ver <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
        </svg></a>
        </div>
        </span>
        </div>
        </div>`;
    });
   
    //descripcion
    // <figcaption><h6 class="card-text">${element.descripcion}</h6></figcaption>
    container.innerHTML = html;
}