//import this file to server-main.js
function newMethod1(){
	console.log("this is newMethod1");
}
function newMethod2(){
	console.log("this is newMethod2");
}
function newMethod3(){
	console.log("this is newMethod3");
}
//just like private newMethod2 and newMethod3 and method1 is public now
module.exports.new1 = newMethod1;