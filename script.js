/*==========================================
 SHERAZ KHAN OFFICIAL
 Premium JavaScript
==========================================*/

// ===============================
// Loader Animation
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 3000);

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const
           /*==========================================
  SHERAZ KHAN OFFICIAL
  Premium Effects
==========================================*/

// ===============================
// Smooth Scroll for Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Gallery Hover Animation
// ===============================

document.querySelectorAll(".gallery-item").forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "scale(1.03)";
        item.style.transition = ".4s";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "scale(1)";

    });

});

// ===============================
// Floating Particles
// ===============================

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 60; i++) {

        const dot = document.createElement("span");

        dot.className = "particle";

        dot.style.left = Math.random() * 100 + "%";
        dot.style.top = Math.random() * 100 + "%";
        dot.style.animationDuration = (4 + Math.random() * 6) + "s";
        dot.style.animationDelay = Math.random() * 5 + "s";

        particles.appendChild(dot);

    }

}

// ===============================
// Download Button Effect
// ===============================

const downloadBtn = document.querySelector(".download-btn");

if (downloadBtn) {

    downloadBtn.addEventListener("click", () => {

        downloadBtn.innerHTML =
        '<i class="fa-solid fa-circle-check"></i> Download Started';

        setTimeout(() => {

            downloadBtn.innerHTML =
            '<i class="fa-solid fa-download"></i> Download Now';

        }, 3000);

    });

}

// ===============================
// Footer Year
// ===============================

const year = new Date().getFullYear();

const copy = document.querySelector(".copyright");

if (copy) {

    copy.innerHTML =
    "© " + year + " Sheraz Khan Official. All Rights Reserved.";

}

// ===============================
// Console Message
// ===============================

console.log("%cSheraz Khan Official",
"color:#00e5ff;font-size:24px;font-weight:bold;");

console.log("Premium Website Loaded Successfully.");
