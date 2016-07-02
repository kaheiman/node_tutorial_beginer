//Chpater 3: Modules
//Import the function from file server-multifile.js

//require a moudule named server-multifile.js
//./ means the current directories
//require and exports use together 
var multifile = require('./server-multifile.js');

//call the function newMethod1
multifile.new1();