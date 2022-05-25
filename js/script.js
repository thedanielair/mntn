//SCROLL
function scrollInto(finish, pos) {
    finish.scrollIntoView({
        behavior: 'smooth',
        block: pos  
    })
}

//START BUTTON
anchorStartPoint = document.querySelector('body');
function createAnchorStartButton() {
    let place = document.querySelector('.slider');
    let anchorStartButton = document.createElement('span');
    anchorStartButton.innerHTML = 'Start';
    anchorStartButton.classList.add('slider__position');
    place.append(anchorStartButton);

    anchorStartButton.addEventListener('click', () => {
        scrollInto(anchorStartPoint, "start");
    })
}
createAnchorStartButton();

//CONTENT BUTTONS
function createAnchorCoButtons(i) {
    let place = document.querySelector('.slider');
    let anchorCoButton = document.createElement('span');
    n = i + 1;
    if (n<10) {
        anchorCoButton.innerHTML = '0' + n;
    } else {
        anchorCoButton.innerHTML = n;
    }
    anchorCoButton.classList.add('slider__position');
    anchorCoButton.classList.add('slider__position-content');
    place.append(anchorCoButton);

    anchorCoButton.addEventListener('click', function(e){
        e.preventDefault();
        scrollInto(arrayCoPoints[i], "center");
    })
}

const anchorCoPoints = document.querySelectorAll('.desc');
let arrayCoPoints = [];
anchorCoPoints.forEach(function(item, i){
    arrayCoPoints.push(item);
    createAnchorCoButtons(i);
})


//FEEDBACK BUTTON
function createAnchorFeButton() {
    let place = document.querySelector('.slider');
    let anchorFeButton = document.createElement('span');
    anchorFeButton.innerHTML = '★';
    anchorFeButton.classList.add('slider__position');
    anchorFeButton.classList.add('slider__position-feedback');
    place.append(anchorFeButton);

    const anchorFePoint = document.querySelector('.feedback');
    anchorFeButton.addEventListener('click', function(e){
            e.preventDefault();
            scrollInto(anchorFePoint, "center");
        }
    );
}
if (document.querySelector('.feedback')) {
    createAnchorFeButton();
} else {
    console.log('Фидбэк отсутствует')
}


//SCROLL BUTTON
const scrollButton = document.querySelector('.title-box__excerpt');
const scrollPoint = document.querySelector('footer');
scrollButton.addEventListener('click', function(e){
        e.preventDefault();
        scrollInto(scrollPoint, "end");
    }
);






//PARALLAX
let pLayers = document.querySelectorAll('.parallax__layer');
window.addEventListener('scroll', function(e){
    e.preventDefault();
    let topPos = window.pageYOffset;
    pLayers.forEach(item => {
        let speed = item.getAttribute('data-speed');
        let yPos = -(topPos * speed / 100);
        item.setAttribute('style', 'transform: translate3d(0px,' + yPos + 'px, 0px');
    })
});

//SLIDER POSITION

let markHeight = 58;
let sliderHeight = 290;

scrollHeight = 2850;
// content = document.querySelector('main');
// scrollHeight = content.scrollHeight;
innerHeight = window.innerHeight;
const sliderMark = document.querySelector('.slider__position-mark');
console.log('innerHeight - ' + innerHeight);
console.log('scrollHeight - ' + scrollHeight);
console.log('window pageYOffset - ' + window.pageYOffset);

window.addEventListener('scroll', () => {
let sliderMarkPosition = window.pageYOffset * 100 / (scrollHeight - innerHeight)
if (sliderMarkPosition + markHeight >= 290) {

} else {
    sliderMark.setAttribute('style', 'transform: translate3d(0px,' + sliderMarkPosition + 'px, 0px)');
}
});
