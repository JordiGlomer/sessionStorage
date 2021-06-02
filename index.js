//sessionStorage.setItem('miPerro', 'Cooper');

/*function guardarDatos() {
    sessionStorage.nombre = document.getElementById("nombre").value;
    sessionStorage.password = document.getElementById("password").value;
}

function recuperarDatos() {
    if ((sessionStorage.nombre != undefined) && (sessionStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + sessionStorage.nombre + " Password: " + sessionStorage.password;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}*/

addNombre = () => {

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    sessionStorage.setItem(nombre, apellido); //ó sessionStorage[producto]=precio
    mostrarDatos(nombre);

};

mostrarDatos = () => {

    let datosDisponibles = document.getElementById('datosDisponibles');
    datosDisponibles.innerHTML = '';

    for (let i = 0; i < sessionStorage.length; i++) {

        let nombre = sessionStorage.key(i);
        let apellido = sessionStorage.getItem(nombre);
        datosDisponibles.innerHTML += '<div>' + nombre + '  ' + apellido + '</div>';

    }

};

limpiarVista = () => {

    let datosDisponibles = document.getElementById('datosDisponibles');
    datosDisponibles.innerHTML = 'Limpiada vista. Los datos permanecen.';

};

borrarTodo = () => {
    sessionStorage.clear();
    mostrarDatos();
};

/* Método o propiedad de sessionStorage y descripción:

//// sessionStorage.setItem('clave', 'valor');

Guarda la información valor a la que se podrá acceder invocando a clave. Por ejemplo clave puede ser nombre y valor puede ser Francisco.

//// sessionStorage.getItem('clave')

Recupera el value de la clave especificada. Por ejemplo si clave es nombre puede recuperar “Francisco”.

//// sessionStorage[clave]=valor

Igual que setItem

//// sessionStorage.length

Devuelve el número de items guardados por el objeto sessionStorage actual

//// sessionStorage.key(i)

Cada item se almacena con un índice que comienza por cero y se incrementa unitariamente por cada item añadido. Con esta sintaxis rescatamos la clave correspondiente al item con índice i.

//// sessionStorage.removeItem(clave)

Elimina un item almacenado en sessionStorage

//// sessionStorage.clear()

Elimina todos los items almacenados en sessionStorage, quedando vacío el espacio de almacenamiento. */