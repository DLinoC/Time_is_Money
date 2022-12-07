$(document).ready(function(){

    let listados = []
    cargarStorage()
    let invertir = false;
    const tbody = document.getElementById('cuerpito'), cabeceras = document.querySelectorAll('.cabecera')
function ordenar( inversa ,indice ){
    const parametrosValidos = ['nombre','apellido','correo','data', 'id','bruto', 'neto']
    if(inversa === true){
        if (typeof listados[0][parametrosValidos[indice]] === "number"){
            return listados.sort((a,b) => a[parametrosValidos[indice]] - b[parametrosValidos[indice]])    
        } else {
            return listados.sort((a,b) => a[parametrosValidos[indice]].localeCompare(b[parametrosValidos[indice]]))
        }
    } else {
        if (typeof listados[0][parametrosValidos[indice]] === "number"){
            return listados.sort((a,b) => b[parametrosValidos[indice]] - a[parametrosValidos[indice]])    
        } else {
            return listados.sort((a,b) => b[parametrosValidos[indice]].localeCompare(a[parametrosValidos[indice]]))
        }
    }

}

function cargarStorage() {
    if(!localStorage.getItem('chacales')) return;
    listados = JSON.parse(localStorage.getItem('chacales'));
}

    function pintarTabla( array ) {
        tbody.innerHTML="";for(const e in array){const n=document.createElement("tr");for(const t in array[e]){if("cargo"===t)continue;if("data"===t){const a=document.createElement("td");array[e][t].innerHTML='<a href="session09.html">Ingrese aqui</a>',a.innerHTML=array[e][t],a.addEventListener("click",(n=>{localStorage.setItem("id",JSON.stringify(array[e].id))})),n.append(a);continue}const a=document.createElement("td");a.textContent=array[e][t],n.append(a)}tbody.append(n)}
    }

    pintarTabla(listados)

    cabeceras.forEach( (titulo, index) => {
        titulo.addEventListener('click', () => {

            let arrordenado;
            if(invertir === true) {
                arrordenado  = ordenar(invertir,index);
                invertir = false
            } else {
                arrordenado = ordenar(invertir, index);
                invertir = true
            }

            pintarTabla(arrordenado)
        })
    })

})


