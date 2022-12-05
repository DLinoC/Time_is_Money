$(document).ready(function(){
    console.log('La pagina esta lista');
    // cargarStorage()

let listados = []


    // FUNCIONES:
function cargarStorage() {
    if(!localStorage.getItem('chacales')) return;
    // const {objito} = JSON.parse(sessionStorage.getItem('state'))

    listados = JSON.parse(localStorage.getItem('chacales'));
}

/************************** **********************/


/******************************************************/
    // Generarando una Tabla
    // const root = document.getElementById('root')
    // const table = document.createElement('table')
    // const thead = document.createElement('thead')
    const tbody = document.getElementById('cuerpito')
    // const trh = document.createElement('tr')

    const tabla = document.getElementById('tablita')

    function pintarTabla( array ) {
        cargarStorage()
        tbody.innerHTML =''
        console.log(listados);

            for (const key in listados) {
                const tr = document.createElement('tr');

                for (const propiedad in listados[key]) {
                    if(propiedad === 'cargo'){
                        continue;
                    }
                    if(propiedad === 'data'){

                        const td = document.createElement('td')
                        listados[key][propiedad].innerHTML= `<a href="session09.html">Ingrese aqui</a>`
                        td.innerHTML = listados[key][propiedad]
                        tr.append(td);
                        continue;
                    }
                    const td = document.createElement('td')
                    td.textContent = listados[key][propiedad]
                    tr.append(td);
                }


                tbody.append(tr)
            }
            


        


    }

    pintarTabla()
})


