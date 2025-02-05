let amigos = []; 
let amigo = document.getElementById("amigo"); 

// Función que agrega nombres al array amigos
function agregarAmigo(){

    if ( validarNombre() ){
        amigos.push(amigo.value);
    } 

    amigo.value = "";  // Limpiar el campo de texto

}


//Función que valida que el campo no este vacio
function validarNombre(){

    if(amigo.value.trim() == ""){
        alert( "Por favor, inserte un nombre" );
    } else {
        return true;
    }
}
