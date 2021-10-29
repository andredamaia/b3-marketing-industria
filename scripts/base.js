import Preload from 'https://unpkg.com/preload-it@latest/dist/preload-it.esm.min.js'

// Preload Control
const preload = Preload()
const preloadProgress = document.querySelector('.preload span')

preload.fetch([
    '../../images/rhino.jpg',

    
  ]).then(items => {
    const enterAnimantion = gsap.timeline({ delay: 1 })
  
    enterAnimantion.to('.preload', {
      duration: .5,
      autoAlpha: 0,
      ease: 'power3.inOut'
    })
    enterAnimantion.to('.preload span', {
      duration: .8,
      autoAlpha: 0,
      skewY: 6,
      y: -20,
      delay: -.8,
      ease: 'power3.inOut'
    })
    .fromTo('.bg-banner h1 span', 
    {
      autoAlpha: 0
    },
    {
      delay: 2,
      duration: .8,
      autoAlpha: 1,
      skewY: 6,
      x: -20,
      stagger: .03,
      delay: -.8,
      ease: 'power3.inOut'
    })
    .fromTo('.banner-text', {
      autoAlpha: 0,
      y: 60
    }, {
      autoAlpha: 1,
      y: 0,
      delay: -.3
    })
    .to('body', {
      css: { overflow: 'auto' },
    })

    // Wow Initialization
    new WOW().init()
})

preload.onprogress = event => {
  preloadProgress.textContent = event.progress + '%'
}

preload.onfetched = item => {
  // console.log(item)
}

preload.onerror = item => {
  // console.log(item)
}

// Menu Control
const menuButton = document.querySelector('.open-menu')
const menuClose = document.querySelector('.close-menu')
const menuListButton = document.querySelector('.mobile-menu-list')
const tl = gsap.timeline();

let checkMobile = false
let block = false

menuListButton.addEventListener('click', () => {
  tl.reverse();
  block = false
})

menuClose.addEventListener('click', () => {
  tl.reverse();
  block = false
})

menuButton.addEventListener('click', (e) => {
  e.preventDefault()
  
  if(block === true){
    tl.reverse();
    block = false
  } else {
    const screenWidth = screen.width
  
    screenWidth <= 768 ? checkMobile = true : checkMobile = false

    if (tl.reversed()) {
      tl.play();
      block = true
      return
    } else {
      tl.set('.mobile-menu', { height: 0 })
      tl.set('.mobile-menu-header img', { y: -30, autoAlpha: 0 })
      tl.set('.mobile-menu-list li', { skewY: -3, y: 15 })

      tl.fromTo('.mobile-menu', {
        y: -400,
      }, {
        duration: .5,
        autoAlpha: 1,
        height:'100vh',
        ease: 'power4.Out',
        y: 0
      })

      tl.to('.mobile-menu-header img', {
        duration: .3,
        autoAlpha: 1,
        y: 0,
        delay: -.2,
        ease: 'power4.Out'
      })

      tl.to('.mobile-menu-list li', {
        duration: .4,
        autoAlpha: 1,
        skewY: 0,
        y: 0,
        stagger: .1,
        delay: -.1,
        ease: 'power4.Out'
      })

      block = true
    }
  }
})

const intro = window.innerHeight / 3
const portfolio = document.querySelector("#portfolio").offsetHeight

function darkMode() {
  let scrollY = window.scrollY

  if(scrollY > intro && scrollY < portfolio) {
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
  }
}

window.addEventListener("scroll", darkMode)