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


// TAB
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.list-container');

tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        // reset tombol
        tabs.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');

        // sembunyikan semua section
        sections.forEach(sec => sec.classList.remove('active'));

        // tampilkan section target
        const target = btn.dataset.target;
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


// PRICELIST TAB
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const targetTab = params.get("tab") || "webdev";

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".list-container");

    function activateTab(target) {

        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        const activeBtn = document.querySelector(`.tab-btn[data-target="${target}"]`);
        const activeContent = document.getElementById(target);

        if (activeBtn) activeBtn.classList.add("active");
        if (activeContent) activeContent.classList.add("active");
    }

    activateTab(targetTab);

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            activateTab(btn.dataset.target);
        });
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