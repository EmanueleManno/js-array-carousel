//VEDO SE FUNZIONA 
console.log('JS OK');

//RECUPERIAMO LE IMMAGINI DAL DOM:
const images = document.querySelectorAll('#carousel img');

//RECUPERIAMO I PULSANTI DAL DOM:
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//PREPARO LA GESTIONE DELL'INDICE:
let currentIndex = 0;

//IMPOSTIAMO LA PRIMA IMMAGINE COME QUELLA ATTIVA:
images[currentIndex].classList.add('active');

//METTO IN ASCOLTO IL NEXT:
nextButton.addEventListener('click', function () {
    if(currentIndex === images.length - 1) return;

    //RIMUOVERE LA CLASSE ATTIVA DALL'IMMAGINE CORRISPONDENTE ALL'INDICE:
    images[currentIndex].classList.remove('active');

    //INCREMENTO L'INDICE:
    currentIndex++;

    //AGGIUNGO LA CLASSE ATTIVA ALL'IMMAGINE CORRISPONDENTE AL NUOVO INDICE:
    images[currentIndex].classList.add('active');

});

//METTO IN ASCOLTO IL PREV:
prevButton.addEventListener('click', function () {
    if (!currentIndex) return;

    //RIMUOVERE LA CLASSE ATTIVA DALL'IMMAGINE CORRISPONDENTE ALL'INDICE:
    images[currentIndex].classList.remove('active');

    //DECREMENTO L'INDICE:
    currentIndex--;

    //AGGIUNGO LA CLASSE ATTIVA ALL'IMMAGINE CORRISPONDENTE AL NUOVO INDICE:
    images[currentIndex].classList.add('active');
})