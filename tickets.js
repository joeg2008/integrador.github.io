let nombre;
let apellido;
const precioTicket = 200;
let cantidad = 0;
let total=0;
let descuento = 1;
let categ=0;

document.getElementById("totales").innerHTML = " Total a Pagar: $ " + total;
console.log(total);

function calcular(){
console.log(document.getElementById("inputCategoria").value);
categ=document.getElementById("inputCategoria").value;    
cantidad = document.getElementById("canti").value;
if(categ==0){
    descuento=1;  
}
if(categ==1){
  descuento=0.2;  
}
if(categ==2){
    descuento=0.5;
}
if(categ==3){
    descuento=0.85;
}
console.log(cantidad);
total = cantidad*precioTicket*descuento;
document.getElementById("totales").innerHTML = " Total a Pagar: $ " + total;
}

function borrar(){    
    total=0;
    console.log(total);
    document.getElementById("totales").innerHTML = " Total a Pagar: $ " + total;
    document.getElementById("canti").value= 0;
    document.getElementById("inputCategoria").value=0;

}

