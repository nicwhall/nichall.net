const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  alert("Clicked");
});

btn1.addEventListener("click", function () {
  alert("Second event");
});

btn1.addEventListener("mouseover", function () {
  btn1.innerText = "Leave me alone";
});

btn1.addEventListener("mouseout", function () {
  btn1.innerText = "Click Me";
});

const btnTry = document.getElementById("btnTry");
btnTry.addEventListener("mouseover", function () {
  console.log("Moused Over");
  const h = Math.floor(Math.random() * window.innerHeight);
  const w = Math.floor(Math.random() * window.innerWidth);
  console.log(`${w}px`, `${h}px`);
  btnTry.style.left = `${w}px`;
  btnTry.style.top = `${h}px`;
});

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const printColor = function () {
  console.log(this);
  alert(this.style.backgroundColor);
};

const container = document.querySelector("#boxes");
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.append(box);
  box.addEventListener("click", printColor);
}

const form = document.querySelector("#signup-form");
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

const formData = {};

for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
  });
}

form.addEventListener("submit", function (e) {
  alert("SUBMITTED THE FORM");
  e.preventDefault();
});

creditCardInput.addEventListener("input", (e) => {
  console.log("credit card changed");
  formData["cc"] = e.target.value;
});

veggieSelect.addEventListener("input", (e) => {
  console.log("veggie changed");
  formData["veggie"] = e.target.value;
});

termsCheckbox.addEventListener("input", (e) => {
  console.log("credit card changed");
  formData["terms"] = e.target.checked;
});
