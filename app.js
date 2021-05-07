if (counter = 'NaN') counter = 0;
if (counter = 'undefined') counter = 0;

var counter = localStorage.getItem("myval");
document.getElementById('heading').innerHTML = counter;
function fun() {
    ++counter;
    localStorage.setItem("myval", counter);
    document.getElementById('heading').innerHTML = counter;
}

function dec() {

    if (counter <= 0) counter = 0;
    else {
        --counter;
    }
    local();
    document.getElementById('heading').innerHTML = counter;
}

function reset() {
    counter = 0;
    local();
    document.getElementById('heading').innerHTML = counter;
}

function local() {
    localStorage.setItem("myval", counter);
}

function save() {
    var btn = document.createElement("Button");

    btn.innerHTML = "Save It";
    document.body.appendChild(btn);
}
