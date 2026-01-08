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


// FORM CONTACT
document.getElementById("kirim").addEventListener("click", function () {

    const nama = document.getElementById("nama");
    const telp = document.getElementById("telp");
    const email = document.getElementById("email");
    const pesan = document.getElementById("pesan");

    [nama, telp, email, pesan].forEach(i => i.classList.remove("error"));

    let valid = true;

    if (nama.value.trim() === "") { nama.classList.add("error"); valid = false; }
    if (telp.value.trim() === "") { telp.classList.add("error"); valid = false; }
    if (email.value.trim() === "") { email.classList.add("error"); valid = false; }
    if (pesan.value.trim() === "") { pesan.classList.add("error"); valid = false; }

    if (!valid) return;

    const nomorWA = "6285135056496";
    const text = 
`
Nama: ${nama.value}
No Telp: ${telp.value}
Email: ${email.value}

Pesan:
${pesan.value}
`;

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
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