// creo array con oggetti
const imagesArray = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

/*
// create an array for the images.
const imgArray = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];
*/

// create variabile to be used in the for loop to tell where the created <div> should be put in the html file.
const itemsDom = document.querySelector('.items');

// create a for loop to dynamically create <div .item> (i will not see them in html because they will not have the .show class).
for (i=0; i<imagesArray.length; i++) {
    itemsDom.innerHTML += ` <div class="item">
                            <img class="img_slide" src="${imagesArray[i].url}">
                            </div>`;
    // debug: used to check if 5 <div> are actually created.
    console.log(itemsDom);
}

// create a variable to specify which <div .item> inside the imagesArray will have the .show class.
let activeImg = 0;

// create a variable which refers to every <div .item> created (this is an array).
const itemList = document.getElementsByClassName('item');

// being an array, we can tell to the first element in itemList to have the class .show
itemList[activeImg].classList.add('show');

// debug: check if itemList is an array (if done correctly, it will be an array with 5 elements within) and if the .show class is given to the first <div> only.
console.log(itemList);








// following is mostly related to bonus_2
const thumbnailContainerDom = document.querySelector('.thumbnail_container'); // bonus_2

// bonus_2
for (i=0; i<imgArray.length; i++) {
    thumbnailContainerDom.innerHTML += `<div class="t_img">
                                        <img src="${imgArray[i]}">
                                        </div>`;
}

//bonus_2
const activeImgThumbnailDom = document.getElementsByClassName('t_img');
console.log(activeImgThumbnailDom); // to check if we have an array with all the 5 <div .t_img> created.

activeImgThumbnailDom[activeImg].classList.add('active');
console.log(activeImgThumbnailDom); // to check if the first <div .t_img> has the class .active.

// click on arrow_next event
const next = document.querySelector('.arrow_next');
next.addEventListener('click',
function() {

     if (activeImg == (imgArray.length-1)) {
        itemList[activeImg].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active'); // bonus_2 part
        activeImg = 0;
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active'); // bonus_2 part
    } else {
        itemList[activeImg].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active'); // bonus_2 part
        activeImg++;
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active'); // bonus_2 part
    }

})

// click on arrow_previous event
const previous = document.querySelector('.arrow_previous');
previous.addEventListener('click',
function() {

    if (activeImg == 0) {
        itemList[0].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active'); // bonus_2 part
        activeImg = (imgArray.length-1);
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active'); // bonus_2 part
    } else {
        itemList[activeImg].classList.remove('show');
        activeImgThumbnailDom[activeImg].classList.remove('active'); // bonus_2 part
        activeImg--;
        itemList[activeImg].classList.add('show');
        activeImgThumbnailDom[activeImg].classList.add('active'); // bonus_2 part
    }
    
})