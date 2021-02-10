/**
 * TAREA 2 - SCALAB - MASTER JAVASCRIPT
 * REALIZADO POR: AGUSTIN OROZCO
 * 
 * Crear un objeto, agregar como sus propiedades lo siguiente:

Una propiedad de tipo arreglo llamado mascotas que incluya estos elementos: 'perros','gatos','canarios','pez','serpiente'
Una propiedad de tipo function llamada eliminarMascota, que reciba el 1 parámetro como el tipo de la mascota a eliminar
    Esta función debe buscar según el parámetro dentro del arreglo definido anteriormente llamado mascotas y eliminar el tipo de mascota
    Esta función debe retornar el arreglo actual
Tip / Ayuda: Pueden usar indexOf en el arreglo
Una propiedad de tipo function llamada eliminarUltimaMascota, que no reciba parámetros y que al ejecutarse:
    Esta función debe eliminar el tipo de mascota al final del arreglo definido anteriormente llamado mascotas
    Esta función debe retornar el arreglo actual
Una propiedad de tipo function llamada agregarMascota, que reciba el 1 parámetro como el tipo de nueva mascota a agregar
    Esta función debe agregar la nueva mascota al final del arreglo definido anteriormente llamado mascotas
    Esta función debe retornar el arreglo actual
Una propiedad de tipo function llamada contadorMascotas, que no reciba parámetros y que al ejecutarse:
    Esta función debe contar dentro del arreglo cuantos tipos de mascotas en su definición terminan en os, por ejemplo Perros termina en os
    Guardar el resultado en una variable
    La función debe retornar un string o texto, que diga En el arreglo hay 3 mascotas que terminan con 'os'
 */

 const miObjeto = {
     mascotas : ['perros', 'gatos', 'canarios', 'pez', 'serpiente'],
     //prof, acá una consulta, ¿por qué cuando llamaba a esta función y no le colocaba parámetro de mascota a eliminar, me eliminaba de igual
     //forma el último elemento? tuve que ponerle el valor por defecto undefined, y así evaluar, para que cuando fuera el argumento
     //recibido si pudiera entrar en el procedimiento
     eliminarMascota: function(mascotaEliminar = undefined) {
        let copiaArrayMascotas = this.mascotas.slice();
        if(mascotaEliminar !== undefined){
            let posicion = copiaArrayMascotas.indexOf(mascotaEliminar);
            if(posicion===-1){
                console.log("La mascota ingresada no existe, por lo que no se ha eliminado ninguna.")
            }else{
                let elementoEliminado = copiaArrayMascotas.splice(posicion,1);
            }
        }
        return copiaArrayMascotas;
     },
     eliminarUltimaMascota: function() {
        let copiaArrayMascotas = this.mascotas.slice();
        let eliminaUltimo = copiaArrayMascotas.pop();
        return copiaArrayMascotas;
     },
     agregarMascota: function(nuevaMascota) {
        let copiaArrayMascotas = this.mascotas.slice();
        let agregarMascota = copiaArrayMascotas.push(nuevaMascota);
        return copiaArrayMascotas;
     },
     contadorMascotas: function() {
        let cuenta = 0;
        this.mascotas.forEach(function (mascota, indiceMascota, arrayCompleto){
            if (mascota.slice(-2) == "os") { //acá podría evaluarse las formas de os: OS, Os, oS
                cuenta++;
            }
        });
        return `En el arreglo hay ${cuenta} mascotas que terminan con 'os'`
     }
 };


/**DADO EL SIGUIENTE OBJETO 
 * Deben generar las siguientes funciones, deben ocupar desestructuración, todos los que estan en parentesis deben venir 
 * desde la información del objeto:
 * Hacer una función que reciba el objeto trabajador y devuelva un mensaje: El trabajador (Jhon Smith) trabaja en (ACME) con cargo (QA)
 *  y le gusta (comer) y (2) más, (no tiene hijos)
 * 
 * Hacer una función que reciba el objeto trabajador y devuelva un mensaje: El trabajador (Jhon Smith) va a su trabajo en (Santiago),
 *  es (QA), en el puesto (nº 24), trabaja con (Facebook) y (Google)
*/

 const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicacion: {//acá estaba acentuada la propiedad
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {    
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],
    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null, //acá asumiré que será un número
    
}

function descripcionTrabajador({nombre="Sin Nombre", cargo="Sin Cargo", gustos=[], hijos, empresa:{datos:{nombre: nombreEmpresa = "Sin Nombre de Empresa"}}}) {
    let hijosTrabajador = "tiene "+ hijos + " hijos";
    if (hijos===null) {
        hijosTrabajador="no tiene hijos";
    }
    let mensaje = `El trabajador (${nombre}) trabaja en (${nombreEmpresa}) con cargo (${cargo}) y le gusta (${gustos[0]}) y (${gustos.length-1}) más, (${hijosTrabajador})`
    console.log(mensaje);
}

//la propiedad objeto descripcion del objeto trabajador tenía acento, se lo quité!
//fue un poco complejo llegar a esa desestructuración, pero entretenida... igual que en la función de arriba
function descripcionTrabajoTrabajador({nombre = 'Sin Nombre', cargo= 'Sin Cargo', empresa:{ubicacion:{comuna='Sin Comuna', puesto='Sin puesto'}, clientes=[]}}){
    let clientesTrabajador = "";
    if (clientes.length===0) {
        clientesTrabajador="No tiene clientes";
    }else if(clientes.length===1){
        clientesTrabajador = "("+clientes[0]+")";
    }else{
        //acá hago el forEach es para evaliar cuando separar los elementos por una "," y cuando se coloque el último sea antepuesto un "y"
        clientes.forEach(function (cliente, indiceCliente, clientes){
            if (indiceCliente === clientes.length-1){
                clientesTrabajador = clientesTrabajador + " y " + "("+cliente+")";
            }else if(indiceCliente===0){
                clientesTrabajador = clientesTrabajador + "("+cliente+")";
            }else{
                clientesTrabajador = clientesTrabajador + ", " + "("+cliente+")";
            }
        });
    }
    let mensaje = `El trabajador (${nombre}) va a su trabajo en (${comuna}), es (${cargo}), en el puesto (${puesto}), trabaja con (${clientesTrabajador})`;
    console.log(mensaje);

}

