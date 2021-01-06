let hover1 = document.getElementById("amae");
let hover2 = document.getElementById("photomatic");
let hover3 = document.getElementById("tea");
let hover4 = document.getElementById("aprisco");


let hoover = (a) => {
    a.style.transform = 'scale(1.1)';
    a.style.transition = 'all .5s';
}

let mouseOut = (a) => {
    a.style.transform = 'scale(1.0)';
    a.style.transition = 'all .5s';
}

hover1.onmouseover = function () {hoover(hover1)};
hover1.onmouseout = function () {mouseOut(hover1)};

hover2.onmouseover = function () {hoover(hover2)};
hover2.onmouseout = function () {mouseOut(hover2)};

hover3.onmouseover = function () {hoover(hover3)};
hover3.onmouseout = function () {mouseOut(hover3)};

hover4.onmouseover = function () {hoover(hover4)};
hover4.onmouseout = function () {mouseOut(hover4)};


/*
let hoverAll = document.querySelectorAll('.grid')

hoverAll.onmouseover = function () {hoover(hoverAll)};
hoverAll.onmouseout = function () {mouseOut(hoverAll)};*/
