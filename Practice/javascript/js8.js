function sp()
{
 //var progress= document.getElementById("progressbar");

 //document.getElementById("progressbar").style.width='300px'; 
 var wid=document.getElementById("progresswid");
 var wid1=wid.options[wid.selectedIndex].text;
 var incu=document.getElementById("incunit");
 var incu1=incu.options[incu.selectedIndex].text;
 var timei=document.getElementById("timeint");
 var timei1=timei.options[timei.selectedIndex].text;
 var wid2=wid1;
// progress.style.width=wid2+'px';
// alert(wid1);
  //alert(incu1);
  // alert(timei1);
 //incp(wid1,incu1,timei1,progress);
 /*innerdiv=document.createElement("div");
innerdiv.style.width="30px";
innerdiv.style.backgroundColor='#D2691E' ;
 progress.appendChild(innerdiv);*/
 var widcount=0;
  var loadper = document.createElement("div"); 
 loadper.innerHTML=+widcount +" %completed";
 loadper.style.color= 'red';
  var divTag = document.createElement("div"); 
   document.body.appendChild(loadper); 
            divTag.id = "div1"; 
 
            //divTag.setAttribute("align", "center"); 
 
            //divTag.style.margin = "0px auto"; 
 
           // divTag.className = "dynamicDiv"; 
 
      /*		   divTag.innerHTML = "This HTML Div tag created "  
                                + "using Javascript DOM dynamically."; */
								
			divTag.style.backgroundColor='#DEB887';		
			divTag.style.width=wid1+'px';
            divTag.style.height="20px";
			divTag.style.display="inline-block";
            document.body.appendChild(divTag); 
			
			/* var innerdivTag = document.createElement("div"); 
			  //innerdivTag.setAttribute("align", "center"); 
			   innerdivTag.style.backgroundColor='#D2691E ';		
			 innerdivTag.style.width=incu1+'px';
             innerdivTag.style.height="20px";
			 innerdivTag.style.display="inline-block";
			   divTag.appendChild(innerdivTag); */
 //progress.style.width=wid; 
 //alert('hi');
 
 incp(wid1,incu1,timei1,divTag,widcount,loadper);
}
function incp(wid1,incu1,timei1,divTag,widcount,loadper)
{


var wid=document.getElementById("progresswid");
 var wid1=wid.options[wid.selectedIndex].text;
 var incu=document.getElementById("incunit");
 var incu1=incu.options[incu.selectedIndex].text;
 var timei=document.getElementById("timeint");
 var timei1=timei.options[timei.selectedIndex].text;
 var wid2=wid1;

  var sloaded=(widcount*100)/wid1;
   var loaded=Number(sloaded);
   loaded=loaded.toFixed(2);
var showloaded;
 loadper.innerHTML=+loaded +" %completed" ;
 if(widcount>=wid1)
 {
  loadper.innerHTML=" 100 %completed" ;
  divTag.style.width=wid1+'px';
  innerdivTag.style.width=wid1+'px';
  alert('hi');
  //clearTimeout(bartime);
return;
  }
  else
  {
var bartime=setTimeout(function(){ 

			
								
			divTag.style.backgroundColor='#DEB887';		
			divTag.style.width=wid1+'px';
            divTag.style.height="20px";
			divTag.style.display="inline-block";
         
 
			   var innerdivTag = document.createElement("div"); 
innerdivTag.style.backgroundColor='#D2691E ';	
 innerdivTag.style.height="20px";
			 innerdivTag.style.width=incu1+'px';
             widcount=+widcount+ +incu1;
			   divTag.appendChild(innerdivTag); innerdivTag.style.display="inline-block";  incp(wid1,incu1,timei1,divTag,widcount,loadper);},timei1*1000);
}
}

function showbutton()
{
var show= document.createElement("button"); 
show.id="progressshow";
show.innerHTML="Show Progess";
show.setAttribute("onclick", "javascript:sp()");
document.body.appendChild(show);
}



