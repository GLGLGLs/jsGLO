window.addEventListener('DOMContentLoaded', function(){
    'use strict';
function countTimer (deadLine){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

function getTimerRemaining(){    
    let dateStop = new Date(deadLine).getTime(),
        dateNow = new Date ().getTime(),
        timeRemaining = (dateStop - dateNow)/1000,
        seconds = Math.floor(timeRemaining%60),
        minutes = Math.floor((timeRemaining/60)%60),
        hours = Math.floor(timeRemaining/ 60 /60),
        day = Math.floor(timeRemaining/60/60/24);
        return{timeRemaining, hours,minutes, seconds};
    }
    let idInit = setInterval(updateClock,1000);

function updateClock(){
        let timer = getTimerRemaining();
        timerHours.textContent = (timer.hours < 10) ? '0' + timer.hours : timer.hours;
        timerMinutes.textContent = (timer.seconds < 10) ? '0' + timer.seconds : timer.seconds;
        timerSeconds.textContent=(timer.minutes < 10) ? '0' + timer.minutes : timer.minutes;

        if(timer.timeRemaining<0){
            clearInterval(idInit);
        timerHours.textContent='00';
        timerMinutes.textContent='00';
        timerSeconds.textContent='00';
         }
    }
} 
countTimer('2 september 2020 00:00:00');

    //меню, исправлены обработчики к задание по уроку №20
const toggleMenu = ()=>{
const btMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

btMenu.addEventListener('click', ()=>{
        menu.classList.toggle('active-menu');
    });

menu.addEventListener('click',()=>{
    let target = event.target;
    if(target.classList.contains('close-btn') || target!==menu){

        target=target.closest('.close-btn');

        menu.classList.toggle('active-menu');
    }
});
};
toggleMenu();

    
    //popup

const togglePopup = () =>{

    const   popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpContent = document.querySelector('.popup-content');
    let count=0;
    
    popupBtn.forEach((elem)=>{
        elem.addEventListener('click', function moveLeft(){
            count ++;
            popup.style.display='block';

                if(document.documentElement.clientWidth>768){

                    popUpContent.style.left = count*4+'px';

                    if(count<142.5){

                    setTimeout(moveLeft,5);

                    }
                }
        });
    }); 

        popup.addEventListener('click', (event)=>{
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popUpContent.style='none';
                popup.style.display='none';
                
                    count =0;
            }else{

                target = target.closest('.popup-content');

                if(!target){
                    popUpContent.style='none';
                    popup.style.display='none';
                    

                    count =0;
                }
            }
        });
};
    
togglePopup();

    //табы

const tabs = ()=>{
    const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index)=>{
        for (let i=0;i<tabContent.length;i++){
            if(index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            }else{
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };
    tabHeader.addEventListener('click', (event)=>{
        let target = event.target;
        target=target.closest('.service-header-tab');
               
            if(target){
            tab.forEach((item,i)=>{
                if(item===target){
                    toggleTabContent(i);
                }
            });
        }
    });
};
tabs();

//слайдер 

const slider = ()=>{
    const slide = document.querySelectorAll('.portfolio-item'),
    btn=document.querySelectorAll('.portfolio-btn'),
   
    slider=document.querySelector('.portfolio-content'),
    dotBlock = document.querySelector('.portfolio-dots');

    let currentSlide =0,
     interval,
     newDot;
     

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);

    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
 
    };

    // Создаём новые точки
    const createDots = ()=>{
        for(let i=0;i<slide.length;i++){
        newDot = document.createElement('li');
        newDot.classList.add('dot');
        dotBlock.append(newDot);
        }
    };
    createDots();
    // Создаём псевдо-массив точек по классу dot и присваиваем первому элементу класс dot-active
    let dot=document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide,'portfolio-item-active');
        prevSlide(dot,currentSlide,'dot-active');
        currentSlide++;
        if(currentSlide>=slide.length){
            currentSlide=0;
        }
        nextSlide(slide, currentSlide,'portfolio-item-active');
        nextSlide(dot,currentSlide,'dot-active');
    };

    const startSlide = (time=3000) => {
        interval = setInterval(autoPlaySlide,time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event)=>{
        event.preventDefault();

        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')){
            return;     
           }

        prevSlide(slide, currentSlide,'portfolio-item-active');
        prevSlide(dot,currentSlide,'dot-active');

        if(target.matches('#arrow-right')){
            currentSlide++;
        }else if(target.matches('#arrow-left')){
            currentSlide--;
        }else if(target.matches('.dot')){
            dot.forEach((elem,index)=>{
                if(elem === target){
                    currentSlide = index;
                }
            });
        }
        if(currentSlide>=slide.length){
            currentSlide=0;
        }else if(currentSlide<0){
            currentSlide=slide.length-1;
        }
        nextSlide(slide, currentSlide,'portfolio-item-active');
        nextSlide(dot,currentSlide,'dot-active');
    });


    slider.addEventListener('mouseover', (event)=>{
        if(event.target.matches('.portfolio-btn')||
        event.target.matches('.dot')){
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event)=>{
        if(event.target.matches('.portfolio-btn')||
        event.target.matches('.dot')){
            startSlide();
        }
    });
    startSlide(1500);
};

slider();
});