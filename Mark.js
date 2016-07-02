var user = require('./server-object-factory');

var newUser = user();
newUser.name = 'Mark';
console.log("The new user named " + newUser.name);