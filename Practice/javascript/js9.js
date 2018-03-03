function validate(number1)
{
//var number1=document.getElementById("num").value;
//alert(number);
var result=isNaN(number1);
var count1=0;
var count2=0;
var  ascc=parseInt(number1);
if(!result)
{
//alert(number1);
for(var i=0,k=0;i<4;i++,k++)
 {
     if(number1[0]==number1[i])
     count1++;
	 if(number1[1]==number1[i])
     count2++;
	// alert(number1[i]); 
 }
 if((count1>=3) || (count2>=3)) 
{
 alert(" Please Enter a 4 Digit number with minimum two digits same ");
 return false;
}
if(number1.length<4)
{
alert("Please Enter a 4 Digit number with minimum two digits same");
return false;
}


//alert('hi');
var str = number1;
var arr = str.split("");
var arr1 = str.split("");
//var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  // alert(arr[i]);
}
//var arr1=arr;
//alert(arr);
//alert(arr1);
//var a1=parseInt(number1);
arr.sort( function(a,b) { return b - a; } );//dec
arr1.sort( function(a,b) { return a - b; } );//asc


//arr.reverse();
 //alert(arr);
//alert(arr1);
//alert(a1);

for(var i=0; i<arr.length;i++) 
{
arr[i] = parseInt(arr[i], 10);

//arryasc[i] = +arryasc[i];
}
num1=0;
for(i=0,j=arr.length;i<arr.length;i++,j--)
{
place=arr[i]*Math.pow(10,j)
num1=+place+ +num1;
}
num1=num1/10;
for(var i=0; i<arr1.length;i++) 
{
arr1[i] = parseInt(arr1[i], 10);
//arryasc[i] = +arryasc[i];
}
//var a1=parseInt(arr);
//var a2=parseInt(arr1);
num2=0;
for(i=0,j=arr1.length;i<arr1.length;i++,j--)
{
place=arr1[i]*Math.pow(10,j)
num2=+place+ +num2;
}
num2=num2/10;
//alert(arr1);
//alert(arr);
//alert(num1);
//alert(num2);
//alert(a2);
sub=num1-num2;
/*var body=documnet.getElementsByTagName("body");
var d=document.createDocumentFragment();
var para=documnet.getElementsByTagName("p");
para.innerHTML="hello";
d.appendChild(para);
 body.appendChild(d);*/

while(sub!=6174)
{
sub=kaprekarsc(sub);
}
var temp;
//using arr and arr1 to generate kaprekars constant
alert(sub);


}
if(result)
{
alert("Please Enter a $ digit number");
}
}
function kaprekarsc(sub)
{

 
   sub1=sub.toString();
   var sub2 = sub1.split("");
   var sub3 = sub1.split("");
   
   sub2.sort( function(a,b) { return b - a; } );//dec
   sub3.sort( function(a,b) { return a - b; } );//asc
 
//sub.sort( function(a,b) { return b - a; } );
//alert(sub2);
//alert(sub3);
for(var i=0; i<sub2.length;i++) 
{
sub2[i] = parseInt(sub2[i], 10);
//arryasc[i] = +arryasc[i];
}
//alert(sub2[i-1]);
num1=0;
for(i=0,j=sub2.length;i<sub2.length;i++,j--)
{
place=sub2[i]*Math.pow(10,j)
num1=+place+ +num1;
}
num1=num1/10;

for(var i=0; i<sub3.length;i++) 
{
 sub3[i] = parseInt(sub3[i], 10);
//arryasc[i] = +arryasc[i];
}
//var a1=parseInt(arr);
//var a2=parseInt(arr1);
num2=0;
for(i=0,j= sub3.length;i<sub3.length;i++,j--)
{
place=sub3[i]*Math.pow(10,j)
num2=+place+ +num2;
}
num2=num2/10;
//alert(arr1);
//alert(arr);
//alert('hi');
//alert(num1);
//alert(num2);


return(num1-num2);
}

 function IsNumeric(e) {
		  var specialKeys = new Array();
        specialKeys.push(8); //Backspace
            var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1 );
            document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
        }
