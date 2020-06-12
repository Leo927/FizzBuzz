$(document).ready(function(){
	

	var convertedValues = fizzBuzz(getUserInput());

	convertedValues.forEach(x=>$("ul").append("<li>"+x+"</li>"));
});

function fizzBuzz(values)
{
	var result =[];
	for (var i = 1; i <= values; i++) {

		var temp;
		if(i%3==0 && i%5==0)
		{
			temp = "Fizz Buzz";
		}
		else if(i%3==0)
		{
			temp = "Fizz";
		}
		else if(i%5==0)
		{
			temp = "Buzz";
		}
		else
		{
			temp = i;
		}
		result.push(temp);
	}
	return result;
}

function getUserInput()
{
	var num = prompt("Please enter an integar");
	while(!parseInt(num) || +num%1!=0)
	{
		var num = prompt("Please enter a integar");
	}
	num = +num;
	return num;
}