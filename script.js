let yesButton = document.getElementById("yesBtn");
let noButton = document.getElementById("noBtn");
let gifContainer = document.getElementById("gifContainer");
let extraGifContainer = document.getElementById("extraGifContainer");
let messageContainer = document.getElementById("messageContainer");
let buttonsContainer = document.querySelector(".buttons");
let title = document.getElementById("mainTitle");

function showGif() {
    // Cambiar título
    title.innerHTML = "¡Sabía que aceptarías, te amo mucho guapo!";
    
    // Ocultar todo el contenido inicial (gif, botones, título)
    gifContainer.style.display = "none";
    buttonsContainer.style.display = "none";
    
    // Mostrar el segundo gif con un tamaño más pequeño
    extraGifContainer.style.display = "block";
    
    // Eliminar el mensaje del contenedor (ya no es necesario)
    messageContainer.style.display = "none";
}

function showGif() {
  // Cambiar título
  title.innerHTML = "¡Sabía que aceptarías, te amo mucho guapo!";
  
  // Cambiar color del texto en el título
  title.style.color = "#FF1493"; // Color rosa fuerte (puedes cambiar este valor)

  // Ocultar todo el contenido inicial (gif, botones, título)
  gifContainer.style.display = "none";
  buttonsContainer.style.display = "none";
  
  // Mostrar el segundo gif con un tamaño más pequeño
  extraGifContainer.style.display = "block";
  
  // Eliminar el mensaje del contenedor (ya no es necesario)
  messageContainer.style.display = "none";
}

function growYesButton() {
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = parseFloat(currentSize) * 7; // Incrementar tamaño de manera progresiva

    // Ajustar el tamaño y el padding del botón para que crezca
    yesButton.style.fontSize = newSize + "px";
    yesButton.style.padding = (parseFloat(currentSize) * 5) + "px";

    // Hacer que el botón cubra toda la pantalla
    if (newSize > window.innerHeight) {
        yesButton.style.width = "100vw";  // Hacer que el botón cubra todo el ancho
        yesButton.style.height = "100vh"; // Hacer que el botón cubra toda la altura
        yesButton.style.fontSize = "5rem"; // Ajuste del tamaño del texto cuando cubra toda la pantalla
    }
}

function growYesButton() {
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = parseFloat(currentSize) * 4; // Incrementar tamaño de manera progresiva

    // Ajustar el tamaño y el padding del botón para que crezca
    yesButton.style.fontSize = newSize + "px";
    yesButton.style.padding = (parseFloat(currentSize) * 3) + "px";

    // Hacer que el botón cubra toda la pantalla
    if (newSize > window.innerHeight) {
        yesButton.style.width = "100vw";  // Hacer que el botón cubra todo el ancho
        yesButton.style.height = "100vh"; // Hacer que el botón cubra toda la altura
        yesButton.style.fontSize = "5rem"; // Ajuste del tamaño del texto cuando cubra toda la pantalla
    }
}
