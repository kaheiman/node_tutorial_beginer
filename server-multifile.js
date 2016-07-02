//import this file to server-main.js

//public methods for export mny function
module.exports = {
	newMethod2: function(){
					console.log("this is newMethod2");
				},
	newMethod3: function(){
					console.log("this is newMethod3");
				},
	name: "HelloWorld"
}

//public methods for export 1 function
function newMethod1(){
	console.log("this is newMethod1");
}

//newMethod4 is a private function
function newMethod4(){
	console.log("this is newMethod4");
}

//method1 is public now
module.exports.new1 = newMethod1;