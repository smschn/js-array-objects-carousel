// creo array con oggetti
const imagesArray = [

    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Svezia ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Perù ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Chile ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Argentina ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Colombia ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

];

// richiamo il container delle immagini
const itemsDom = document.querySelector('.items');

// attraverso ciclo for, creo dinamicamente i <div> contenenti le immagini (non le vedo perché non hanno la classe .show< tutti gli .item sono di default su display:none)
for (i=0; i<imagesArray.length; i++) {

    itemsDom.innerHTML += ` <div class="item">
                            <img class="img_slide" src="${imagesArray[i].url}">
                            <h1>${imagesArray[i].title}</h1>
                            <p>${imagesArray[i].description}</p>
                            </div>`;
    console.log(itemsDom); // debug

}

// creo una variabile di servizio per specificare quale dei <div .item> creati deve avere la classe .show (il primo)
let activeImg = 0;

// richiamo tutti i <div .item> creati nel ciclo for
const itemList = document.getElementsByClassName('item');
console.log(itemList); // debug

// 'itemList' è un array e come tale possiamo dire al primo elemento di avere la classe .show
itemList[activeImg].classList.add('show');



// --- fine prima parte, inizio seconda



// richiamo il container delle miniature
const thumbnailContainerDom = document.querySelector('.thumbnail_container');

// attraverso un ciclo for, all'interno del container delle miniature creo le miniature
for (let i = 0; i < imagesArray.length; i++) {

    thumbnailContainerDom.innerHTML += `<div class="t_img">
                                        <img src="${imagesArray[i].url}">
                                        </div>`;

}

// richiamo tutte li miniature (ottengo un array)
const activeImgThumbnailDom = document.getElementsByClassName('t_img');
console.log(activeImgThumbnailDom); // debug

// aggiungo la classe .active alla prima miniatura dell'array
activeImgThumbnailDom[activeImg].classList.add('active');
console.log(activeImgThumbnailDom); // debug



// --- fine seconda parte, inizio eventi click



// evento click sulla freccia avanti
const next = document.querySelector('.arrow_next');
next.addEventListener('click', function() {

     if (activeImg == (imagesArray.length-1)) {
        itemList[activeImg].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active');
        activeImg = 0;
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active');
    } else {
        itemList[activeImg].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active');
        activeImg++;
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active');
    }

})

// evento click sulla freccia indietro
const previous = document.querySelector('.arrow_previous');
previous.addEventListener('click', function() {

    if (activeImg == 0) {
        itemList[0].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active');
        activeImg = (imagesArray.length-1);
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active');
    } else {
        itemList[activeImg].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active');
        activeImg--;
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active');
    }
    
})



// --- fine eventi click frecce, inizio evento click per Bonus_1



// evento al click su una qualsiasi delle miniature: uso ciclo for perché devo aggiungere l'evento click ad ogni elemento dell'array
for (let x = 0; x < activeImgThumbnailDom.length; x++) {

    // ad ogni elemento dell'array (cioè ad ogni miniatura) aggiungo evento click
    activeImgThumbnailDom[x].addEventListener('click', function() {

        /*
        al click sulla miniatura, l'immagine attiva ('activeImg') deve diventare quella corrispondente alla miniatura cliccata:
        per questo motivo devo impostare la variabile 'activeImg' == al contatore 'x'.
        In questo modo il ciclo delle frecce funziona come dovrebbe, senza sfasamenti tra i valori di 'activeImg' e 'x'.
        */
        activeImg = x;

        document.querySelector('.active').classList.remove('active'); // al click rimuovo classe .active sulla miniatura che la ha in quel momento
        this.classList.add('active');   // al click sulla miniatura aggiungo classe active a miniatura cliccata

        // attraverso ciclo for rimuovo la classe show a tutti gli item (tutte le foto)
        for (let y = 0; y < itemList.length; y++) {
            itemList[y].classList.remove('show');
        }

        // ..così dopo posso aggiungere la classe .show relativa alla miniatura cliccata
        itemList[x].classList.add('show');

    })

}



// --- fine Bonus_1, inizio Bonus_2



// uso la funzione setInterval per ciclare il carosello in automatico, usando il codice dei cicli delle frecce
const carouselAutoplay = setInterval( () => {

    if (activeImg == (imagesArray.length-1)) {

        itemList[activeImg].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active');
        activeImg = 0;
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active');

    } else {

        itemList[activeImg].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active');
        activeImg++;
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active');

    }

    console.log(activeImg) // debug

}, 3000);



// --- fine Bonus_2, inizio Bonus_3

// creo funzionalità bottone play
const btnPlayDom = document.getElementById('btn_play');
btnPlayDom.addEventListener('click', function() {
    
    const carouselPlay = setInterval( () => {

        if (activeImg == (imagesArray.length-1)) {
    
            itemList[activeImg].classList.remove('show');
            activeImgThumbnailDom[activeImg].classList.remove('active');
            activeImg = 0;
            itemList[activeImg].classList.add('show');
            activeImgThumbnailDom[activeImg].classList.add('active');
    
        } else {
    
            itemList[activeImg].classList.remove('show');
            activeImgThumbnailDom[activeImg].classList.remove('active');
            activeImg++;
            itemList[activeImg].classList.add('show');
            activeImgThumbnailDom[activeImg].classList.add('active');
    
        }
    
        console.log(activeImg) // debug
    
    }, 3000);
})


// creo funzionalità bottone stop
const btnStopDom = document.getElementById('btn_stop');
btnStopDom.addEventListener('click', function() {
    clearInterval(carouselAutoplay);
})

// creo funzionalità bottone reverse
const btnReverse = document.getElementById('btn_reverse');
btnReverse.addEventListener('click', function() {

    const carouselPlay = setInterval( () => {

        if (activeImg == 0) {
            itemList[0].classList.remove('show');
            activeImgThumbnailDom[activeImg].classList.remove('active');
            activeImg = (imagesArray.length-1);
            itemList[activeImg].classList.add('show');
            activeImgThumbnailDom[activeImg].classList.add('active');
        } else {
            itemList[activeImg].classList.remove('show');
            activeImgThumbnailDom[activeImg].classList.remove('active');
            activeImg--;
            itemList[activeImg].classList.add('show');
            activeImgThumbnailDom[activeImg].classList.add('active');
        }
    
        console.log(activeImg) // debug
    
    }, 3000);

})