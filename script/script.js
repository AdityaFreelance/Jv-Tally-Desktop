// Code For Menu on Responsive View
document.addEventListener("DOMContentLoaded", function () {
    const openMenuBtn = document.getElementById("menu-call-id");
    const closeMenuBtn = document.getElementById("close-menu-box");
    const menuBox = document.getElementById("menu-collapse");

    openMenuBtn.addEventListener("click", function () {
        menuBox.classList.add("menu-header-box-active");
    });

    closeMenuBtn.addEventListener("click", function () {
        menuBox.classList.remove("menu-header-box-active");
    });
});