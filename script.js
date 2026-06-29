// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Search Books
const searchInput = document.querySelector(".search-section input");
const books = document.querySelectorAll(".book-card");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        let value = searchInput.value.toLowerCase();

        books.forEach(book => {
            let title = book.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });
}

// Contact Form Validation
const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;

        if (name.trim() === "" || email.trim() === "") {
            alert("Please fill all required fields.");
            return;
        }

        alert("Thank you! Your message has been sent.");

        this.reset();
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".book-card, .feature-card, .mission-card, .stat-box")
    .forEach(el => observer.observe(el));