


fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        console.log(respuesta);
    })