let $hideText = document.getElementById("hideText")

let $hideTextbtn= document.getElementById("hideTextbtn")

$hideTextbtn.addEventListener("mouseover", ocultarboton)

function ocultarboton (){
    $hideText.classList.toggle("show");
}