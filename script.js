// menu


document.addEventListener('scroll',onScrool)
let contentHeader = document.querySelector('.content-header ');


function onScrool(event) {
    const curPos = window.scrollY;
    const navLinks = document.querySelectorAll('.nav-text');
    const sections = document.querySelectorAll('section');
    if (curPos <= 300) {
        contentHeader.classList.remove('content-header-small')
        contentHeader.classList.add('content-header-big')
    } else {
        contentHeader.classList.remove('content-header-big')
        contentHeader.classList.add('content-header-small')

    }
    sections.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            navLinks.forEach((a) => {
                a.classList.remove('nav-text-active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('nav-text-active')
                }
            })

        }
    })

}




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

let items = document.querySelectorAll('.slide-item')
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;

}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend',function () {
        this.classList.remove('slide-active',direction)
    })

}

function showItem(direction) {
    items[currentItem].classList.add('next',direction)
    items[currentItem].addEventListener('animationend',function () {
        this.classList.remove('next',direction)
        this.classList.add('slide-active')
        isEnabled = true
    })
}

function previousItem(n) {
    hideItem('to-right')
    changeCurrentItem(n - 1)
    showItem('from-left')
}

function nextItem(n) {
    hideItem('to-left')
    changeCurrentItem(n + 1)
    showItem('from-right')
}

document.querySelector('.arrow-prev').addEventListener('click',function () {
    if (isEnabled)
        previousItem(currentItem)
})


document.querySelector('.arrow-next').addEventListener('click',function () {
    if (isEnabled)
        nextItem(currentItem)
})







