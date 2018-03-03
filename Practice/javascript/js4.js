function timenw()
{
var selectss=document.getElementsByTagName('select');
				var intervals=selectss[0].value;
				var count=30/intervals;
				timenow(count);
			//	alert('out');
}
function timenow(count)
{

var currentdate = new Date(); 
var datetime = currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
				//datetime.style.color=red;
				var selects=document.getElementsByTagName('select');
				var interval=selects[0].value;
				interval=interval*1000;
				document.getElementById("write").innerHTML = datetime;
			  //var new_interval=(30/interval)*1000;
			 if(count!=0)
			 calltime(datetime,interval,count);

			 
			//	 setTimeout(function(){document.getElementById("write").innerHTML = datetime;timenow();},3000);
//document.getElementById("write").innerHTML = datetime;
//return datetime;
}
function calltime(datetime,interval,count)
{
var showtime=setTimeout(function(){document.getElementById("write").innerHTML = datetime;count--;timenow(count);},interval);
}

var countdown;
var countdown_number;

function countdown_init() {
    countdown_number = 11;
    countdown_trigger();
	
}

function countdown_trigger() {
var selects=document.getElementsByTagName('select');
				var interval=selects[0].value;
				 var new_interval=(30/interval)*1000;
var currentdate = new Date(); 
var datetime = currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    if(countdown_number > 0) {
        countdown_number--;
        document.getElementById('countdown_text').innerHTML = datetime;
        if(countdown_number > 0) {
            countdown = setTimeout('countdown_trigger()', new_interval);
        }
    }
}

function countdown_clear() {
    clearTimeout(countdown);
}