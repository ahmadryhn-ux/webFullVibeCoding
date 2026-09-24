// ==============================
// LUCIDE ICONS
// ==============================

lucide.createIcons();


// ==============================
// MOBILE NAVIGATION
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = navLinks.classList.contains("active")
        ? "x"
        : "menu";

    menuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;

    lucide.createIcons();
});


// Close mobile menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = `
            <i data-lucide="menu"></i>
        `;

        lucide.createIcons();

    });

});


// ==============================
// TYPING EFFECT
// ==============================

const typingText = document.getElementById("typingText");

const words = [
    "Cybersecurity Enthusiast.",
    "Software Developer.",
    "Web Developer.",
    "Problem Solver."
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

            setTimeout(typeEffect, 1600);

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

    const speed = deleting ? 45 : 80;

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-text, .stat-card, .skill-card, .project-card, .learning-box, .contact-item"
    );

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});