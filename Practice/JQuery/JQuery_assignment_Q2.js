$(document).ready(function()
{
	/*
		assigning keyup event to password field
		so everytime user type code will execute
	*/

	$('#password').keyup(function()
	{
		$('#result').html(checkStrength($('#password').val()))
	})	
	
	function checkStrength(password)
	{
		//initial strength
		var strength = 0
		
		//if the password length is less than 6, return message.
		if (password.length < 8) { 
			$("div").css("background-color", "orange");
			$('#result').removeClass()
			$('#result').addClass('weak')
			return 'Weak' 
		}
		if (password.length >8) { 
		    
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && password.match(/([0-9])/) && password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) 
		{ //alert('strong');
	$("div").css("background-color", "green");
	$("div").css("width", "160px");
		$('#result').removeClass()
			$('#result').addClass('strong')
			return 'Strong' 
		}
		
		//else
		$("div").css("background-color", "blue");
		$("div").css("width", "80px");
			$('#result').removeClass()
			$('#result').addClass('medium')
			return 'Medium' 
		}
		
    }
});