/*var string = "Hello";
string += " World";
console.log(string + "!");*/

//console.log((5+4) / 3);
//console.log(undefined /5);

/*var x=4,y=4;

if(x==y){
	console.log("x and y are equal");
}

x= "4";
if(x==y){
	console.log("x and y are equal");
}

if(x === y){
	console.log("x and y are equal");
}

else{
	console.log("x and y are not equal");
}*/

/*var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColour  = "blue";
console.log(company);
console.log(company["name"]);

company["Stock of company"] = 110;
console.log(company);*/

//Object Literal

/*var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColour: "blue"
	},
	"Stock of company": 120
};

console.log(facebook);*/

//Function Factory

/*function makeMultiplier(multiplier){
	var myFunc = function(x) {
		return multiplier * x;
	};

	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

function doOperationOn(x,operation){
	return operation(x);
}

var result = doOperationOn(5,multiplyBy3)
console.log(result);*/

//function constructors
/*function Circle(radius){
	this.radius = radius;
}

Circle.prototype.getArea =
function (){
		return Math.PI * Math.pow(this.radius,2);
};


var myCircle = new Circle(10);
console.log(myCircle);*/

//Arrays

/*var array = new Array();
array[0] = "Adnan";
array[1] = "22";
array[2] = function(name){
	console.log("Hello " + name);
}
array[3] = {course: " HTML, CSS & JS"};

console.log(array);*/

