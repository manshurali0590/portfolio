document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".projects h2").classList.add("fade-in");
    document.querySelector(".experience h2").classList.add("fade-in");
    document.querySelectorAll(".project-item, .experience-item").forEach(item => {
        item.classList.add("slide-up");
    });
});