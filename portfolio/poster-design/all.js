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



    // AUTO BACK HOME SESUAI LOKASI LINK FILE
document.querySelectorAll('.go-home').forEach(el => {
  el.href = window.location.origin;
});



// POPUP IMAGE
const images = document.querySelectorAll('.portfolio-content img');
const popup = document.getElementById('imagePopup');
const popupImg = document.getElementById('popupImg');
const closeBtn = document.querySelector('.close-btn');

images.forEach(img => {
    img.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});


// CTA FORMAT
function kirimWA() {
    const nomor = "6285135056496";
    const pesan = "Halo Admin, saya ingin konsultasi untuk sebuah project.";

    const url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
}