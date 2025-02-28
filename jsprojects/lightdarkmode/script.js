const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");
const aboutImages = document.querySelectorAll(".aboutimage");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function toggleTheme(theme) {
    const isLight = theme === LIGHT_THEME;
    nav.style.backgroundColor = isLight
        ? "rgb(255 255 255 /50%"
        : "rgb(0 0 0 /50%";

    textBox.style.backgroundColor = isLight
        ? "rgb(0 0 0 /50%"
        : "rgb(255 255 255 /50%";
    toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";

    isLight
        ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
        : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

    isLight
        ? (toggleIcon.children[0].textContent = `Light Mode`)
        : (toggleIcon.children[0].textContent = `Dark Mode`);

    aboutImages.forEach((image) => {
        isLight
            ? (image.src = image.src.replace("_dark", "_light"))
            : (image.src = image.src.replace("_light", "_dark"));
    });
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", DARK_THEME);
        localStorage.setItem("theme", DARK_THEME);
        toggleTheme(DARK_THEME);
    } else {
        document.documentElement.setAttribute("data-theme", LIGHT_THEME);
        localStorage.setItem("theme", LIGHT_THEME);
        toggleTheme(LIGHT_THEME);
    }
}

toggleSwitch.addEventListener("change", switchTheme);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        toggleTheme(DARK_THEME);
    }
}
