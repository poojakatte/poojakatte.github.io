
/*function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}*/
   /* function allnumeric(inputtxt)  
       {  
          var numbers = /^[0-9]+$/;  
          if(inputtxt.value.match(numbers))  
          {  
          alert('Your Registration number has accepted....');  
          document.quantity.focus();  
          return true;  
          }  
          else  
          {  
          alert('Please input numeric characters only');  
          document.quantity.focus();  
          return false;  
          }  
       }   */
	   
	  
       var flag=0;
function filled()
{ 
 
 var rowsfilled=0;
  var y=document.getElementById("table1");
 
var table = document.getElementById('table1');

var rowLength = table.rows.length;

var table = document.getElementById('table1');

var inputs = table.getElementsByTagName('input');
var selects = table.getElementsByTagName('select');
var fields=0;
var notfilledany=0;
for(i=1;i<rowLength;i++)
{
 fields=0;
  var row = table.rows[i];
  var inputs = row.getElementsByTagName('input');
  var selects = row.getElementsByTagName('select');
  
  for (var j = 0; j < inputs.length; j++) 
  {
    
	if(inputs[j].value)
	{
        notfilledany=1;
          fields++;
		  //alert(fields);
		  }
  }
  for(var j=0;j< selects.length;j++)
   { if(selects[j].value)
          {
		 notfilledany=1;
		  fields++;
   //alert(fields);
   
   }
   }
    if(fields==4)
	rowsfilled++;
  if(fields > 0 && fields < 4 )
  {
   alert('Enter all feilds of records'+i);
   flag==1;
   inputs[j].select();
   return false;
   }
   
   
}

 if(notfilledany==0)
  {
   alert('Enter atleast one record.');
   flag==1;
   //inputs[j].select();
   return false;
   }
    //date
 var dates = document.getElementsByName('date');
for(i=0;i<dates.length;i++)
{
 var checkdateformat=dates[i].value;
 if(!(dates[i].value==""|| dates[i].value=="null"))
 {
    var rs=myFunction(checkdateformat) ;
	if(rs==false)
	{
	 return false;
	}
	
	}
}
 
 /*if(flag!=1)
 {
// alert('craeting table');
 //alert('hi');
//document.getElementById("orderform").method="GET";
//document.getElementById("orderform").action="GenerateTable.html";
/*var table = document.getElementById('table1');

var rowLength = table.rows.length;

var table = document.getElementById('table1');

//var inputs = table.getElementsByTagName('input');
//var selects = table.getElementsByTagName('select');

var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");
for(i=0;i<=rowsfilled;i++)
{

  var roww = table.rows[i];
  var inputs = roww.getElementsByTagName('input');
  var selects = roww.getElementsByTagName('select');
  
    var row = document.createElement("tr");
  for (var j = 0,k=0; j < 4; j++) 
  {
	 if(i==0)
    {
      var cell = document.createElement("th");
      row.appendChild(cell);
	  row.style.backgroundColor="blue"; 
	  if(j==0)
	  {
	  cell.innerHTML="Customer";
	  }
	  if(j==1)
	  {
	  cell.innerHTML="Item Ordered";
	  }
	   if(j==2)
	   {
	  cell.innerHTML="Item";
	  }
	   if(j==3)
	   {
	  cell.innerHTML="Order Count";
	  }
    }
	
else
{
      var cell = document.createElement("td");
      row.appendChild(cell); 
	if(j==0)
	  { //alert(inputs[k].value);
	  cell.innerHTML=inputs[k++].value;
	  
	  }
	  if(j==1)
	  {
	  cell.innerHTML=selects[0].value;
	  }
	   if(j==2)
	   {
	  cell.innerHTML=inputs[k++].value;
	  }
	   if(j==3)
	   {
	   cell.innerHTML=inputs[k++].value;
	  }
}
 
		 
  }
  tblBody.appendChild(row);
}
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
  tbl.setAttribute("align","right");

 
 }*/
 
 
 
 
}

 function IsAlphaNumeric(e) {
var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right
       
            var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
            var ret = ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
            document.getElementById("error2").style.display = ret ? "none" : "inline";
            return ret;
        }



function  myFunction(dateStr) {
// Checks for the following valid date formats:
// MM/DD/YY   MM/DD/YYYY   MM-DD-YY   MM-DD-YYYY
// Also separates date into month, day, and year variables

var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;

// To require a 4 digit year entry, use this line instead:
// var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;

var matchArray = dateStr.match(datePat); // is the format ok?
if (matchArray == null) {
alert("Date is not in a valid format.")
return false;
}
month = matchArray[1]; // parse date into variables
day = matchArray[3];
year = matchArray[4];
if (month < 1 || month > 12) { // check month range
alert("Month must be between 1 and 12.");
return false;
}
if (day < 1 || day > 31) {
alert("Day must be between 1 and 31.");
return false;
}
if ((month==4 || month==6 || month==9 || month==11) && day==31) {
alert("Month "+month+" doesn't have 31 days!")
return false
}
if (month == 2) { // check for february 29th
var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
if (day>29 || (day==29 && !isleap)) {
alert("February " + year + " doesn't have " + day + " days!");
return false;
   }
}
else
{
 //return filled();
return true;  // date is valid
}
}

 function IsNumeric(e) {
		  var specialKeys = new Array();
        specialKeys.push(8); //Backspace
            var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1 );
            document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
        }
