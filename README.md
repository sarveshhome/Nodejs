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

If you are having problem in running lite-server command please run these three commands 
then run lite-server.

npm install -g concurrently

npm install -g lite-server

npm install -g typescript


-----------------------------
#Hello.js  will be execute in command prompt
<img src="https://s-media-cache-ak0.pinimg.com/originals/c4/c4/de/c4c4de894799252157ff0446577e2506.png"></img>

-----------------------------------------------------------------

#How to commit files to github
<img src="https://github.com/sarveshhome/Nodejs/blob/master/Pics/gitinitcommit.png"></img>


---------------------------------------------------------------------
#This program used for Calculating Execution Times in JavaScript with console.time and console.timeEnd
``` javascript 
console.time("sarvesh");
for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, i);
    })(i);
}
console.timeEnd("sarvesh");
```
------------------------------------------------------------------------------
or
```javascript
var startTime = new Date().getTime(); 
//your code;
 var endTime = new Date().getTime(); 
 console.log("duration [ms] = " + (endTime - startTime));
 ```
 --------------------------------
 
 ##NPM 
> npm --version
 
> npm install --global --production npm-windows-upgrade

> npm-windows-upgrade

> npm init

##Typing
> npm install -g typings

> typings install dt~node --global

##ESlint
> npm install -g eslint

> eslint --init

##TypeScript
>npm install -g typescript

>npm install -g typescript@next

>tsc -w main.ts


##lite-server
System-wide, using: npm install --global lite-server

Locally to n NPM project, using npm install lite-server --save-dev

#To run:
> lite-server


--------------------------------
##Exress

>npm init

>npm install express --save

>npm install -s typings


```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Express in nodejs ');
})

app.set('port', process.env.PORT || 3001);

var server = app.listen(3001, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("URL listening at http://localhost:", port);
})
```


--------------------------------
##Useful command NPM

 npm install  --save-dev browser-sync
 
 npm install  --save-dev browserify
 
 npm install  --save-dev chai
 
 npm install  --save-dev gulp
 
 npm install  --save-dev gulp-istanbul
 
 npm install  --save-dev gulp-mocha
 
 npm install  --save-dev gulp-sourcemaps
 
 npm install  --save-dev gulp-tslint
 
 npm install  --save-dev gulp-typescript
 
 npm install  --save-dev gulp-uglify
 
 npm install  --save-dev run-sequence
 
 npm install  --save-dev tslint
 
 npm install  --save-dev typescript
 
 npm install  --save-dev vinyl-buffer
 
 npm install  --save-dev vinyl-source-stream
  
 [Express - Node.js web application framework](ExpressPra)

    npm install express --save

    npm install body-parser --save

    npm install cookie-parser --save

    npm install multer --save
