let hover1 = document.getElementById("amae");
let hover2 = document.getElementById("photomatic");
let hover3 = document.getElementById("tea");
let hover4 = document.getElementById("aprisco");


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

hover1.onmouseover = function () {hoover(hover1)};
hover1.onmouseout = function () {mouseOut(hover1)};

hover2.onmouseover = function () {hoover(hover2)};
hover2.onmouseout = function () {mouseOut(hover2)};

hover3.onmouseover = function () {hoover(hover3)};
hover3.onmouseout = function () {mouseOut(hover3)};

hover4.onmouseover = function () {hoover(hover4)};
hover4.onmouseout = function () {mouseOut(hover4)};

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