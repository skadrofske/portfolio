$(document).ready(function () {

    const loadertl = gsap.timeline()

    loadertl.from(".loader-text-letter", {
        delay: .3,
        duration: .4,
        y: "100%",
        opacity: 0,
        stagger: {
            amount: .4
        },
        ease: "power4.inOut",
    })

    loadertl.to(".loader-text-wrapper .loader-text-letter", {
        delay: 1,
        duration: 1,
        duration: .2,
        y: "100%",
        opacity: 0,
        stagger: {
            amount: .2
        },
        ease: "power4.inOut",
    })

    loadertl.to(".loader-text-wrapper", {
        duration: 1,
        width: 0,
        display: "none",
        ease: "power4.inOut",
    })

    loadertl.to(".logo-loader", {
        delay: .8,
        duration: .7,
        top: "0%",
        y: "0%",
        scale: "1",
        x: "0%",
        left: "0%",
        ease: "power4.easeIn",
    })

    loadertl.to(".home-item", {
        opacity: 1,
        y: "0%",
        stagger: {
            amount: .4
        }
    })

    loadertl.to("#blob", {
        opacity: 1,
    })

    const blob = document.getElementById("blob")

    document.body.onpointermove = event => {
        if(blob) {
            const { pageX, pageY } = event
            blob.animate({
                left: `${pageX}px`,
                top: `${pageY}px`
            }, {duration: 3000, fill: "forwards"})
        }
    }

    gsap.from(".clip-top, .clip-bottom", 2, {
        delay: 1,
        height: "50vh",
        ease: "power4.inOut",
    })

    gsap.to(".marquee", 3.5, {
        delay: 0.75,
        top: "50%",
        ease: "power4.inOut",
    })

    gsap.from(".clip-top .marquee, .clip-bottom .marquee", 5, {
        delay: 1,
        left: "200%",
        ease: "power3.inOut",
    })

    gsap.from(".clip-center .marquee", 5, {
        delay: 1,
        left: "-50%",
        ease: "power3.inOut",
    })

    gsap.to(".clip-top", 2, {
        delay: 6,
        clipPath: "inset(0 0 100% 0)",
        ease: "power4.inOut",
    })

    gsap.to(".clip-bottom", 2, {
        delay: 6,
        clipPath: "inset(100% 0 0 0)",
        ease: "power4.inOut",
    })

    gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span:not(.kadrofske)", 1, {
        delay: 6,
        opacity: 0,
        ease: "power2.inOut",
    })

    const textWrapper = document.querySelector(".title");
    if(textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        );

        const hometl = gsap.timeline()



        // hometl.from(".title .letter", {
        //     opacity: 0,
        //     delay: .5,
        //     stagger: {
        //         amount: .5
        //     }
        // })

        // tl.from(".title", {
        //     duration: .5,
        //     y: "50%",
        //     ease: Power3.easeInOut,
        // })

        // tl.fromTo("header", {
        //     duration: 1,
        //     height: "100%",
        //     ease: Power3.easeInOut,
        // },
        // {
        //     height: "85px"
        // })


        // tl.add("end")
        // .from(".destop-nav__item", {
        //     y: "50%",
        //     opacity: 0,
        //     stagger: {
        //         amount: .5
        //     }
        // }, "end")
        // .from(".hero-item", {
        //     y: "50%",
        //     opacity: 0,
        //     stagger: {
        //         amount: .5
        //     }
        // }, "end")
    }

    gsap.registerPlugin(ScrollTrigger)
    
    const projectstl = gsap.timeline()
    const projectstl1 = gsap.timeline()

    projectstl.add("card")

    projectstl.fromTo(".ho h2", {
        x: "-50%",
        opacity: 0,
    },
    {
        delay: .5,
        duration: .7,
        x: "0%",
        opacity: 1,
        stagger: {
            amount: .7
        }
    }, "card")
    projectstl.fromTo(".ho h3", {
        y: "50%",
        opacity: 0,
    },
    {
        delay: 1,
        duration: .5,
        y: "0%",
        opacity: 1,
        stagger: {
            amount: 1
        }
    }, "card")
    

    projectstl1.to('.ho img',1, { 
        clipPath:"polygon(0% 12.75%, 100% 12.75%, 100% 69.75%, 0% 69.75%)", 
        ease:Expo.easeOut,
        stagger: {
            amount: 1
        }
    }, 1);


    const cards = document.querySelectorAll(".ho a");

    cards.forEach(card => {
        const image = card.querySelector("img")
        const cardHover = gsap.to(image, {
            paused: true,
            duration: .3,
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: Sine.easeIn,
        });
        card.onmouseover = function() {
            if(projectstl1.isActive() === false) {
                card.classList.add("hovered")
                cardHover.play()
            }
        };
    
        card.onmouseout = function() {
            if(projectstl1.isActive() === false) {
                card.classList.remove("hovered")
                cardHover.reverse()
            }
        }
    });
    

    // function delay(n) {
    //     n = n || 2000;
    //     return new Promise((done) => {
    //         setTimeout(() => {
    //             done();
    //         }, n)
    //     })
    // }

    // function pageTranstion() {
    //     var tl = gsap.timeline();

    //     tl.to(".loading-screen", {
    //         duration: .7,
    //         height: "100%",
    //         top: "0",
    //         ease: "Expo.easeInOut"
    //     })

    //     tl.to(".loading-screen", {
    //         duration: .7,
    //         height: "0",
    //         top: "0",
    //         ease: "Expo.easeInOut",
    //         delay: 0.2
    //     })
    // }

    // function contentAnimation() {
    //     var tl = gsap.timeline();
    //     tl.from('.fade-in', {
    //         duration: .7,
    //         opacity: 0,
    //         stagger: 0.2,
    //         delay: 1
    //     })
    // }

    // barba.init({
    //     sync: true,

    //     transitions: [{
    //         async leave(data) {
    //             const done = this.async();

    //             pageTranstion();
    //             await delay(500);
    //             done();
    //         },

    //         // async enter(data) {
    //         //     contentAnimation();
    //         // },

    //         async once(data) {
    //             pageTranstion();
    //             // contentAnimation();
    //         }

    //       }]
    //   })
    
    const nav = document.querySelector('header')

    if(window.pageYOffset > 100) {
        nav.classList.add('scrolling-active')
    }

    window.addEventListener("scroll", function(event) {
        if(this.scrollY > 100) {
            nav.classList.add('scrolling-active')
        }
        else {
            nav.classList.remove('scrolling-active')
        }
    })

    //logo text effect 
    const logoItem = document.querySelector('.logo-item')

    let word = logoItem.children[0].children[0].innerText.split('');
    logoItem.children[0].innerHTML = '';
    word.forEach((letter, idx) => {
        logoItem.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
    });
    let cloneDiv = logoItem.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute'
    cloneDiv.style.left = '0';
    cloneDiv.style.top = '0';
    logoItem.appendChild(cloneDiv)

    

    // const projectDevContainer = document.querySelectorAll(".development .project-container")

    // if(projectDevContainer.length % 2 == 1) {
    //     projectDevContainer[2].classList.add("span-2")
    // }

    // const projectDesignContainer = document.querySelectorAll(".design .project-container")

    // if(projectDesignContainer.length % 2 == 1) {
    //     projectDesignContainer[1].classList.add("span-2")
    // }
});
