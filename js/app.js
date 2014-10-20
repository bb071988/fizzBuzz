$(document).ready(function(){

	for(x=1;x<101;x++)
		{
			// $('ul').append("<li>" + x +"</li>");

			var f = fizz(x);
			var b = buzz(x);
			var fb = fizzBuzz(x, f, b);
			
			
			$('ul').append("<li>" + fb +"</li>");

		}


});  // end the document ready function


function fizz(myNum)
	{if(myNum % 3 === 0)
		{var fizzFlag = true;}

	else
		{var fizzFlag= false;}

	if(fizzFlag === true)
		{return 'fizz';}

	else {return myNum;}

	}

function buzz(myNum)
	{if(myNum % 5 === 0)
		{var buzzFlag = true;}

	else
		{var buzzFlag= false;}

	if(buzzFlag === true)
		{return 'buzz';}

	else {return myNum;}

	}



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
	} 





