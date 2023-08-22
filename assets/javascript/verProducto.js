const containerDetails = document.getElementById('containerDetail')
const details = location.search
const elementUrl = new URLSearchParams(details)
const elementId = elementUrl.get('id')
const url = "https://mindhub-xj03.onrender.com/api/petshop";
fetch(url)  
.then(response => response.json())
.then(data => {
    const element = data.find(element => element._id == elementId)
    renderDetails(element)
}).catch(error => console.log(error))
;

function renderDetails(element) {
    console.log(element.producto)
    const div = document.createElement("div")
    div.classList.add("card");
    div.innerHTML = `
    <div>
    <figure class="figure">
      <div class="card-body-pord mh-100">
         <img src="${element.imagen}" id="img-detail" class="figure-img img-fluid rounded " alt="Image-Card">
      </div>
      <div id="textCardPord">
        <figcaption> <h5 class="card-title">${element.producto}</h5> </figcaption>
        <figcaption><h6 class="card-text">Categoria: ${element.categoria}</h6></figcaption>
        <figcaption><h6 class="card-text">Descripcion: ${element.descripcion}</h6></figcaption>
        <figcaption> <h5 class="card-text ">Precio: $${element.precio}</h5></figcaption>
        <figcaption>  <a href="../../index.html" class="btn btn-outline-success"> Back</a></figcaption>
      </div>
    </figure>
  </div>
    `
    containerDetails.appendChild(div)
  }