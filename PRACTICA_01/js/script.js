// Función básica para cambiar el color de fondo de la página de forma aleatoria
function cambiarFondoSorpresa() {
    const colores = ['#f4f7f6', '#ffe5ec', '#d8f3dc', '#caf0f8', '#fefae0'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

// Escuchar el clic del botón para ejecutar la función
document.getElementById('btn-color').addEventListener('click', cambiarFondoSorpresa);
