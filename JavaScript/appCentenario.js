/*Variables*/
const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelantar');
const btnRetrocede = document.querySelector('#btn-retroceder');
const galeriaSection = document.querySelector('#galeria');
const contenedorPrincipal = document.querySelector('#contenedorPrincipal');
const imagenActiva = document.querySelector('#imagen-activa');

let indiceImagen1 = 0;
let indiceImagen2 = 0;
let indiceImagen3 = 0;

const imagenesArray = Array.from(galeriaSection.querySelectorAll('img'));

const abrirGaleria1 = document.querySelector('#mostrar-galeria1');
const abrirGaleria2 = document.querySelector('#mostrar-galeria2');
const abrirGaleria3 = document.querySelector('#mostrar-galeria3');

const arrayGaleri1 = imagenesArray.slice(0,3);
const arrayGaleri2 = imagenesArray.slice(3,6);
const arrayGaleri3 = imagenesArray.slice(6,9);


/*Abrir contenedorPrincipal*/
abrirGaleria1.addEventListener ('click', () => {
    indiceImagen1 = 0;
    imagenActiva.src = arrayGaleri1[indiceImagen1].src;
    contenedorPrincipal.style.display = 'flex';
});

/*Cerrar contenedorPrincipal*/
btnCierra.addEventListener('click', () => {
    contenedorPrincipal.style.display = 'none';
});

/*Adelanta imagen*/
const adelantaImagen1 = () => {
    if (indiceImagen1 == arrayGaleri1.length - 1){
        indiceImagen1 = -1;
    }
    indiceImagen1++;
    imagenActiva.src = arrayGaleri1[indiceImagen1].src;
    console.log(arrayGaleri1[indiceImagen1]);
}
btnAdelanta.addEventListener('click',adelantaImagen1);

/*Retrocede imagen*/
const retrocedeImagen1 = () => {
    if (indiceImagen1 == 0){
        indiceImagen1 = arrayGaleri1.length;
    }
    indiceImagen1--;
    imagenActiva.src = arrayGaleri1[indiceImagen1].src;
}
btnRetrocede.addEventListener('click',retrocedeImagen1);



/*Abrir contenedorPrincipal*/
abrirGaleria2.addEventListener ('click', () => {
    indiceImagen2 = 0;
    imagenActiva.src = arrayGaleri2[indiceImagen2].src;
    contenedorPrincipal.style.display = 'flex';
});

/*Cerrar contenedorPrincipal*/
btnCierra.addEventListener('click', () => {
    contenedorPrincipal.style.display = 'none';    
});
    
/*Adelanta imagen*/
const adelanteImagen2 = () => {
    if (indiceImagen2 == arrayGaleri2.length - 1){
        indiceImagen2 = -1;
    }
    indiceImagen2++;
    imagenActiva.src = arrayGaleri2[indiceImagen2].src;
}
btnAdelanta.addEventListener('click',adelanteImagen2);

/*Retrocede imagen*/
const retrocedeImagen2 = () => {
    if (indiceImagen2 == 0){
        indiceImagen2 = arrayGaleri2.length;
    }
    indiceImagen2--;
    imagenActiva.src = arrayGaleri2[indiceImagen2].src;
}
btnRetrocede.addEventListener('click',retrocedeImagen2);



/*Abrir contenedorPrincipal*/
abrirGaleria3.addEventListener ('click', () => {
    indiceImagen3 = 0;
    imagenActiva.src = arrayGaleri3[indiceImagen3].src;
    contenedorPrincipal.style.display = 'flex';
});

/*Cerrar contenedorPrincipal*/
btnCierra.addEventListener('click', () => {
    contenedorPrincipal.style.display = 'none';    
});
        
/*Adelanta imagen*/
const adelanteImagen3 = () => {
    if (indiceImagen3 == arrayGaleri3.length - 1){
        indiceImagen3 = -1;
    }
    indiceImagen3++;
    imagenActiva.src = arrayGaleri3[indiceImagen3].src;
}
btnAdelanta.addEventListener('click',adelanteImagen3);
    
/*Retrocede imagen*/
const retrocedeImagen3 = () => {
    if (indiceImagen3 == 0){
        indiceImagen3 = arrayGaleri3.length;
    }
    indiceImagen3--;
    imagenActiva.src = arrayGaleri3[indiceImagen3].src;
}
btnRetrocede.addEventListener('click',retrocedeImagen3);
