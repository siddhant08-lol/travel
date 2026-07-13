const menuBtn = document.getElementById("nm");
const navLinks = document.getElementById("nl");
const menuBtnIcon = document.querySelector("i");


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line" : "ri-menu-line")
});


navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});



const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,

};

ScrollReveal().reveal(".himg img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".hc p",{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".hc h1",{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".hb",{
    ...scrollRevealOption,
    delay: 1500,

});

