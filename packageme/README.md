How to publish package in NPM in node.js
----------------------------------------------------------

Create login in https://www.npmjs.com/ 



C:\>cd D:\Sarvesh\Sarvesh\Practice\Nodejs\packageMe

C:\>d:

D:\Sarvesh\Sarvesh\Practice\Nodejs\packageMe>dir
 Volume in drive D has no label.
 Volume Serial Number is E260-A873

 Directory of D:\Sarvesh\Sarvesh\Practice\Nodejs\packageMe

12/28/2016  08:24 AM    <DIR>          .
12/28/2016  08:24 AM    <DIR>          ..
12/28/2016  08:25 AM               120 index.js
12/28/2016  08:24 AM               291 package.json
               2 File(s)            411 bytes
               2 Dir(s)  22,015,885,312 bytes free

D:\Sarvesh\Sarvesh\Practice\Nodejs\packageMe>npm adduser
Username: sarveshkumar
Password:
Email: (this IS public) sarvesh.mca@hotmail.com
Logged in as sarveshkumar on https://registry.npmjs.org/.

D:\Sarvesh\Sarvesh\Practice\Nodejs\packageMe>npm publish
+ packagepub@1.0.0

D:\Sarvesh\Sarvesh\Practice\Nodejs\packageMe>

--------------------------------------------------------------------

#Test Pacakage
This is my test package.

## Installation
`npm install packagepub`

## Usage
```javascript
var numFormatter=require('packagepub');
var formatedNumber= numFormatter(125646);
console.log(formatedNumber);
```