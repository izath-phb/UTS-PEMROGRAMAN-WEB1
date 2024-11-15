// script.js
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector("#hero h1");
    heroText.classList.add("fade-in");
});
document.getElementById("formPesan").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    alert(`Terima kasih ${name}, pesan Anda telah dikirim!`);
});