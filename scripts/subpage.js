/* to get the html elements */
let button = document.getElementById("open_menu");
let dropdown = document.querySelector("nav ul");

console.log("Test");

// to detect mouse click on the menu */
button.addEventListener("click", () => {
    console.log("clicked!");
    /* text which @keyframes to assign */
    if (dropdown.style.animationName == "hover-in")
        dropdown.style.animationName = "hover-out";
    else dropdown.style.animationName = "hover-in";

    dropdown.style.animationDuration =
        "0.5s"; /* how fast/slow will the animation will be executed */
    dropdown.style.animationFillMode =
        "forwards"; /*what will happen after the animation */
});
