$(document).ready(function(){

	var inputLoop = true;
	var userMessage = "Please enter a whole number to FizzBuzz up to";

	while(inputLoop === true)  // loop takes input until an integer can be identified in string
	{
		var userVal = prompt(userMessage);

		var c = checkVal(userVal);
		console.log(c);

		if(isNaN(c))
		{inputLoop = true;
			userMessage = "Sorry - that's not a number: \n Please enter a whole number to FizzBuzz up to";
			// Changes the message if input is not a whole number.
		}

		else
			{inputLoop = false;}

	}


	for(x=1; x <= c ;x++)
		{
			var f = fizz(x);
			var b = buzz(x);
			var fb = fizzBuzz(x, f, b);
			
			
			$('ul').append("<li>" + fb +"</li>");

		}


});  // end the document ready function


function fizz(myNum)
	{if(myNum % 3 === 0)
		{return 'fizz';}

	else {return myNum;}

	};

function buzz(myNum)
	{if(myNum % 5 === 0)
		{return 'buzz';}

	else {return myNum;}

	};



function fizzBuzz(myNum, fizz, buzz)
	{
		if(fizz === 'fizz' && buzz ==='buzz')
			{return 'fizzbuzz';}

		if(fizz==='fizz')  // order is important as && will not eval buzz if fizz is false.
			{return 'fizz';}

		if(buzz==='buzz')
			{return 'buzz';}

		else
			{return myNum;}
	} ;


function checkVal(userVal)
	{
		return parseInt(userVal);

		// extracts integer from decimal numbers or text - returns NaN if no integer in the string.
		// could add a round function or other input validation here if desired.

	};




