var planet1 = document.getElementById("1-planet");
var planet2 = document.getElementById("2-planet");
var planet3 = document.getElementById("3-planet");
var planet4 = document.getElementById("4-planet");
var planet5 = document.getElementById("5-planet");
var planet6 = document.getElementById("6-planet");
var planet7 = document.getElementById("7-planet");
var planet8 = document.getElementById("8-planet");
var star1 = document.getElementById("star");
var ul1 = document.getElementById("1-ul");
var ul2 = document.getElementById("2-ul");
var ul3 = document.getElementById("3-ul");
var ul4 = document.getElementById("4-ul");
var ul5 = document.getElementById("5-ul");
var ul6 = document.getElementById("6-ul");
var ul7 = document.getElementById("7-ul");
var ul8 = document.getElementById("8-ul");
var ul0 = document.getElementById("0-ul");

function planetOne() {
    ul1.classList.toggle("ul1Click");
    planet1.classList.toggle("mercury1");
}
function planetTwo() {
    ul2.classList.toggle("ul2Click");
    planet2.classList.toggle("venus1");
}
function planetThree() {
    ul3.classList.toggle("ul3Click");
    planet3.classList.toggle("earth1");
}
function planetFour() {
    ul4.classList.toggle("ul4Click");
    planet4.classList.toggle("mars1");
}
function planetFive() {
    ul5.classList.toggle("ul5Click");
    planet5.classList.toggle("jupiter1");
}
function planetSix() {
    ul6.classList.toggle("ul6Click");
    planet6.classList.toggle("saturn1");
}
function planetSeven() {
    ul7.classList.toggle("ul7Click");
    planet7.classList.toggle("uranus1");
}
function planetEight() {
    ul8.classList.toggle("ul8Click");
    planet8.classList.toggle("neptune1");
}
function starOne() {
    ul0.classList.toggle("ul0Click");
    star1.classList.toggle("sun1");
}
