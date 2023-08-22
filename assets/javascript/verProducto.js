// /* let $hideText = document.getElementById("hideText")

// let $hideTextbtn= document.getElementById("hideTextbtn")

// $hideTextbtn.addEventListener("mouseover", ocultarboton)

// function ocultarboton (){
//     $hideText.classList.toggle("show");
// } */

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const apiUrl = `https://mindhub-xj03.onrender.com/api/petshop/`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const product = data.find(item => item._id === productId);
        const container = document.getElementById("containerDetail");
        container.innerHTML = verProducto(product);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

function verProducto(data) {
    return `
    <div class="d-flex justify-content-center align-items-center w-30 col-sm-5">
      <figure class="figure">
        <div class="card-body-pord mh-100">
           <img src="${data.imagen}" class="figure-img img-fluid rounded" alt="${data.producto}">
        </div>
        <div id="textCardPord">
          <figcaption><h6 class="card-text text-start ">Descripcion: ${data.descripcion}</h6></figcaption>
          <figcaption>  <a href="./pharmac.html" class="btn btn-outline-success">Back</a></figcaption>
        </div>
      </figure>
    </div>`;
}
