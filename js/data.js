$(document).ready(function(){
let listados = []
let id;
cargarStorage()
const nombre = document.getElementById('inombre')
const apellido = document.getElementById('iapellido')
const correo = document.getElementById('imail')
const cargo = document.getElementById('cargo')
const btnmod = document.getElementById('modificar')
const btngua = document.getElementById('guardar')

let empleadodelmes=listados.filter((e=>e.id===id));
nombre.value = empleadodelmes[0].nombre;
apellido.value = empleadodelmes[0].apellido;
correo.value=empleadodelmes[0].correo,cargo.value=empleadodelmes[0].cargo;

function cargarStorage() {
    if(!localStorage.getItem('chacales')) return;
    listados = JSON.parse(localStorage.getItem('chacales'));
    if(!localStorage.getItem('id')) return;
    id = JSON.parse(localStorage.getItem('id'));
}

/*************************** EVENTOS **************************/ 
btnmod.addEventListener("click",(()=>{nombre.disabled=!1,apellido.disabled=!1,correo.disabled=!1,cargo.disabled=!1})),btngua.addEventListener("click",(()=>{nombre.disabled=!0,apellido.disabled=!0,correo.disabled=!0,cargo.disabled=!0,empleadodelmes[0].nombre=nombre.value,empleadodelmes[0].apellido=apellido.value,empleadodelmes[0].correo=correo.value,empleadodelmes[0].cargo=cargo.value,localStorage.setItem("chacales",JSON.stringify(listados))}));

})