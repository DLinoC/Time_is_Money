$(document).ready(function(){
    class Empleado {
        constructor(nombre, apellido, correo, cargo) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.correo = correo;
            this.cargo = cargo;
            this.data = `<a href="data.html">Ingrese aqui</a>`
        }

        // Métodos
        sueldoBruto() {
            return sueldos[this.cargo];
        }
        sueldoNeto() {
            return this.sueldoBruto() * 0.8;
        }
    }

/***************************** VARIABLES ****************************/
    const sueldos = {
        jefe: 5000,
        analista: 4000,
        programador: 3000,
        soporte: 2000,
        asistente: 1500,
    }

    let listaEmpleados = [],  copialista = []


    function guardarStorage() {
        localStorage.setItem('chacales', JSON.stringify(listaEmpleados))
    }
    function cargarStorage() {
        if (!localStorage.getItem('chacales')) return;
        listaEmpleados = JSON.parse(localStorage.getItem('chacales'));
    }


    $("#form").submit(function(e){
        e.preventDefault();
                    
        if (!$("#form")[0].checkValidity()) {
            e.stopPropagation()
            $('#form')[0].classList.add('was-validated')

        }else{
            const nom = $('#nombre')[0].value;
            const ape = $('#apellido')[0].value;
            const mail = $('#email')[0].value;
            const car = $('#cargo')[0].value;
            cargarStorage()
            let encontrados = listaEmpleados.filter((empleado => empleado['correo'] === mail)) 

            if(encontrados.length > 0) {
                alert('coloca un correo disinto')
            } else {
                $('#boton')[0].setAttribute('data-bs-toggle','modal');

                const myModal = new bootstrap.Modal('#exampleModal', {
                    keyboard: false
                })
                let ids;
                if(listaEmpleados.length <= 0) {
                     ids = 0;
                } else {
                    for( index in listaEmpleados) {
                       ids = listaEmpleados[index].id
                    }
                    ids++
                }
                $("#form")[0].reset(),$("#boton")[0].removeAttribute("data-bs-toggle"),$("#form")[0].classList.remove("was-validated");
                const trabajador = new Empleado(nom, ape, mail, car);
                trabajador.id = ids;
                trabajador.bruto = trabajador.sueldoBruto();
                trabajador.neto = trabajador.sueldoNeto()
                listaEmpleados.push(trabajador);
                guardarStorage()     
                myModal.show()
            }


        }
    })
})








