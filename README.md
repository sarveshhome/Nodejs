# Nodejs


You can use following links to download prerequisite softwares to use Nodejs:

1. Node.js - https://nodejs.org/en/
2. Visual Studio Code - http://code.visualstudio.com/
3. MongoDB - https://www.mongodb.com/
4. MongoChef - http://3t.io/mongochef/download/core/platform
5. Git for windows - https://git-scm.com/download/win

--------------------------------------------------------

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

-----------------------------------------------------------------

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
//your code;
 var endTime = new Date().getTime(); 
 console.log("duration [ms] = " + (endTime - startTime));
 
 --------------------------------
 
 #NPM Install
 
> npm install --global --production npm-windows-upgrade

> npm-windows-upgrade

> npm init

#Typing
> npm install -g typings

> typings install dt~node --global

#ESlint
> npm install -g eslint

> eslint --init
