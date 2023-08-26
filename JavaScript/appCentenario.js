/*Variables*/
const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelantar');
const btnRetrocede = document.querySelector('#btn-retroceder');
const galeriaSection = document.querySelector('#galeria');
const contenedorPrincipal = document.querySelector('#contenedorPrincipal');
const imagenActiva = document.querySelector('#imagen-activa');
let indiceImagen = 0;

const abrirGaleria = document.querySelector('#mostrar-galeria');
const imagenesArray = Array.from(galeriaSection.querySelectorAll('img'));

/*Abrir contenedorPrincipal*/
abrirGaleria.addEventListener ('click', () => {
    contenedorPrincipal.style.display = 'flex';
});
/*Cerrar contenedorPrincipal*/
btnCierra.addEventListener('click', () => {
    contenedorPrincipal.style.display = 'none';
});
/*Adelanta imagen*/
const adelanteImagen = () => {
    
    imagenActiva.src = imagenesArray[indiceImagen].src;
    indiceImagen++;
}
btnAdelanta.addEventListener('click',adelanteImagen);