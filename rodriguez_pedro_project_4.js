//alert("JavaScript works!");
//Pedro J Rodriguez
//SDI 1212
//Project 4
//Code Library

var myLibrary = function(){
	
//Is the String a Url?
	var isUrl = function(url){
		var stringUrl = url;
		 if (stringUrl.charAt(4) === "s") {
			 return true + ", it is an https: " ;
		 } else if (stringUrl.charAt(4) === ":") {
		 	 return true + ", it is an http: ";
		 	} else {
		 	return false + ", it is not a valid ";
			 
		 }
		
	};
		
//Does a string follow a pattern like a phone number (123-456-7890)
var checkTheNumber = function(phoneNum){
	var theNumber = phoneNum,
		theRegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
		numCheck;
		
		numCheck = theRegExp.test(theNumber);
	if (numCheck) {
		return true + " that, " + theNumber + " is a valid number."
	} else {
		return false + " that, " + theNumber + " is a valid number."
	}
};


/*	
	// check Numeric Function
	var checkNumeric = function(val){
	
		if(isNaN(val)){
			return false;
			
		} else	{
			return true;
		}
	};
	
	// Name Function
	var areYouLee = function(val){
		if (val === "Lee"){
			return true;
		} else {
			return false;
		}
	}
	
	// Check Pattern Funciton
	var checkString = function(val){
	
		var strLen = val.length;
		for (vari i=0; 1 <= strLen; i++) {
			 if (val.substring(i, i+1) === "-"){
				 return i;
			 }
			 
		}
	};
	
	return {
		"checkNumeric": checkNumeric,
		"areYouLee": 	areYoulee, 
		"checkString": 	checkString 
	}



//stub function 

/*var makeSandwich = function (bread, meat, toppings) {
    // TODO: Fill in working code here that builds a sandwich
    return { };
}*/



return {
	"isUrl": 			isUrl,
	"checkTheNumber":	checkTheNumber 
}

};
//Calling the functions in my library from above.
var newLib = new myLibrary();
var url = "www.mytestpage.com";
var myPhoneNumber = "555-555-5555";

console.log("The entry is " + newLib.isUrl(url) + " URL");
console.log("It is " + newLib.checkTheNumber(myPhoneNumber));






/*console.log("Is this is number? " + newLib.checkNumeric(156));
console.log("is this Lee? " + newlib.areyoulee("Lee"));
console.log("The dash is in position " + newLib.checkstring("123-456"));
*/



//stub function call
/*var pbj = makeSandwich("white", "peanut butter", ["grape jelly"]);
// pbj is an object that will eventually do something useful
*/




