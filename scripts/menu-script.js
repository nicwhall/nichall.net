"strict";

const menuFile = "../assets/menu.json";
let menu = [];
let links = [];
let currentMenuIndex = null;
const sideNav = document.querySelector(".sidenav");
const pageObj = document.getElementById("obj");
const link = document.getElementById("pageLink");

//=======================================================
/* Set the width of the side navigation to 300px */
//=======================================================
const openNav = function () {
    sideNav.style.width = "300px";
    displayMenu();
};

//=======================================================
/* Set the width of the side navigation to 0 */
//=======================================================
const closeNav = function () {
    hideMenu();
    sideNav.style.width = "0";
};

//=======================================================
//Display Menu
//=======================================================
const displayMenu = function () {
    const menuDivs = document.querySelectorAll(".menu-option");
    menuDivs.forEach((item) => {
        item.classList.remove("hidden");
    });
};

//=======================================================
//Hide Menu
//=======================================================
const hideMenu = function () {
    const menuDivs = document.querySelectorAll(".menu-option");
    menuDivs.forEach((item) => {
        item.classList.add("hidden");
    });
};

//=======================================================
// setAttributes helper function
//======================================================
const setAttributes = function (element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
};

//=======================================================
// Show Option List
//======================================================
const showOptionList = function (e, idx) {
    //close list of links
    if (currentMenuIndex !== null) {
        hideLists();
        if (currentMenuIndex === idx) {
            currentMenuIndex = null;
            return;
        }
    }

    displayList(idx);
    currentMenuIndex = idx;
};

//=======================================================
// Display Option List
//======================================================
const displayList = function (idx) {
    const list = document.querySelectorAll(".list");
    list[idx].classList.remove("hidden");
};

//=======================================================
// Hide Option Lists
//======================================================
const hideLists = function () {
    const list = document.querySelectorAll(".list");
    list.forEach((list) => {
        list.classList.add("hidden");
    });
};

//=======================================================
//Show menu options
//======================================================
const showLinks = function (e) {
    //get link index for option
    const linkName = (element) => element.name === e.target.innerText;
    const idx = links[currentMenuIndex].findIndex(linkName);

    if (links[currentMenuIndex][idx].type === "link") {
        link.href = links[currentMenuIndex][idx].url;
        const clickEvent = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true
        });
        link.dispatchEvent(clickEvent);
    } else {
        setAttributes(obj, {
            type: links[currentMenuIndex][idx].type,
            data: links[currentMenuIndex][idx].url
        });
    }

    //hide sidebar
    closeNav();
};

//=======================================================
// Build Menu
//======================================================
const buildMenu = function (menu) {
    menu.forEach((item, index) => {
        //create menu divs and ul
        const divMenu = document.createElement("div");
        const divMenuList = document.createElement("div");
        const ulMenu = document.createElement("ul");

        ulMenu.classList.add("list", "hidden");

        //get list items and set attributes
        item.options.forEach((option, index) => {
            const liMenu = document.createElement("li");
            liMenu.innerText = option.name;

            //add click event to run showLinks()
            liMenu.addEventListener("click", function (e) {
                showLinks(e);
            });
            ulMenu.appendChild(liMenu);
        });

        //add list to div
        divMenuList.classList.add("menu-list");
        divMenuList.appendChild(ulMenu);

        //set outside div attributes
        divMenu.innerText = item.menu;
        divMenu.classList.add("menu-option");
        divMenu.classList.add("hidden");
        divMenu.appendChild(divMenuList);

        //add click event to run showOptionList
        divMenu.addEventListener("click", function (e) {
            showOptionList(e, index);
        });

        // add menu div to diswbar
        sideNav.appendChild(divMenu);

        //update links array
        links.push(item.options);
    });
};

//=======================================================
//get menu json file
//======================================================
async function getMenu() {
    //show loader
    // loading();

    try {
        const response = await fetch(menuFile);
        menu = await response.json();
        buildMenu(menu);
    } catch (error) {
        alert("API Failed");
    }
}

getMenu();
