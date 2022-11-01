let nombre;
let apellido;
const precioTicket = 200;
let cantidad = 0;
let total=0;
let descuento = 1;
let categ=0;
let email;

document.getElementById("totales").innerHTML = " Total a Pagar: $ " + total;
console.log(total);

function asignar(){
nombre = document.getElementById("nomb").value;
apellido = document.getElementById("apell").value;
email = document.getElementById("correo").value;
console.log(nombre);
console.log(apellido);
console.log(email);
}



function calcular(){
console.log(document.getElementById("inputCategoria").value);
categ = document.getElementById("inputCategoria").value;    
cantidad = parseInt(document.getElementById("canti").value);
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
console.log(total);
}

function borrar(){    
    total=0;
    nombre="";
    apellido="";
    cantidad=0;
    email="";
    console.log(total);
    document.getElementById("totales").innerHTML = " Total a Pagar: $ " + total;
    document.getElementById("canti").value= 0;
    document.getElementById("inputCategoria").value=0;
    document.getElementById("nomb").value="";
    document.getElementById("apell").value="";
    document.getElementById("correo").value="";
}

function resumen(){
    document.getElementById("comprador").innerText = "Datos del Comprador: " + nombre +" "+ apellido;
    document.getElementById("compMail").innerText = "e-mail: " + email;
    document.getElementById("cantick").innerHTML = "Cantidad de Tickets: " + cantidad;
    document.getElementById("descuento").innerText = "Tarifa al: " + descuento*100 + "%";
    document.getElementById("totalRes").innerText = "Total a Pagar: $ " + total;
}


