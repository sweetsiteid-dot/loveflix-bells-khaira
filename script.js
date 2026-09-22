// =========================
// CONFIG
// =========================

const CORRECT_PIN = "1110";

let heartsCollected = 0;
const totalHearts = 3;

// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loadingScreen =
            document.getElementById("loadingScreen");

        const pinScreen =
            document.getElementById("pinScreen");

        if (loadingScreen) {
            loadingScreen.classList.add("hidden");
        }

        if (pinScreen) {
            pinScreen.classList.remove("hidden");
        }

    }, 2500);

});

// =========================
// PIN LOGIN
// =========================

function checkPin() {

    const pinInput =
        document.getElementById("pinInput");

    const error =
        document.getElementById("pinError");

    if (pinInput.value === CORRECT_PIN) {

        document
            .getElementById("pinScreen")
            .classList.add("hidden");

        document
            .getElementById("profileScreen")
            .classList.remove("hidden");

        showAchievementPopup(
            "❤️ Access Granted"
        );

    } else {

        error.innerHTML =
            "Wrong PIN 😭";

        pinInput.value = "";

        setTimeout(() => {
            error.innerHTML = "";
        }, 2000);

    }

}

// =========================
// ENTER WEBSITE
// =========================

function enterLoveflix() {

    document
        .getElementById("profileScreen")
        .classList.add("hidden");

    document
        .getElementById("mainApp")
        .classList.remove("hidden");

    const music =
        document.getElementById("bgMusic");

    if (music) {

        music.play().catch(() => {});

    }

    createConfetti();

}

// =========================
// SCROLL HELPER
// =========================

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}

// =========================
// POPUP MESSAGE
// =========================

function showAchievementPopup(text) {

    const popup =
        document.getElementById(
            "achievementPopup"
        );

    if (!popup) return;

    popup.innerHTML = text;

    popup.classList.add("show");

    setTimeout(() => {

        popup.classList.remove("show");

    }, 2500);

}

// =========================
// LETTER DETECTION
// =========================

let letterShown = false;

window.addEventListener("scroll", () => {

    const letter =
        document.getElementById("letter");

    if (!letter || letterShown) return;

    const position =
        letter.getBoundingClientRect().top;

    if (position < 350) {

        letterShown = true;

        showAchievementPopup(
            "💌 You Found My Message"
        );

    }

});

// =========================
// HIDDEN HEART SYSTEM
// =========================

function collectHeart(element) {

    if (!element) return;

    if (element.classList.contains("found"))
        return;

    element.classList.add("found");

    element.style.opacity = "0.3";
    element.style.pointerEvents = "none";

    heartsCollected++;

    createConfetti();

    showAchievementPopup(
        "❤️ You Found A Hidden Heart"
    );

    if (heartsCollected >= totalHearts) {

        showAchievementPopup(
            "❤️ You Found All The Hearts"
        );

    }

}

// =========================
// CONFETTI EFFECT
// =========================

function createConfetti() {

    const container =
        document.getElementById(
            "confettiContainer"
        );

    if (!container) return;

    const icons = [
        "❤️",
        "💖",
        "💕",
        "✨",
        "🌹",
        "💗"
    ];

    for (let i = 0; i < 30; i++) {

        const confetti =
            document.createElement("span");

        confetti.classList.add(
            "confetti"
        );

        confetti.innerHTML =
            icons[
                Math.floor(
                    Math.random() *
                    icons.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        container.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}

// =========================
// FINAL QUESTION
// =========================

function renewSeason() {

    const message =
        document.getElementById(
            "renewMessage"
        );

    if (!message) return;

    message.innerHTML =
        "I'll be waiting for your answer, Bibeng... ❤️";

    createConfetti();

}

// =========================
// CLOSE POPUP
// =========================

function closeSeasonUnlocked() {

    const popup =
        document.getElementById(
            "seasonUnlocked"
        );

    if (!popup) return;

    popup.classList.add("hidden");

}

// =========================
// AUTO CONFETTI
// =========================

setTimeout(() => {

    createConfetti();

}, 5000);

// =========================
// SCROLL REVEAL
// =========================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const sections =
            document.querySelectorAll(
                ".section"
            );

        if (!sections.length) return;

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        sections.forEach(section => {

            section.style.opacity = "0";

            section.style.transform =
                "translateY(50px)";

            section.style.transition =
                ".8s ease";

            observer.observe(section);

        });

    }
);

// =========================
// HERO BUTTON
// =========================

const playButton =
    document.querySelector(
        ".play-btn"
    );

if (playButton) {

    playButton.addEventListener(
        "click",
        () => {

            createConfetti();

            scrollToSection("letter");

        }
    );

}

// =========================
// FLOATING HERO TITLE
// =========================

const heroTitle =
    document.querySelector(
        ".hero-content h1"
    );

if (heroTitle) {

    setInterval(() => {

        heroTitle.style.transform =
            "translateY(-3px)";

        setTimeout(() => {

            heroTitle.style.transform =
                "translateY(0)";

        }, 600);

    }, 2000);

}

// =========================
// MUSIC CLICK SUPPORT
// =========================

document.addEventListener(
    "click",
    () => {

        const music =
            document.getElementById(
                "bgMusic"
            );

        if (
            music &&
            music.paused &&
            document
                .getElementById("mainApp")
                ?.classList.contains("hidden") === false
        ) {

            music.play().catch(() => {});

        }

    },
    { once: true }
);

// =========================
// END
// BANedetta × BELLS KHAIRA
// =========================
