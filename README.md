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

Step 1
install nodejs

Step 2
Command:  install npm

Step 3
Command:  npm install lite-server --global

step 4
Command:  lite-server

-----------------------------
#Hello.js  will be execute in command prompt
<img src="https://s-media-cache-ak0.pinimg.com/originals/c4/c4/de/c4c4de894799252157ff0446577e2506.png"></img>


#How to commit files to github
<img src="https://github.com/sarveshhome/Nodejs/blob/master/Pics/gitinitcommit.png"></img>


---------------------------------------------------------------------
#This program used for Calculating Execution Times in JavaScript with console.time and console.timeEnd

console.time("sarvesh");

for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, i);
    })(i);
}

console.timeEnd("sarvesh");

------------------------------------------------------------------------------
or

var startTime = new Date().getTime();
//your code
var endTime = new Date().getTime();
console.log("duration [ms] = " + (endTime - startTime));