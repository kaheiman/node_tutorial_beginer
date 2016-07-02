//Chapter 2 Prototype

//Creating a user object
var User = function(){
	this.name = "";
	this.hp = 100;
	this.giveHp = function(targetUser){
		targetUser.hp += 1;
		this.hp -= 1;
		console.log(this.name + " gives 1 hp to" + targetUser.name);
	};
}

//Create multi users
var Marcus = new User();
var Mark = new User();
Marcus.name = "Marcus";
Mark.name = "Mark";
console.log("Marcus Hp:" + Marcus.hp);
console.log("Mark Hp:" + Mark.hp);
//Marcus give 1 hp to Mark
Marcus.giveHp(Mark);
console.log("Marcus Hp:" + Marcus.hp);
console.log("Mark Hp:" + Mark.hp);

//Prototype: to add new properties or function to User object
//minus 3 hp when head is attacked
User.prototype.attackHead = function(targetUser){
	 targetUser.hp -= 3;
	 console.log("-------------------");
	 console.log(targetUser.name + "is being attacked by " + this.name);
	 console.log(targetUser.name + " 's hp only " + targetUser.hp + " left.");
};
//Marcus attack Mark
Marcus.attackHead(Mark);
//Add Magic Properties
User.prototype.magic = 80;
console.log("Marcus Magic:" + Marcus.magic);
console.log("Mark Magic:" + Mark.magic);