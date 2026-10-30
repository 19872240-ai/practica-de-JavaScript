let botonRojo=document.getElementById("naranja");
let botonAzul=document.getElementById("negro");
let botonVerde=document.getElementById("amarillo");

botonRojo.addEventListener("click",function(){
    document.body.style.backgroundColor="orange";
});

botonAzul.addEventListener("click",function(){
    document.body.style.backgroundColor="black";
});

botonVerde.addEventListener("click",function(){
    document.body.style.backgroundColor="yellow";
});