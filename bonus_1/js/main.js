// create an array for the images.
const imgArray = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];

// create variabile to be used in the for loop to tell where the created <div> should be put in the html file.
const itemsDom = document.querySelector('.items');

// create a for loop to dynamically create <div .item> (i will not see them in html because they will not have the .show class).
for (i=0; i<imgArray.length; i++) {
    itemsDom.innerHTML += ` <div class="item">
                            <img class="img_slide" src="${imgArray[i]}">
                            </div>`;
    // debug: used to check if 5 <div> are actually created.
    console.log(itemsDom);
}

// create a variable to specify which <div .item> inside the imgArray will have the .show class.
let activeImg = 0;

// create a variable which refers to every <div .item> created (this is an array).
const itemList = document.getElementsByClassName('item');

// being an array, we can tell to the first element in itemList to have the class .show
itemList[activeImg].classList.add('show');

// debug: check if itemList is an array (if done correctly, it will be an array with 5 elements within) and if the .show class is given to the first <div> only.
console.log(itemList);





// click on arrow_next event
const next = document.querySelector('.arrow_next');
next.addEventListener('click',
function() {

     if (activeImg == imgArray.length-1) {
        itemList[imgArray.length-1].classList.remove('show');
        activeImg = 0;
        itemList[activeImg].classList.add('show');
    } else {
        itemList[activeImg].classList.remove('show');
        activeImg++;
        itemList[activeImg].classList.add('show');
    }

})

// click on arrow_previous event
const previous = document.querySelector('.arrow_previous');
previous.addEventListener('click',
function() {

    if (activeImg == 0) {
        itemList[0].classList.remove('show');
        activeImg = (imgArray.length-1);
        itemList[(imgArray.length-1)].classList.add('show');
    } else if (activeImg < 5 && activeImg > 0) {
        itemList[activeImg].classList.remove('show');
        activeImg--;
        itemList[activeImg].classList.add('show');
    }
    
})