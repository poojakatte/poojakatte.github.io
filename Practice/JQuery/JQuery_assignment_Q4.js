$(function() {
		$( "#datepicker" ).datepicker({ 
		dateFormat: 'MM d, yy', altField: '#datepicker', altFormat: 'mm/dd/yy'
		});
	});
$(document).ready(function()
{
 /*$('#fname').focus();
$('#fname').keyup(function()
	{
	  var nam=$('#fname').val();
	  //alert(nam);

		if(!(nam.match(/(^[a-zA-Z]+$)/g)))
		{
		alert("Please Enter only Alphabets");
		this.value = this.value.replace(/[^a-zA-Z]+$/g, '');
		}
	
	})	
	
	$('#lname').keyup(function()
	{
	  var nam=$('#lname').val();
	  //alert(nam);
		if(!(nam.match(/(^[a-zA-Z]+$)/)))
		{
		//alert("Please Enter only Alphabets");
		this.value = this.value.replace(/[^a-zA-Z]/g, '');
		}
	
	})	
	
	$('#uname').keyup(function()
	{
	  var nam=$('#uname').val();
	  //alert(nam);
		if(!(nam.match(/(^[a-zA-Z]+$)/)))
		{
		//alert("Please Enter only Alphabets");
		this.value = this.value.replace(/[^a-zA-Z]/g, '');
		}
	
	})	
	*/
	
	/*
	 $('[name="alpha"]').keypress(function (event) {

        var key = event.which || event.keyCode; //use event.which if it's truthy, and default to keyCode otherwise

        // Allow: backspace, delete, tab, and enter
        var controlKeys = [8, 9, 13];
        //for mozilla these are arrow keys
        if ($.browser.mozilla) controlKeys = controlKeys.concat([37, 38, 39, 40]);

        // Ctrl+ anything or one of the conttrolKeys is valid
        var isControlKey = event.ctrlKey || controlKeys.join(",").match(new RegExp(key));

        if (isControlKey) {return;}

        // stop current key press if it's not a number
        if (!((65 <= key && key <= 90) || (97 <= key && key <= 192))) {
		alert("Only Alphabets");
            event.preventDefault();
            return;
        }
    });

/*$('#fname').keyup(function () {
    //to allow decimals,use/[^0-9\.]/g 
   // var regex = new RegExp(/(^[a-zA-Z]+$)/);
	var nam=$('#fname').val();
    //var containsNonNumeric = this.value.match(regex);
    if (!(nam.match(/(^[a-zA-Z]+$)/)))
	{
       //alert("Please Enter only Alphabets");
		this.value = this.value.replace(/[^a-zA-Z]/g, '');
		
	}
});*/
/*$('[name="pno"]').keypress(function (event) {

        var key = event.which || event.keyCode; //use event.which if it's truthy, and default to keyCode otherwise

        // Allow: backspace, delete, tab, and enter
        var controlKeys = [8, 9, 13];
        //for mozilla these are arrow keys
        if ($.browser.mozilla) controlKeys = controlKeys.concat([37, 38, 39, 40]);

        // Ctrl+ anything or one of the conttrolKeys is valid
        var isControlKey = event.ctrlKey || controlKeys.join(",").match(new RegExp(key));

        if (isControlKey) {return;}

        // stop current key press if it's not a number
        if (!(48 <= key && key <= 57)) {
		//alert("Only Alphabets");
            event.preventDefault();
            return;
        }
    });*/
	


/*$('[name="pno"]').keyup(function () {

 var phno=$('[name="pno"]').val();
if(!(phno.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)))
{
alert('hi');
}
	});*/
	

//$("#datepicker").datepicker({ });
  jQuery.validator.setDefaults({
debug: true,
success: "valid"
});

/*jQuery.validator.addMethod("alphanumeric", function(value, element) {
    return !jQuery.validator.methods.required(value, element) || /^[a-zA-Z0-9_]+$/i.test(value);
}
, "Letters, numbers or underscores only please");*/
  /*
    $("#myform").validate({
	
  rules: {
    field: {
     // required: true,
     phoneUS: true
    },
	  email1: {
      //required: true,
     email: true
    },
	 falpha : 
	 {
      // required: true,	 
	 lettersonly: true
	 },
	 lalpha : 
	 { 
	//  required: true,
	 lettersonly: true
	 },
	 ualpha : 
	 { 
	 // required: true,
	 lettersonly: true
	 },
	country:
	{
	//required:true
	}
  }
});*/

/*
$("#field").blur(function(){
$('#myform').valid();
});

 $("#email1").blur(function(){
$('#myform').valid();
});
 $("#falpha").keyup(function(){
$('#myform').valid();
});
 $("#lalpha").keyup(function(){
$('#myform').valid();
});
 $("#ualpha").keyup(function(){
$('#myform').valid();
});*/



$( "#myform" ).validate({
rules: {
field: {
     required: true,
     phoneUS: true
    },
email1: {
required: true,
email: true
},
falpha : 
	 { required: true,	 
	 lettersonly: true
	 },
	 lalpha : 
	 {   required: true,
	 lettersonly: true
	 },
	 ualpha : 
	 { required: true,
	 lettersonly: true
	 },
	country:
	{required:true
	},
	dat:
	{
	date:true
	}
}
});

$("#sub").click(function(){
  //alert('hi');
  if(!($('#myform').valid()))
  alert('Please check ');
else
  alert('Validated form');
});
      
	  $("#tog").click(function(){
  //alert('hi');
  if($(this).val()=="disable")
  {
   $("#tog").prop('value', 'enable');
   	 //$(this).val()="enable";
  //alert(("#tog").attr("value"));
    $('.en').prop('disabled', true);
	 $('.customDateValidator').prop('disabled', true);
  }
  else
  {
   $("#tog").prop('value', 'disable');
   	 //$(this).val()="enable";
  //alert(("#tog").attr("value"));
    $('.en').prop('disabled', false);
	 $('.customDateValidator').prop('disabled', false);
  }
});
	
    
 
  
  });

 


  
