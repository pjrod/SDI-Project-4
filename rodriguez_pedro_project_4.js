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
//Find the Smallest value in an array that is greater than a given number.

var smllValue = function (theArray, input){
	var lgNum = [],
		smllNum;
	for (i = 0; i < theArray.length; i++){
		if (theArray[i] > input) {
			lgNum.push(theArray[i]);
		}
	}
	
	smllNum = lgNum[0];
	
	for (n = 0; n < lgNum.length; n++){
		if (smllNum > lgNum[n]) {
			smllNum = lgNum[n];
			
		}
	}return "If given the number " + input + " the next number grater in the array " + theArray + " is " + smllNum;
	
}


	return {
		"isUrl": 			isUrl,
		"checkTheNumber":	checkTheNumber,
		"specificNumDec":	specificNumDec,
		"changeToNumber":  	changeToNumber, 
		"smllValue":		smllValue 
}

};

//Calling the functions in my library from above.

var newLib = new myLibrary();
var url = "www.mytestpage.com";
var myPhoneNumber = "555-555-5555";
var theNumber = 2.3457;
var theString = "050";
var theArray = [5,9,10,13,15,18,20];
var input = 12;

console.log("The entry is " + newLib.isUrl(url) + " URL");
console.log("It is " + newLib.checkTheNumber(myPhoneNumber));
console.log('pedro j rodriguez'.toProperCase());
console.log(newLib.specificNumDec(theNumber));
console.log(newLib.changeToNumber(theString));
console.log(newLib.smllValue(theArray,12));



