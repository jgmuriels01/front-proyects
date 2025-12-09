gsap.registerPlugin(ScrollTrigger);

let about1Section = document.getElementById('about-1')
let about2Section = document.getElementById('about-2')
let projectsSection = document.getElementById('projects')
let formSection = document.getElementById('form')
let footerElement = document.querySelector('footer')

function gsapAppear(element) {
    gsap.fromTo(element,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: element,
                start: "top 80%", // when top is at the bottom 20% of the viewport
                toggleActions: "play none none none", //toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
            }
        }
    )
}

gsapAppear(about1Section)
gsapAppear(about2Section)
gsapAppear(projectsSection)
gsapAppear(formSection)
gsapAppear(footerElement)

let articles = document.querySelectorAll('#projects-list article')

/* gsap.to(articles, {
    opacity: 1,
    y: 0,
    stagger: 1,                // one by one
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#projects svg",   // start when reaching the svg
        start: "top center",
        end: "+=" + (articles.length * 200), // enough scroll space
        scrub: true,
        pin: "#projects",          // pin section while scrolling
        snap: {
            snapTo: 1 / (articles.length - 1), // snap to each article
            duration: 0.3,
            ease: "power1.inOut"
        },
        markers: true // remove after testing
    }
}); */


articles.forEach(element => {
    ScrollTrigger.create({
        trigger: "#projects",
        start: "top 80%",
        markers: true,
        onEnter: () => gsap.set(element, { display: "block" }),
        onLeaveBack: () => gsap.set(element, { display: "none" })
    });
});