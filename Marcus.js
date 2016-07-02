var user = require('./server-object-factory');

var newUser = user();
newUser.name = 'Marcus';
console.log("The new user named " + newUser.name);