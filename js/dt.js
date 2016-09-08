var myVar;

function myFunction1() {
    myVar = setInterval(alertFunc, 1000);
}

function alertFunc() {
    document.getElementById("demo").innerHTML = Date();
}