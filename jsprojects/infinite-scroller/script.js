"strict";

const photoCount = 5;
const apiKey = "F9ukjfBMJA4giAgI6rjRYPkTlTXEFXi6ODe0LtmL26E";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photoCount}`;
const loader = document.querySelector(".loader");
const imageContainer = document.querySelector(".image-container");
let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

//=======================================================
// Show Loader
//=======================================================
function loading() {
    loader.hidden = false;
    imageContainer.hidden = true;
}

//=======================================================
// Hide loader
//=======================================================
function loaded() {
    loader.hidden = true;
    imageContainer.hidden = false;
}

//=======================================================
// Check Image Loaded
//=======================================================
const imageLoaded = function () {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        photoCount = 30;
    }
    loaded();
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
// display photos
//=======================================================
const displayPhotos = function (photoArray) {
    imagesLoaded = 0;
    totalImages = photoArray.length;

    photoArray.forEach((photo) => {
        //create anchor element for photo using photo link
        const item = document.createElement("a");
        setAttributes(item, {
            href: photo.links,
            target: "_blank"
        });

        //create image element using photo url
        const img = document.createElement("img");
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        img.addEventListener("load", function (e) {
            imageLoaded();
        });

        //append image to anchor & anchor to container div
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
};

//=======================================================
// Get photos from API
//=======================================================
async function getPhotos() {
    //call api
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos(photosArray);
    } catch (error) {
        alert(error);
    }
}

//Mainline
window.addEventListener("scroll", () => {
    if (
        this.window.innerHeight + this.window.scrollY >=
            this.document.body.offsetHeight - 1000 &&
        ready
    ) {
        ready = false;
        getPhotos();
    }
});

//show loader
loading();
getPhotos();
