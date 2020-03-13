// menu

const MENU = document.querySelector('#menu')
// MENU.addEventListener('click',(event) => {
//     MENU.querySelectorAll('a').forEach(el => el.classList.remove('nav-text-active'))
//     event.target.classList.add('nav-text-active');
// })
const navLinks = document.querySelectorAll('.nav-text');
const sections = document.querySelectorAll('section');
const margin = 350;
let activeSection = 0;

window.addEventListener('scroll',() => {
    const current = (sections.length - 1) - Array.from(sections).reverse().findIndex((index) => window.scrollY >= index.offsetTop - margin);
    if (current !== activeSection) {
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('nav-text-active'))
        activeSection = current;
        navLinks[current].classList.add('nav-text-active');
    }
});



//forms
const BUTTON = document.querySelector('#btn')
const CLOSE_BUTTON = document.querySelector('#close-btn');
const resultSubject = document.querySelector('#message-result');
const resultDescr = document.querySelector('#descr-result');
const messageAlert = document.querySelector('#message-alert');
let form = document.querySelector('#contact-form')

BUTTON.addEventListener('click',(e) => {
    if (form.checkValidity()) {
        e.preventDefault()
        let subject = document.querySelector('#subject');
        let description = document.querySelector('#description');
        if (subject.value === '') { resultSubject.innerText = 'Без темы' }
        else {
            resultSubject.innerText = subject.value.toString();
        }
        if (description.value === '') { resultDescr.innerText = 'Без описания' }
        else {
            resultDescr.innerText = description.value.toString();
        }
        document.querySelector('#message-block').classList.remove('hidden')
    }
})

CLOSE_BUTTON.addEventListener('click',() => {
    resultSubject.innerText = '';
    resultDescr.innerText = ''
    document.querySelector('#message-block').classList.add('hidden')
    form.reset()
})



//image active
let imagesItems = document.querySelector('#portfolio-images')

imagesItems.addEventListener('click',(event) => {
    imagesItems.querySelectorAll('.portfolio-img').forEach(el => el.classList.remove('portfolio-img-active'))
    event.target.classList.add('portfolio-img-active');
})

//image random
const portfolioButtons = document.querySelector('.portfolio-buttons')
console.log(portfolioButtons)
let arrImg = Array.from(imagesItems.querySelectorAll('.portfolio-img'))



portfolioButtons.addEventListener('click',(event) => {
    portfolioButtons.querySelectorAll('.portfolio-btn').forEach((el,i) =>
        el.classList.remove('portfolio-btn-active'))
    event.target.classList.add('portfolio-btn-active')



    // const mixRand = () => ;
    console.log(arrImg)
    let tempImgArrMix = arrImg.map(el => el.src).sort(() => 0.5 - Math.random())
    arrImg.map((el,i) => el.src = tempImgArrMix[i])


})








//black screen phone

const PHONE_VERT = document.querySelector('.phone-vertical')
const PHONE_HOR = document.querySelector('.phone-horizontal')
const PHONE_VERT_BLACK = document.querySelector('.phone-vertical-black')
const PHONE_HOR_BLACK = document.querySelector('.phone-horizontal-black')

PHONE_VERT.addEventListener('click',() => {
    PHONE_VERT.classList.add('visibility-hidden')
    PHONE_VERT_BLACK.classList.remove('visibility-hidden')
});
PHONE_HOR.addEventListener('click',() => {
    PHONE_HOR.classList.add('visibility-hidden')
    PHONE_HOR_BLACK.classList.remove('visibility-hidden')
});
PHONE_VERT_BLACK.addEventListener('click',() => {
    PHONE_VERT_BLACK.classList.add('visibility-hidden')
    PHONE_VERT.classList.remove('visibility-hidden')
});
PHONE_HOR_BLACK.addEventListener('click',() => {
    PHONE_HOR_BLACK.classList.add('visibility-hidden')
    PHONE_HOR.classList.remove('visibility-hidden')
});

//slides

const LEFT_ARROW = document.querySelector('.arrow-prev');
const RIGHT_ARROW = document.querySelector('.arrow-next');
let phoneImages = document.querySelector('.phone-images');
let leftSliderNum = 0;



LEFT_ARROW.addEventListener('click',() => {
    leftSliderNum = leftSliderNum - 1020;
    if (leftSliderNum === -2040) {
        leftSliderNum = 0
    }
    phoneImages.style.left = leftSliderNum + 'px'
});

RIGHT_ARROW.addEventListener('click',() => {
    leftSliderNum = leftSliderNum + 1020;
    if (leftSliderNum === 1020) {
        leftSliderNum = -1020
    }
    phoneImages.style.left = leftSliderNum + 'px'
});



