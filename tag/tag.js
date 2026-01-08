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


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".blog-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetId = tab.getAttribute("data-target");

            // reset semua
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // aktifkan yang diklik
            tab.classList.add("active");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // tampilkan tab pertama saat load
    tabs[0].classList.add("active");
    contents[0].classList.add("active");
});


// PRICELIST TAB
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const targetTab = params.get("tabs") || "desain";

    const tabButtons = document.querySelectorAll(".tabs-btn");
    const tabContents = document.querySelectorAll(".blog-content");

    function activateTab(target) {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        const activeBtn = document.querySelector(`.tabs-btn[data-target="${target}"]`);
        const activeContent = document.getElementById(target);

        if (activeBtn) activeBtn.classList.add("active");
        if (activeContent) activeContent.classList.add("active");
    }

    activateTab(targetTab);

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            activateTab(btn.dataset.target);
            history.replaceState(null, "", `?tabs=${btn.dataset.target}`);
        });
    });
});