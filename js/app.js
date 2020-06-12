$(document).ready(function(){
	for (var i = 1; i <= 100; i++) {

		var output;
		if(i%3==0 && i%5==0)
		{
			output = "Fizz Buzz";
		}
		else if(i%3==0)
		{
			output = "Fizz";
		}
		else if(i%5==0)
		{
			output = "Buzz";
		}
		else
		{
			output = i;
		}
		$("ul").append("<li>"+output+"</li>");
	}
})