let body_var = document.querySelector("main");

/* to get the 1 button */
let menu_button = document.getElementById("open_menu");
let menu_dropdown = document.getElementById("desktop_nav");

console.log("Test");

// to detect mouse click on the menu */
menu_button.addEventListener("click", () => {
    console.log("clicked!");
    /* text which @keyframes to assign */
    if (menu_dropdown.style.animationName == "hover-in")
        menu_dropdown.style.animationName = "hover-out";
    else menu_dropdown.style.animationName = "hover-in";

    menu_dropdown.style.animationDuration = "0.5s";
    /* how fast/slow will the animation will be executed */
    menu_dropdown.style.animationFillMode = "forwards";
    /*what will happen after the animation */
});

let toc_button = document.getElementById("open_toc");
let toc_content = document.getElementsByTagName("aside")[0];

window.addEventListener("scroll", () => {
    toc_content.style.top = `${window.pageYOffset + 50}px`;
});

toc_button.addEventListener("click", () => {
    console.log("clicked toc!");
    console.log(window.pageYOffset);

    /* text which @keyframes to assign */
    if (toc_content.style.animationName == "fly-in-aside")
        toc_content.style.animationName = "fly-out-aside";
    else toc_content.style.animationName = "fly-in-aside";

    toc_content.style.animationDuration = "0.5s";
    /* how fast/slow will the animation will be executed */
    toc_content.style.animationFillMode = "forwards";
    /*what will happen after the animation */
});
