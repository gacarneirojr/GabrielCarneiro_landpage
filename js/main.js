/* To zoom in the projects miniatures on mouseover and mouseout*/

let hoverAll = document.getElementsByClassName('gridEl');


let hoover = (a) => {
    a.style.transform = 'scale(1.1)';
    a.style.transition = 'all .5s';
    a.style.border = '2px solid yellow'
}

let mouseOut = (a) => {
    a.style.transform = 'scale(1.0)';
    a.style.transition = 'all .5s';
    a.style.border = ''
}

hoverAll[0].onmouseover = function () {hoover(hoverAll[0])};
hoverAll[0].onmouseout = function () {mouseOut(hoverAll[0])};

hoverAll[1].onmouseover = function () {hoover(hoverAll[1])};
hoverAll[1].onmouseout = function () {mouseOut(hoverAll[1])};

hoverAll[2].onmouseover = function () {hoover(hoverAll[2])};
hoverAll[2].onmouseout = function () {mouseOut(hoverAll[2])};

hoverAll[3].onmouseover = function () {hoover(hoverAll[3])};
hoverAll[3].onmouseout = function () {mouseOut(hoverAll[3])};

/* Change the names in Contact section on hover */

let github = document.getElementById('github')

let change1 = (b) => {
    b.innerHTML = 'github.com/gacarneirojr';
}
let undo1 = (b) => {
    b.innerHTML = 'github';
}

github.onmouseover = function () {change1(github)};
github.onmouseout = function () {undo1(github)};

let linkedin = document.getElementById('linkedin')

let change2 = (b) => {
    b.innerHTML = 'linkedin.com/in/gabriel-araujo-carneiro-junior-618770102/'
}
let undo2 = (b) => {
    b.innerHTML = 'linkedin';
}

linkedin.onmouseover = function () {change2(linkedin)};
linkedin.onmouseout = function () {undo2(linkedin)};

let email = document.getElementById('email')

let change3 = (b) => {
    b.innerHTML = 'gacarneirojrx@gmail.com'
}
let undo3 = (b) => {
    b.innerHTML = 'e-mail';
}

email.onmouseover = function () {change3(email)};
email.onmouseout = function () {undo3(email)};