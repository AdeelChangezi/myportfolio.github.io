const menu = document.querySelector('.menuButton');
const nav = document.querySelector('.navItems');
const navLinks = document.querySelectorAll('.navItems a');
const downloadButton = document.querySelector("body a");
const check1 = document.getElementById("one");
const check2 = document.getElementById("second");
const check3 = document.getElementById("third");

check1.checked = false;
check2.checked = false;
check3.checked = false;

//----------------------------------------------------------
//functions for work section
function func1() {
    check2.checked = false;
    check3.checked = false;
}

function func2() {
    check1.checked = false;
    check3.checked = false;
}
function func3() {
    check2.checked = false;
    check1.checked = false;
}

function hide(){
    check1.checked = false;
    check2.checked = false;
    check3.checked = false;
}
//----------------------------------------------------------

function navSlide() {
    nav.classList.toggle('navItems-active');
    menu.classList.toggle('toggle');
}

function onLoad() {
    document.querySelector(".formContent").reset();
}

