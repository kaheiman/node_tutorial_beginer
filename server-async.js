//Chapter 1 async 
//Concept of async with callback
var callback = function(order){
	console.log("Customer Order: ", order);
	//This is an callback function which will be run after 3 seconds 
	cookAndDeliver(function(){
		console.log("Deliver food order: ", order);
	});
}
//inform the function after 3 seconds
function cookAndDeliver(delivered){
	setTimeout(delivered, 3000);
}
//Everything will be done 
for(var i =0; i <= 6; i++){
	callback(i);
	console.log("This inseide the for loop index: ", i);
}
