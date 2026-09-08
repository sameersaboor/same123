// ==========================
// MOBILE MENU
// ==========================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// ==========================
// STICKY HEADER
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});

// ==========================
// HERO IMAGE FLOAT EFFECT
// ==========================

const heroImage = document.querySelector(".right img");

if (heroImage) {

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;

        heroImage.style.transform =
            `translate(${x}px,${y}px)`;

    });

}

// ==========================
// SCROLL REVEAL
// ==========================

const revealItems = document.querySelectorAll(".card,.project,.brand");

function reveal() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".stats h3");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats || started) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const update = () => {

                count += Math.ceil(target / 80);

                if (count < target) {

                    counter.innerText = count + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    }

});

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const size = Math.max(this.clientWidth, this.clientHeight);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            e.offsetX - size / 2 + "px";

        ripple.style.top =
            e.offsetY - size / 2 + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ==========================
// ACTIVE NAV LINK
// ==========================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});

// ==========================
// LOADING ANIMATION
// ==========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});