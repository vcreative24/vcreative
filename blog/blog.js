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