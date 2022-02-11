// VARIABLE
let stars = document.getElementById('stars');
let redmoon = document.getElementById('redmoon');
let tree1 = document.getElementById('tree1');
let tree2 = document.getElementById('tree2');
let tree3 = document.getElementById('tree3');
let tree4 = document.getElementById('tree4');
let btn = document.getElementById('btn');
let header = document.querySelector('header');
let text = document.getElementById('text');

let planet1 = document.getElementById('planet1');
let planet2 = document.getElementById('planet2');
let planet3 = document.getElementById('planet3');
let comet = document.getElementById('comet');


// FUNCTION
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    planet1.style.left = value * 1 + 'px';
    planet1.style.top = value * 1 + 'px';
    planet2.style.left = value * 1 + 'px';
    planet2.style.top = value * 1 + 'px';
    planet3.style.left = value * -1 + 'px';
    planet3.style.top = value * 1 + 'px';
    comet.style.left = value * 1 + 'px';
    comet.style.marginTop = value * 1 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

    redmoon.style.top = (value-2000) * 0.25 + 'px';
    tree4.style.top = (value) * -0.03 + 500 + 'px';
    tree3.style.top = (value) * -0.07 + 550 + 'px';
    tree2.style.top = (value) * -0.1 + 600 + 'px';
    tree1.style.top = (value) * -0.05 + 300 + 'px';
})