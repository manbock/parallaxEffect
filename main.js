const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//----------------------------------
Splitting();
//---------------------------------
gsap.registerPlugin(ScrollTrigger);

//제목
let tl = gsap.timeline();
tl.from(".title .char", {
  opacity: 0,
  yPercent: 130,
  stagger: 0.06,
  duration: 1,
  ease: "expo.out",
})
tl.to(".header__img",{duration:2,
    clipPath: `polygon(100% 0, 0 0, 0 100%, 100% 100%)`,
    ease: "expo.out",
},"-=1")

tl.from(".header__marq",{
    duration:2, 
    opacity:0, 
    yPercent:100,
    ease: "expo.out"},"-=1.5")


let gsapSq=document.querySelectorAll('.section-title__square')


gsapSq.forEach((gSq,i)=>{
    let rotate=gsap.from(gSq,{duration:3,rotation:720})

    ScrollTrigger.create({
        trigger:gSq,
        animation:rotate,
        start:'top bottom',
        scrub:1.9
    })
})


//header
function header(){
gsap.to(".title_paralax",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    yPercent:-150

})

gsap.to(".header .stroke",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    yPercent:50

})

gsap.to(".header__img",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    xPercent:-70

})

gsap.to(".header__img img",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    scale:1.3

})

gsap.to(".header__marq-wrapp",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    xPercent:-50

})

gsap.to(".header__marq-star img",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    rotate:-720

})



}

header();

//about
function about(){
    gsap.from(".about__img",{
        scrollTrigger:{
            trigger:".about",
            start:'top bottom',
            scrub:1.9
        },
        yPercent:80
    
    })

    gsap.from(".about__img img",{
        scrollTrigger:{
            trigger:".about",
            start:'top bottom',
            scrub:1.9
        },
        scale:1.6
    
    })

    gsap.to(".about__txt",{
        scrollTrigger:{
            trigger:".about__wrapp",
            start:'top bottom',
            scrub:1.9
        },
        yPercent:50
    
    })
}

about();

//benefits

function benefits(){
    gsap.from(".benefits__num",{
        scrollTrigger:{
            trigger:".benefits__list",
            start:'top bottom',
            scrub:1.9
        },
        xPercent:100
    
    })
}
benefits()


//work
function work(){
    gsap.from(".work__item-num",{
        scrollTrigger:{
            trigger:".work",
            start:'top bottom',
            scrub:1.9
        },
        y:(i,el)=> (1 - el.getAttribute('data-speed'))
    })

    gsap.from(".work__item-img img",{
        scrollTrigger:{
            trigger:".work__wrapp",
            start:'top bottom',
            scrub:1.9
        },
        scale:1.6
    })

    

}
work()


//serv
function serv(){
    gsap.from(".serv__item-arrow",{
        scrollTrigger:{
            trigger:".serv__list",
            start:'top bottom',
            scrub:1.9
        },
        x:(i,el)=> (1 - el.getAttribute('data-speed'))
    
    })
}
serv()


//footer
function footer(){
    gsap.from(".footer__div span",{
        scrollTrigger:{
            trigger:".footer",
            start:'top bottom',
            end:'bottom bottom',
            scrub:1.9
        },
        y:(i,el)=> (1 - el.getAttribute('data-speed'))
    
    })
}
footer()