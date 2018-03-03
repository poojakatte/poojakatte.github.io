
$(document).ready(function()
  {$("#txt").val('hiiii');
  
  $("#start").click(function(){
   if($(this).val()=="Start")
  {
   $("#start").prop('value', 'Stop');
   $("#box").animate({ width: '100%' }, 10000);
  }
else
{
  $("#start").prop('value', 'Start');
 $("#box").stop();
}
    
  });
 
  
  $("#reset").click(function(){
   $("#box").stop();
    $("#box").width('0%');
	 $("#start").prop('value', 'Start');
  });
  


});