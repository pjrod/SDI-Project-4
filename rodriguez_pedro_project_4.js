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

//Title-case a string (split into words, then uppercase the first letter of each word)

String.prototype.toProperCase = function() {
  var stringInput = this.split(' ');
  var changed = [];
  for (var i=0; i < stringInput.length; i++) {
      var letter = stringInput[i].charAt(0).toUpperCase();
      changed.push(letter + stringInput[i].slice(1));
  }
   return changed.join(' ')
};
//Format a number to use a specific number of decimal places, as for money.
var specificNumDec = function(theNumber) {
	var newNumber = theNumber,
		newNumber = theNumber.toFixed(2);
		return theNumber + " is now, " + newNumber;
}

//Given a String Number such as a "42", return value as a number such as 42.
var changeToNumber = function (theString){
	var numInteger = theString,
		result = parseInt(numInteger, 10);
		return theString + " is now, " + result;
}
	return {
		"isUrl": 			isUrl,
		"checkTheNumber":	checkTheNumber,
		"specificNumDec":	specificNumDec,
		"changeToNumber":  	changeToNumber 
}

};
//Calling the functions in my library from above.
var newLib = new myLibrary();
var url = "www.mytestpage.com";
var myPhoneNumber = "555-555-5555";
var theNumber = 2.3457;
var theString = "050";
console.log("The entry is " + newLib.isUrl(url) + " URL");
console.log("It is " + newLib.checkTheNumber(myPhoneNumber));
console.log('pedro j rodriguez'.toProperCase());
console.log(newLib.specificNumDec(theNumber));
console.log(newLib.changeToNumber(theString));
/*console.log("Is this is number? " + newLib.checkNumeric(156));
console.log("is this Lee? " + newlib.areyoulee("Lee"));
console.log("The dash is in position " + newLib.checkstring("123-456"));
*/



//stub function call
/*var pbj = makeSandwich("white", "peanut butter", ["grape jelly"]);
// pbj is an object that will eventually do something useful
*/




