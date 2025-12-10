let navButton = document.getElementById('nav-button')

const glow = gsap.to(navButton, {
    boxShadow: "0px 0px 20px 6px var(--accent)",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

navButton.addEventListener("click", () => {
    glow.pause();
    gsap.to(navButton, { boxShadow: "0px 0px 0 rgba(0,0,0,0)" });
});

let cards = document.querySelectorAll("#hero-cards > div")

let time = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } })

time.to(cards[0], { opacity: 1, scale: 1 })
    .to(cards[1], { opacity: 1, scale: 1 }, "+=0.1")
    .to(cards[2], { opacity: 1, scale: 1 }, "+=0.1")



gsap.registerPlugin(ScrollTrigger);

let about1Section = document.getElementById('about-1')
let about2Section = document.getElementById('about-2')
let projectsSection = document.getElementById('projects')
let formSection = document.getElementById('form')
let footerElement = document.querySelector('footer')

let about1DivElement = document.querySelector('#about-1 > div')
let about1ImgElement = document.querySelector('#about-1 img')
let about2ImgElement = document.querySelector('#about-2 img')
let about2DivElement = document.querySelector('#about-2 > div')

let startValue = window.innerWidth < 750 ? "top 150%" : "top 90%";

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
                start: startValue,
                toggleActions: "play none none none",
            }
        }
    )
}

function gsapRight(element) {
    gsap.fromTo(element,
        { opacity: 0, x: 500 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: element,
                start: startValue,
                toggleActions: "play none none none",
            }
        }
    )
}
function gsapLeft(element) {
    gsap.fromTo(element,
        { opacity: 0, x: -500 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: element,
                start: startValue,
                toggleActions: "play none none none"
            }
        }
    )
}

function gsapSmall(element) {
    gsap.fromTo(element,
        { opacity: 0, scale: 0.5 },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: startValue,
                toggleActions: "play none none none",
            }
        }
    )
}

gsapRight(about1ImgElement)
gsapLeft(about1DivElement)
gsapRight(about2DivElement)
gsapLeft(about2ImgElement)

gsapSmall(projectsSection)
gsapSmall(formSection)
gsapAppear(footerElement)


let projects = document.querySelectorAll(".projects-list article");

function addMovement(list) {
    list.forEach(card => {
        let tiltX = gsap.quickTo(card, "rotationX", { duration: 0.3, ease: "power3.out" });
        let tiltY = gsap.quickTo(card, "rotationY", { duration: 0.3, ease: "power3.out" });

        card.addEventListener("mousemove", e => {
            let rect = card.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            let rotY = gsap.utils.mapRange(0, rect.width, -10, 10, x);
            let rotX = gsap.utils.mapRange(0, rect.height, 10, -10, y);

            tiltY(rotY);
            tiltX(rotX);
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.4, ease: "power2.out" });
        });
    });
}

addMovement(cards)
addMovement(projects)

