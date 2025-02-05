let amigos = []; 
let amigo = document.getElementById("amigo"); 
let listaAmigos = document.getElementById("listaAmigos"); 

// Función que agrega nombres al array amigos
function agregarAmigo(){

    if ( validarNombre() ){
        amigos.push(amigo.value); // Agregar amigo al array
        crearListaAmigos(); // Crear la lista amigos en pantalla
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

// Crear lista de amigos en el HTML
function crearListaAmigos(){

    listaAmigos.innerHTML="";

    for ( let i = 0; i <= amigos.length -1; i++  ){

        let amigo = document.createElement( "li"); // Se crea la etiqueta li

        amigo.textContent = amigos[i]; // Se le asigna a la etiqueta li

        listaAmigos.appendChild(amigo); // Se añade la etiqueta li a la lista 
        
    }
}
