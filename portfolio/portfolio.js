// HEADER
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

menuToggle.onclick = () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
};

closeMenu.onclick = closeAll;
overlay.onclick = closeAll;

function closeAll() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
}


// PORTFOLIO TAB
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.portfolio-section');

tabs.forEach(btn => {
btn.addEventListener('click', () => {
tabs.forEach(t => t.classList.remove('active'));
btn.classList.add('active');

const target = btn.getAttribute('data-target');
sections.forEach(sec => sec.classList.remove('active'));
document.getElementById(target).classList.add('active');
});
});


// TESTIMONIAL CARD
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const prevBtns = document.querySelectorAll(".prev");
const nextBtns = document.querySelectorAll(".next");

let index = 0;
let cardCount = cards.length;

cards.forEach(card => track.appendChild(card.cloneNode(true)));

function updateSlide() {
    const cardWidth = cards[0].offsetWidth + 20; // gap 20px
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextSlide() {
    index++;
    updateSlide();

    if (index >= cardCount) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            updateSlide();
            setTimeout(() => track.style.transition = "0.4s ease", 20);
        }, 400);
    }
}

function prevSlide() {
    if (index === 0) {
        track.style.transition = "none";
        index = cardCount;
        updateSlide();
        setTimeout(() => track.style.transition = "0.4s ease", 20);
    }

    setTimeout(() => {
        index--;
        updateSlide();
    }, 20);
}

nextBtns.forEach(btn => btn.addEventListener("click", nextSlide));
prevBtns.forEach(btn => btn.addEventListener("click", prevSlide));

window.addEventListener("resize", updateSlide);
updateSlide();


// FAQs
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
        answer.style.display = item.classList.contains("active")
            ? "block"
            : "none";
    });
});


// AUTO BACK HOME SESUAI LOKASI LINK FILE
document.querySelectorAll('.go-home').forEach(el => {
  el.href = window.location.origin;
});


// CTA FORMAT
function kirimWA() {
    const nomor = "6285135056496";
    const pesan = "Halo Admin, saya ingin konsultasi untuk sebuah project.";

    const url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
}