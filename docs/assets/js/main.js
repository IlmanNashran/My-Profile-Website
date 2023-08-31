/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
    

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0 ; i < skillsContent.length; i++){
        skillsContent[i].className='skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className='skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target'),
      tabContents = document.querySelectorAll('[data-content]')

      tabs.forEach(tab =>{
        tab.addEventListener('click',() =>{
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent =>{
                tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')

            tabs.forEach(tab =>{
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        })
      })

/*==================== SERVICES MODAL ====================*/
const modelViews = document.querySelectorAll('.services_model'),
      modelBtns = document.querySelectorAll('.services_button'),
      modelCloses = document.querySelectorAll('.services_model-close')

      let modal = function(modalClick){
        modelViews[modalClick].classList.add('active-mode')
      }

      modelBtns.forEach((modelBtns,i)=>{
        modelBtns.addEventListener('click',()=>{
            modal(i)
        })
      })

      modelCloses.forEach((modalClose) => {
        modalClose.addEventListener('click',() => {
            modelViews.forEach((modalView)=> {
                 modalView.classList.remove('active-mode')
        })
       })
      })
 /*==================== PORTFOLIO SWIPER  ====================*/
 let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

  });

/*==================== TESTIMONIAL ====================*/
let swiper2 = new Swiper('.mobileApp__container', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 
$(document).ready(function() {
    "use strict";

    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-animation");
                observer.unobserve(entry.target);
            }
        });
    }

    const sections = document.querySelectorAll(".section");

    const sectionObserver = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.3,
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});