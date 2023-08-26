/*Variables*/
const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelantar');
const btnRetrocede = document.querySelector('#btn-retroceder');

const galeriaSection1 = document.querySelector('#galeria1');
const galeriaSection2 = document.querySelector('#galeria2');
const galeriaSection3 = document.querySelector('#galeria3');

const imagenesArray1 = Array.from(galeriaSection1.querySelectorAll('img'));
const imagenesArray2 = Array.from(galeriaSection2.querySelectorAll('img'));
const imagenesArray3 = Array.from(galeriaSection3.querySelectorAll('img'));

const contenedorPrincipal = document.querySelector('#contenedorPrincipal');
const imagenActiva = document.querySelector('#imagen-activa');

let indiceImagen1 = 0;
let indiceImagen2 = 0;
let indiceImagen3 = 0;


const abrirGaleria1 = document.querySelector('#mostrar-galeria1');
const abrirGaleria2 = document.querySelector('#mostrar-galeria2');
const abrirGaleria3 = document.querySelector('#mostrar-galeria3');

/*Abrir contenedorPrincipal*/
abrirGaleria1.addEventListener ('click', () => {
    indiceImagen1 = 0;
    imagenActiva.src = imagenesArray1[indiceImagen1].src;
    contenedorPrincipal.style.display = 'flex';
});

/*Cerrar contenedorPrincipal*/
btnCierra.addEventListener('click', () => {
    contenedorPrincipal.style.display = 'none';
});

/*Adelanta imagen*/
const adelantaImagen1 = () => {
    if (indiceImagen1 == imagenesArray1.length - 1){
        indiceImagen1 = -1;
    }
    indiceImagen1++;
    imagenActiva.src = imagenesArray1[indiceImagen1].src;
}
btnAdelanta.addEventListener('click',adelantaImagen1);

/*Retrocede imagen*/
const retrocedeImagen1 = () => {
    if (indiceImagen1 == 0){
        indiceImagen1 = imagenesArray1.length;
    }
    indiceImagen1--;
    imagenActiva.src = imagenesArray1[indiceImagen1].src;
}
btnRetrocede.addEventListener('click',retrocedeImagen1);



/*Abrir contenedorPrincipal*/
abrirGaleria2.addEventListener ('click', () => {
    indiceImagen2 = 0;
    imagenActiva.src = imagenesArray2[indiceImagen2].src;
    contenedorPrincipal.style.display = 'flex';
});

/*Cerrar contenedorPrincipal*/
btnCierra.addEventListener('click', () => {
    contenedorPrincipal.style.display = 'none';    
});
    
/*Adelanta imagen*/
const adelanteImagen2 = () => {
    if (indiceImagen2 == imagenesArray2.length - 1){
        indiceImagen2 = -1;
    }
    indiceImagen2++;
    imagenActiva.src = imagenesArray2[indiceImagen2].src;
}
btnAdelanta.addEventListener('click',adelanteImagen2);

/*Retrocede imagen*/
const retrocedeImagen2 = () => {
    if (indiceImagen2 == 0){
        indiceImagen2 = imagenesArray2.length;
    }
    indiceImagen2--;
    imagenActiva.src = imagenesArray2[indiceImagen2].src;
}
btnRetrocede.addEventListener('click',retrocedeImagen2);



/*Abrir contenedorPrincipal*/
abrirGaleria3.addEventListener ('click', () => {
    indiceImagen3 = 0;
    imagenActiva.src = imagenesArray3[indiceImagen3].src;
    contenedorPrincipal.style.display = 'flex';
});

/*Cerrar contenedorPrincipal*/
btnCierra.addEventListener('click', () => {
    contenedorPrincipal.style.display = 'none';    
});
        
/*Adelanta imagen*/
const adelanteImagen3 = () => {
    if (indiceImagen3 == imagenesArray3.length - 1){
        indiceImagen3 = -1;
    }
    indiceImagen3++;
    imagenActiva.src = imagenesArray3[indiceImagen3].src;
}
btnAdelanta.addEventListener('click',adelanteImagen3);
    
/*Retrocede imagen*/
const retrocedeImagen3 = () => {
    if (indiceImagen3 == 0){
        indiceImagen3 = imagenesArray3.length;
    }
    indiceImagen3--;
    imagenActiva.src = imagenesArray3[indiceImagen3].src;
}
btnRetrocede.addEventListener('click',retrocedeImagen3);


/*
// Función para abrir una galería
const abrirGaleria = (imagenesArray, indice) => {
    return () => {
        indice = 0;
        imagenActiva.src = imagenesArray[indice].src;
        contenedorPrincipal.style.display = 'flex';

        btnAdelanta.addEventListener('click', adelantaImagen(indice, imagenesArray));
        btnRetrocede.addEventListener('click', retrocedeImagen(indice, imagenesArray));
    };
};

// Función para adelantar imagen
const adelantaImagen = (indice, imagenesArray) => () => {
    if (indice == imagenesArray.length - 1) {
        indice = -1;
    }
    indice++;
    imagenActiva.src = imagenesArray[indice].src;
};

// Función para retroceder imagen
const retrocedeImagen = (indice, imagenesArray) => () => {
    if (indice == 0) {
        indice = imagenesArray.length;
    }
    indice--;
    imagenActiva.src = imagenesArray[indice].src;
};

const abrirGaleria1 = abrirGaleria(imagenesArray1, indiceImagen1);
abrirGaleria2 = abrirGaleria(imagenesArray2, indiceImagen2);
abrirGaleria3 = abrirGaleria(imagenesArray3, indiceImagen3);

// Event listener para cerrar el contenedor
btnCierra.addEventListener('click', () => {
    contenedorPrincipal.style.display = 'none';
    btnAdelanta.removeEventListener('click', adelantaImagen);
    btnRetrocede.removeEventListener('click', retrocedeImagen);
});
*/
