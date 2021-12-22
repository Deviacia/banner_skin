'use strict'

let position = 0
let currentSlide = 0

const slidesToShow = 1
const slidesToScroll = 1

const container = document.querySelector('.slider-container')
const track = document.querySelector('.slider-track')
const slide = document.querySelectorAll('.slider-item')
const itemsCount = document.querySelectorAll('.slider-track > .slider-item').length

const pointerContainer = document.querySelector('.slider-pointer')
const points = document.querySelectorAll('.slider-pointer')
let pointsArr = []

const btns = document.querySelector('.slider-controller')
const nextBtn = document.querySelector('.slider-controller__next')
const prevBtn = document.querySelector('.slider-controller__prev')

const viewport = container.offsetHeight / slidesToShow
const movePosition = slidesToScroll * viewport

// 
// TO DO
// 
// Добавить возможность нажимать на point и тем самым выбирать слайд
// Зациклить слайдер
// Авто переключение слайдов


// Detect buttons press
nextBtn.addEventListener('click', () => {
    position -= movePosition
    currentSlide++
    
    setPosition()
    checkBtns()
    currentPosition()
})

prevBtn.addEventListener('click', () =>{
    position += movePosition
    currentSlide--

    setPosition()
    checkBtns()
    currentPosition()
})

// Change slides function
const setPosition = () => {
    track.style.transform = `translateY(${position}px)`;
}

// Disable button when slide pos is Min or Max
const checkBtns = () => {
    nextBtn.disabled = position <= - (itemsCount - slidesToShow) * viewport
    prevBtn.disabled = position === 0
}

// Create slides points
const createSlidesPoint = () =>{

    slide.forEach( (item, index) =>{
        let slidePoint = document.createElement('button')
            slidePoint.classList.add('slider-pointer__item')

        pointerContainer.append(slidePoint)
        pointsArr.push(slidePoint)
    })

    pointsArr[0].classList.add('active')
}

// Toggle selector
const currentPosition = () =>{
    pointsArr.forEach((item, index) =>{
        item.classList.remove('active')
    })

    if (position == -(viewport*currentSlide)) {
        pointsArr[currentSlide].classList.add('active')
    }
}

// Check slide ammount
if (itemsCount === 1) {
    btns.style.display = 'none'
} else {
    createSlidesPoint()
}
