"use strict";

function checkInput(input){
	var nameList = input.replace(/\s/g,'');
	var strReverse = nameList.split('').reverse().join(''); 
	if (nameList === strReverse){
		alert(input + " is a Palindrome!!");
	}else {
		alert(input + " is NOT a Palindrome.")
	}
		main();
	
}


function main(){
	var message;
	var input;
	
	message = "What would you like to check?"
	input = prompt(message);

	checkInput(input);
}

main();
