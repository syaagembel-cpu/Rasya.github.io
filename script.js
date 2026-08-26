/* ==================================================
   TYPING EFFECT
================================================== */

const typingText = document.getElementById("typingText");

const words = [
    "Student",
    "Web Enthusiast",
    "Creative Learner",
    "Future Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* ==================================================
   NAVBAR SCROLL EFFECT
================================================== */

const navbar =
    document.querySelector(".futuristic-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ==================================================
   MOBILE NAVBAR AUTO CLOSE
================================================== */

const navMenu =
    document.getElementById("navbarNav");

const navItems =
    document.querySelectorAll(".nav-link");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const collapse =
                bootstrap.Collapse.getInstance(navMenu);

            if (collapse) {
                collapse.hide();
            }

        }

    });

});


/* ==================================================
   DARK / LIGHT MODE
================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const lightMode =
        document.body.classList.contains("light-mode");

    if (lightMode) {

        themeIcon.classList.remove(
            "bi-moon-stars-fill"
        );

        themeIcon.classList.add(
            "bi-sun-fill"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeIcon.classList.remove(
            "bi-sun-fill"
        );

        themeIcon.classList.add(
            "bi-moon-stars-fill"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* ==================================================
   LOAD THEME
================================================== */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeIcon.classList.remove(
        "bi-moon-stars-fill"
    );

    themeIcon.classList.add(
        "bi-sun-fill"
    );

}


/* ==================================================
   BACK TO TOP
================================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==================================================
   CONTACT FORM
================================================== */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {

        alert("Mohon isi semua bagian form.");

        return;

    }


    const whatsappMessage =
        `Halo Rasya, saya ${name}.\n\n` +
        `Email: ${email}\n\n` +
        `Pesan:\n${message}`;


    const whatsappURL =
        "https://wa.me/6285704820625?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

    contactForm.reset();

});


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".glass-card, .section-heading"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* ==================================================
   CONSOLE MESSAGE
================================================== */

console.log(
    "%c RASYA PORTFOLIO ",
    "color:#00e5ff;font-size:20px;font-weight:bold;"
);

console.log(
    "%c Just a happy, but pursuing the future seriously.",
    "color:#8295b2;font-size:12px;"
);