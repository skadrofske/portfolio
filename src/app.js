$(document).ready(function () {

    const blob = document.getElementById("blob")

    document.body.onpointermove = event => {
        const { pageX, pageY } = event
        console.log(pageY)
        blob.animate({
            left: `${pageX}px`,
            top: `${pageY}px`
        }, {duration: 3000, fill: "forwards"})
    }

    const textWrapper = document.querySelector(".title");
        textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
        targets: ".title .letter",
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 500 + 40 * i,
    });

    anime.timeline().add({
        targets: ".flip",
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 1000,
    });

    anime.timeline().add({
        targets: "#blob",
        opacity: [0, .6],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 3000,
    });

    TweenMax.staggerFrom(
        ".logo, .nav__links > a",
        2,
        {
          opacity: 0,
          y: 30,
          ease: Expo.easeInOut,
          delay: 1,
        },
        0.1
      );
    

    function delay(n) {
        n = n || 2000;
        return new Promise((done) => {
            setTimeout(() => {
                done();
            }, n)
        })
    }

    function pageTranstion() {
        var tl = gsap.timeline();

        tl.to(".loading-screen", {
            duration: .7,
            height: "100%",
            top: "0",
            ease: "Expo.easeInOut"
        })

        tl.to(".loading-screen", {
            duration: .7,
            height: "0",
            top: "0",
            ease: "Expo.easeInOut",
            delay: 0.2
        })
    }

    // function contentAnimation() {
    //     var tl = gsap.timeline();
    //     tl.from('.fade-in', {
    //         duration: .7,
    //         opacity: 0,
    //         stagger: 0.2,
    //         delay: 1
    //     })
    // }

    barba.init({
        sync: true,

        transitions: [{
            async leave(data) {
                const done = this.async();

                pageTranstion();
                await delay(500);
                done();
            },

            // async enter(data) {
            //     contentAnimation();
            // },

            async once(data) {
                pageTranstion();
                // contentAnimation();
            }

          }]
      })
    
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
        console.log(letter)
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
    

    // (function () {
    //     const scroll = new LocomotiveScroll({
    //         el: document.querySelector('[data-scroll-container]'),
    //         smooth: true
    //     });
    // })();
    
    // $('.js-tilt').tilt({
    //     rmaxTilt:        20,
    //     perspective:    5000,   // Transform perspective, the lower the more extreme the tilt gets.
    //     easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    //     scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    //     speed:          300,    // Speed of the enter/exit transition.
    //     transition:     true,   // Set a transition on enter/exit.
    //     disableAxis:    null,   // What axis should be disabled. Can be X or Y.
    //     reset:          true,   // If the tilt effect has to be reset on exit.
    //     glare:          false,  // Enables glare effect
    //     maxGlare:       1       // From 0 - 1.
    // })
});
