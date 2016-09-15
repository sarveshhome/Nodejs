//this program used for Calculating Execution Times in JavaScript with console.time and console.timeEnd

console.time("sarvesh");

for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, i);
    })(i);
}

console.timeEnd("sarvesh");