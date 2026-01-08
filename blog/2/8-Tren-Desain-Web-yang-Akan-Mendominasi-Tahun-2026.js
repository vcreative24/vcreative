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


// ARTICLE SHARE
    const currentURL = window.location.href;

    document.getElementById("waBtn").href =
        "https://wa.me/?text=" + encodeURIComponent(currentURL);

    document.getElementById("fbBtn").href =
        "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentURL);

    document.getElementById("xBtn").href =
        "https://twitter.com/intent/tweet?url=" + encodeURIComponent(currentURL);

    document.getElementById("copyBtn").onclick = function () {
        navigator.clipboard.writeText(currentURL);

        const toast = document.getElementById("toast");
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    };


    // ARTICLE SHARE
    const shareLINK = window.location.href;

    document.getElementById("waLink").href =
        "https://wa.me/?text=" + encodeURIComponent(shareLINK);

    document.getElementById("fbLink").href =
        "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareLINK);

    document.getElementById("xLink").href =
        "https://twitter.com/intent/tweet?url=" + encodeURIComponent(shareLINK);

    document.getElementById("copyLink").onclick = function () {
        navigator.clipboard.writeText(shareLINK);

        const toast = document.getElementById("toast");
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    };


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