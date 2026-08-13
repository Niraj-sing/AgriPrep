/* =========================================================
   AGRIPREP WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");

const paymentButton =
    document.getElementById("paymentButton");

const playStoreButton =
    document.getElementById("playStoreButton");

const apkButton =
    document.getElementById("apkButton");

const toast =
    document.getElementById("toast");


/* =========================================================
   TOAST FUNCTION
========================================================= */

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


/* =========================================================
   MOBILE MENU
========================================================= */

if (mobileMenuButton && mobileNavigation) {

    mobileMenuButton.addEventListener("click", () => {

        mobileNavigation.classList.toggle("active");

        const isOpen =
            mobileNavigation.classList.contains("active");

        mobileMenuButton.textContent =
            isOpen ? "✕" : "☰";

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

if (mobileNavigation) {

    const mobileLinks =
        mobileNavigation.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("active");

            if (mobileMenuButton) {

                mobileMenuButton.textContent = "☰";

            }

        });

    });

}


/* =========================================================
   DEMO PHONEPE PAYMENT
========================================================= */

if (paymentButton) {

    paymentButton.addEventListener("click", () => {

        showToast(
            "Demo payment flow. PhonePe backend integration will be connected here."
        );

    });

}


/* =========================================================
   GOOGLE PLAY DEMO
========================================================= */

if (playStoreButton) {

    playStoreButton.addEventListener("click", (event) => {

        event.preventDefault();

        showToast(
            "Google Play link will be added after AgriPrep is published."
        );

    });

}


/* =========================================================
   APK DEMO
========================================================= */

if (apkButton) {

    apkButton.addEventListener("click", (event) => {

        event.preventDefault();

        showToast(
            "AgriPrep APK download link will be added here."
        );

    });

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) {
        return;
    }


    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.05)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================================================
   SIMPLE SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .learning-item, .plan-card"
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
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    revealObserver.observe(element);

});


/* =========================================================
   PREVENT EMPTY # LINKS
========================================================= */

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});