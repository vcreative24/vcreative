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