//Chpater 4: Modules - in advance
//Import the function from file server-multifile.js

//require a moudule named server-multifile.js
//./ means the current directories
//require and exports use together 
var multifile = require('./server-multifile.js');

//call the function newMethod1 
multifile.new1();

//new calling method
multifile.newMethod3();
multifile.newMethod2();
console.log(multifile.name);