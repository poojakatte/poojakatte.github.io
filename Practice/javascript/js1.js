function checkboxes()
      {
var inputElems = document.getElementsByTagName("input");
 var rad=document.getElementsByName("gen");
  var rad_count=rad.length;
  var chckbx=document.getElementsByName("lang");
  var chckbx_count=chckbx.length;
  var txtarea = document.getElementsByTagName("textarea");
  var txtarea_count=txtarea.length;
  var slct = document.getElementsByTagName("select");
  var slct_count=slct.length;
  
control_count=0;
btn_count = 0;
txt_count = 0;
hide_count=0;
for (var i=0; i<inputElems.length; i++)
 {
 control_count++;
if(inputElems[i].type=="button")
    {btn_count++;}
	if(inputElems[i].type=="text")
    {txt_count++;}
	if(inputElems[i].type=="hidden")
    {hide_count++;}
	
	
  
}
 
control_count=chckbx_count+rad_count-2+control_count;
 
 
   alert('No of controls:'+control_count+'\nNo of Radio button:'+rad_count+'\n No of Check Box:'+chckbx_count+'\nNo. of button:'+btn_count+'\nNo. of text:'+txt_count+'\nNo. of textarea:'+txtarea_count+'\n No. of drop down list:'+slct_count+'\n No. of hidden fields:'+hide_count);
}

/*function rowhide()
{
 var result_style = document.getElementById('rowhide').style;
result_style.display = none;
}*/
/*

  document.getElementById("rowhide").style.visibility="hidden";
}
  var droplist = document.getElementsById("selectstyle");
  var droplist_count=droplist.length;
//+'\nNo of Drop down list:'+droplist_count+'\nNo. of buttons:'+btn_count*/