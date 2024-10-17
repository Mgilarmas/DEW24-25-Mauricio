// function startGame(){
//     setInterval(createBrick, 1000) 
// }

// function createBrick(){
//     let container = document.getElementById("game__container");
//     // let containerChildrens = document.getElementById("brick__container").length;
//     container.innerHTML += `<div id="brick__container" onclick="remove(this)"><img src="images/brick.jpg" alt="Brick"></div>`

//     // if(containerChildrens > 5){
//     //     stop;
//     // }
// }

// function remove(br) {
//     let brick = br;

//     brick.remove();
// }


function startGame() {
    setInterval(createBrick, 1000)
}


document.addEventListener('DOMContentLoaded', function() {
    let gameContainer = document.getElementById('game__container'); // Contenedor donde se mostrarán los ladrillos
    let currentX = 0; // Posición X inicial para los ladrillos
    const brickWidth = 50; // Ancho del ladrillo puesto por nosotros


    
    // Función para crear un ladrillo
    function createBrick() {
        // Verifica si hay espacio suficiente en el contenedor
        if (currentX + brickWidth <= gameContainer.clientWidth) {
            let brick = document.createElement('div'); // Crea un nuevo div
            brick.className = 'brick'; // Asigna la clase "brick
            // Establece las propiedades de estilo
            brick.style.left = currentX + 'px'; // Establece la posición X actual
            brick.style.top = (gameContainer.clientHeight / 2 - brickWidth / 2) + 'px'; // Centra verticalmente
            currentX += brickWidth; // Actualiza la posición X para el próximo ladrillo //removeChild
            // Añade el ladrillo al contenedor
            gameContainer.appendChild(brick);              
            // Maneja el clic en el ladrillo
            brick.addEventListener('click', function() {
                gameContainer.removeChild(brick); // Elimina el ladrillo al hacer clic
            });
        } else {
            // Reinicia la posición X si se alcanzó el borde derecho
            currentX = 0;
        }
    }

    // Crear un ladrillo cada segundo
    setInterval(createBrick, constructionTime);
});