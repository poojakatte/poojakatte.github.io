 function IsNumeric(e) {
		  var specialKeys = new Array();
        specialKeys.push(8); //Backspace
            var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1 );
            document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
        }
function validatecc()
{

 var inputs=document.getElementsByTagName("input");
 textlen=0;

 for(cntinp=0;cntinp<inputs.length;cntinp++)
 {
textlen=+inputs[cntinp].value.length+ +textlen;

}
//alert(textlen);

if(textlen!=16)
{
 alert("Enter a valid 16 digit number");
 return false;
}
//else
str=inputs[0].value+inputs[1].value+inputs[2].value+inputs[3].value;
//alert(str);
var revstr=str.split("").reverse();
//alert(revstr);
for(cntrev=0;cntrev<revstr.length;cntrev++)
{
revstr[cntrev] = parseInt(revstr[cntrev], 10);
}
//alert(revstr);
for(altdouble=0;altdouble<revstr.length;altdouble++)
{
     if(altdouble%2==1)
	 revstr[altdouble]=revstr[altdouble]*2;
}
//alert(revstr);
var addrev=revstr.join("");
//alert(addrev);
var addrev1=addrev.split("");
//alert(addrev1);
total=0;
for(cntrev=0;cntrev<addrev1.length;cntrev++)
{
addrev1[cntrev] = parseInt(addrev1[cntrev], 10);
total=+total+ +addrev1[cntrev];
}
//alert(total);
if(total%10==0)
{
alert("Valid Credit Card no");
}
else
{
alert("Invalid Credit Card no");
}
}

function check1()
{
var letters = document.getElementById("num1").value.length+1;
//alert(letters);
if (letters <= 4)
{document.getElementById("num1").focus();}
else
{document.getElementById("num2").focus();}
}


function check2()
{
var letters2 = document.getElementById("num2").value.length+1 ;
if (letters2 <= 4)
{document.getElementById("num2").focus();}
else
{document.getElementById("num3").focus();}
}


function check3()
{
var letters3 = document.getElementById("num3").value.length+1 ;
if (letters3 <= 4)
{document.getElementById("num3").focus();}
else
{document.getElementById("num4").focus();}
}


function check4()
{
var letters4 = document.getElementById("num4").value.length+1;
if (letters4 <= 4)
{document.getElementById("num4").focus();}
else
{document.getElementById("generate").focus();}
}

function focusing()
{var foc=document.getElementById("num1").focus();

}