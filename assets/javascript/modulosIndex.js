export function agregar(array,id,carrito) {
    let verificar = array.find(obj => id === obj._id)
    if (!carrito.find( obj=> id === obj._id) ){ 
        carrito.push(verificar)
    }
}

export function objetoEnCarrito(obj) {
    let cantidad = "1"
    let precio = obj.precio * cantidad

      const elementoCarrito = document.createElement('div');
      elementoCarrito.classList.add('lineaCarrito', 'p-2', 'd-flex', 'justify-content-between', 'flex-row');
    
      const divIzquierdo = document.createElement('div');
      divIzquierdo.classList.add('col-8');
    
      const nombreProducto = document.createElement('p');
      nombreProducto.classList.add('m-0');
      nombreProducto.textContent = obj.producto;
    
      const precioProducto = document.createElement('p');
      precioProducto.classList.add('m-0');
      precioProducto.textContent = `$ ${precio}`;
    
      divIzquierdo.appendChild(nombreProducto);
      divIzquierdo.appendChild(precioProducto);
    
      const divDerecho = document.createElement('div');
    
      const divBotones = document.createElement('div');
      divBotones.classList.add('d-flex');
      
     

    
      const botonEliminar = document.createElement('button');
      botonEliminar.setAttribute("data-_id",obj._id)
      botonEliminar.classList.add('btn', 'btn-outline-danger', 'btnCarritoEliminar');
      botonEliminar.textContent = 'Eliminar';
    
      divDerecho.appendChild(divBotones);
      divDerecho.appendChild(botonEliminar);
    
      elementoCarrito.appendChild(divIzquierdo);
      elementoCarrito.appendChild(divDerecho);
    
      return elementoCarrito;
} 
export function postCarrito(carrito, contenedor) {
  contenedor.innerHTML = "";
  carrito.forEach((obj) => {
    let contenido = objetoEnCarrito(obj);
    contenedor.appendChild(contenido);
  });
}

export function eliminarObj(carrito, objelm) {
  let objetoAEliminar = carrito.filter((obj) => obj._id !== objelm);
  console.log(objetoAEliminar);
  return objetoAEliminar;
}

export function caruselPost (array,cont) {
    for(let i = 0; i < 4; i++) {
        const obj = array[i];
        if (i === 0) {
            cont.innerHTML += postPocoStockPrimero(obj)
            
        }else{
            cont.innerHTML += postPocoStock(obj)
        }
    }
}
function postPocoStockPrimero (array) {
    return`<div class="carousel-item active ">
         <div class="d-flex justify-content-center col-12" >
           <div  class="d-flex justify-content-center col-12 col-sm-8 col-lg-7 col-xl-6 objPrueba corner-ribbon">
             <div class="d-flex justify-content-center col-10 corner-ribbon__inner">
               <div class="corner-ribbon__ribbon">
                 <p>Ultimos!</p>
               </div>
             </div>
             <div class="d-flex flex-lg-row col-12 radius shadow-lg flex-column" style="background-color: white;">
               <div style="background-image: url('${array.imagen}'); background-size: cover; background-position: center; border-radius: 15px 0 0 15px; min-height: 22rem;" class="col-12 col-lg-7">
               </div>
               <div class="col-12 col-lg-5 d-flex flex-column justify-content-between p-2">
                 <p class="fw-bold tituloCard">${array.producto}</p>
                 <p>${array.producto}</p>
                 <p>apurate que quedan pocos!</p>
                 <div class="d-flex justify-content-between align-items-center">
                   <p class="m-0 fw-bold">$ ${array.precio}</p>
                   <a class="btn btn-success addCarrito" data-_id = "${array._id}" href="">Comprar</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>`
}
function postPocoStock (array) {
    return`<div class="carousel-item ">
         <div class="d-flex justify-content-center col-12" >
           <div  class="d-flex justify-content-center col-12 col-sm-8 col-lg-7 col-xl-6 objPrueba corner-ribbon">
             <div class="d-flex justify-content-center col-10 corner-ribbon__inner">
               <div class="corner-ribbon__ribbon">
                 <p>Ultimos!</p>
               </div>
             </div>
             <div class="d-flex flex-lg-row col-12  radius shadow-lg flex-column" style="background-color: white;">
               <div style="background-image: url('${array.imagen}'); background-size: cover; background-position: center; border-radius: 15px 0 0 15px; min-height: 22rem;" class="col-12 col-lg-7">
               </div>
               <div class="col-12 col-lg-5 d-flex flex-column justify-content-between p-2">
                 <p class="fw-bold tituloCard">${array.producto}</p>
                 <p>Seccion: ${array.categoria}</p>
                 <p>Tipo de producto: ${array.producto}</p>
                 <p>apurate que quedan pocos!</p>
                 <div class="d-flex justify-content-between align-items-center">
                   <p class="m-0 fw-bold">$ ${array.precio}</p>
                   <a class="btn btn-success addCarrito" data-_id = "${array._id}" href="">Comprar</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>`
}