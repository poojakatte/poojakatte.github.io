function addrow()
{



var table = document.getElementById("myTable");
var rowLength = table.rows.length;
//check previous records....


//var row = table.insertRow(rowLength);

/*if (!val.match(/^[a-zA-Z]+$/)) 
    {
        alert('Only alphabets are allowed');
        return false;
    }
	*/
	allalpha=0;
	for(i=1;i<rowLength;i++)
	{
	  var inputs = table.rows[i].getElementsByTagName('input');
	  for(j=0;j<inputs.length;j++)
	  {
	  if((inputs[j].value=="")||(inputs[j].value=="null"))
	  {
	   alert('Enter all the fields');
	   return false;
	  }
	  }
	}
	
for(i=1;i<rowLength;i++)
{
var inputs = table.rows[i].getElementsByTagName('input');
for(j=0;j<4;j++)
{
 
//alert(inputs[j].value);
var cell1=table.rows[i].cells[j];
/*if (!inputs[j].value.match(/^[a-zA-Z ]*$/)) 
    {
        alert('Only alphabets are allowed');
        allalpha=1;
		//return false;
    }*/
if(j==3)
{
	var checkdateformat=inputs[j].value;
 //if(!(inputs[j].value==""|| inputs[j].value=="null"))
 //{
    var rs=myFunction(checkdateformat);
	if(rs==false)
	{
	 allalpha=1;
	 //alert(allalpha);
	 return false;
	}
	
	//}
}	
if(j<3)
{var cap=inputs[j].value.toUpperCase().replace(/([^0-9A-Z])/g,"");
//alert(cap);
inputs[j].value=cap;
}


}


}

if(!(allalpha))
{
 var row = table.insertRow(rowLength);
for(i=0;i<4;i++)
{
var cell1 = row.insertCell(i);
var t1=document.createElement("input");
                t1.id = "txtName"+i;
				//cell1.style.text-transform="uppercase";         
	if((i==0) || (i==1))
	{
     t1.setAttribute("onkeypress", "javascript:return IsAlphaNumeric(event)");
	 t1.setAttribute("maxlength","10");
	}				
	if(i==2)
	{
	t1.setAttribute("type","text") ;
	t1.setAttribute("onkeypress", "javascript:return IsNumeric(event)");
	 t1.setAttribute("maxlength","10");
	}
	if(i==3)
	{
	t1.setAttribute("onchange", "javascript:myFunction(this.value)");
	}
	cell1.appendChild(t1);			
}
}
/*var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var t1=document.createElement("input");
                t1.id = "txtName"+1;
                cell1.appendChild(t1);
cell2.innerHTML = "NEW CELL2";
cell3.innerHTML = "NEW CELL1";
cell4.innerHTML = "NEW CELL2";*/
}
function test()
{
alert("testing!");

}
 function IsNumeric(e) {
		  var specialKeys = new Array();
        specialKeys.push(8); //Backspace
            var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1 );
            document.getElementById("error").style.display = ret ? "none" : "inline";
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

