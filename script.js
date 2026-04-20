const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-container ul");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-container"); 
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }

});