
function myfunction(x)
{
	
	if (x==1)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Prospero</h1>"+
		"<img src='prospero.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>The play's protagonist and Miranda's father. Usurped and exiled by "+
		"his brother Antonio, the duke of Milan.</h2>"
	}
	if (x==2)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Miranda</h1>"+
		"<img src='miranda.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>Prospero's daughter, whom he brought with him to the island "+
		"when she was still a small child. Miranda has never seen any men other than her father and Caliban.</h2>"
	}
	if (x==3)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Ariel</h1>"+
		"<img src='Ariel.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>Prospero's spirit helper, a powerful supernatural being whom Prospero controls "+
		"completely. Rescued by Prospero from a long imprisonment (within a tree) at the hands of the witch Sycorax.</h2>"
	}
	if (x==4)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Caliban</h1>"+
		"<img src='caliban.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>Another of Prospero's servants. Caliban, the son of the now-deceased witch Sycorax, "+ 
		"acquainted Prospero with the island when Prospero arrived. </h2>"
	}
	if (x==5)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Ferdinand</h1>"+
		"<img src='ferninad.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>Son and heir of Alonso, the King of Naples. He falls in love with Miranda and happily submits "+
		"to servitude in order to win her father's approval.</h2>" 
	}
	
	if (x==6)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Alonso</h1>"+
		"<img src='Alonso.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>King of Naples and father of Ferdinand. Alonso aided Antonio in unseating Prospero as duke of Milan "+
		           "twelve years earlier.</h2>"
	}
	if (x==7)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Antonio</h1>"+
		"<img src='Antanio.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>Prospero's thoroughly wicked brother who betrayed Prospero's "+
		"trust and stole his dukedom years before the play begins. </h2>"
	}
	if (x==8)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Sebastian</h1>"+
		"<img src='sebstian.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>Alonso's brother. Like Antonio, Sebastian is wicked and underhanded.</h2>"
	}
	if (x==9)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Gonzalo</h1>"+
		"<img src='Gonzolo.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>An old, honest lord. The goodhearted Gonzalo helped Prospero and Miranda "+
		"to escape and survive after Antonio usurped Prospero's title.</h2>"
	}
	if (x==10)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Trinculo</h1>"+
		"<img src='Trinculo.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>A jester, who provides comic relief along with Stefano.</h2>"
	}
	if (x==11)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Stefano</h1>"+
		"<img src='Stefano.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>A drunken butler who provides comic relief along with Trinculo.</h2>"
	}
	if (x==12)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Adrian</h1>"+
		"<img src='Adrian.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>A lord attending King Alonso of Naples.</h2>"
	}
	if (x==13)
	{
		 document.getElementById("changecharimg").innerHTML="<h1>Francisco</h1>"+
		"<img src='Fran.jpg' id='imgsize' />"
		document.getElementById("changechartxt").innerHTML="<h2>A lord attending King Alonso of Naples.</h2>"

	}
}
function pagefunction2()
{
		var theplay=document.getElementById('theplayid')
		var thecast=document.getElementById('thecastid')
		var thecomt=document.getElementById('comt')
		theplay.style.display= 'none' 
		thecast.style.display = 'block'
		thecomt.style.display = 'none'
	
}

function pagefunction1()
{
	
		var theplay=document.getElementById('theplayid')
		var thecast=document.getElementById('thecastid')
		var thecomt=document.getElementById('comt')
		theplay.style.display= 'block' 
		thecast.style.display = 'none'
		thecomt.style.display = 'none'
	
}

  window.onload = function() {
  // Change this value to however many seconds you want to delay the text by.
  
  var msgtxt = document.getElementById('msg')
	setTimeout(function(){ msgtxt.innerHTML = "<h1>ACT</h1>" },500); 
	setTimeout(function(){ msgtxt.innerHTML = "<h1>ACT III</h1>"},1000); 
	setTimeout(function(){ msgtxt.innerHTML = "<h1>SCENE 3</h1>"},3000);
	var disptxt= "[Enter Alonso, Sebastian, Antonio, Gonzalo, Adrian, Francisco]"
	setTimeout(function(){ msgtxt.innerHTML = disptxt},6000); 
	setTimeout(function(){ msgtxt.innerHTML = "[Enter Alonso, Sebastian, Antonio, Gonzalo, Adrian, Francisco]"},6000); 
	disptxt = disptxt + "<br><br>GONZALO<br>[To ALONSO]<br>"
	setTimeout(function(){ msgtxt.innerHTML = disptxt},6500); 
	disptxt = disptxt + "1&emsp; By'r lakin, I can go no further, sir;<br>"+
						"&emsp;&nbsp; My old bones ache: here's a maze trod indeed<br>"+
						"3&emsp; Through forth-rights and meanders! By your patience,<br>"+
						"&emsp;&nbsp; I needs must rest me."
	setTimeout(function(){ msgtxt.innerHTML = disptxt},7000); 
	 disptxt=disptxt+"<br><br>ALONSO<br>"+
					"&emsp;&nbsp;Old lord, I cannot blame thee,<br>"+
					"5 &emsp;Who am myself attach'd with weariness,<br>"+
					"6 &emsp;To the dulling of my spirits: sit down, and rest.<br>"+
					"7 &emsp;Even here I will put off my hope and keep it<br>"+
					"8 &emsp;No longer for my flatterer: he is drown'd<br>"+
					"&emsp;&nbsp;Whom thus we stray to find, and the sea mocks<br>"+
					"10&emsp;Our frustrate search on land. Well, let him go."
	setTimeout(function(){ msgtxt.innerHTML = disptxt},7500); 
	disptxt = disptxt+"<br><br><button name = 'NEXT' value= 'next' class='nxtbutton' type = 'submit' onclick='gotopg1()'>NEXT </button>"
	
	setTimeout(function(){ msgtxt.innerHTML = disptxt},8000); 

}

function gotopg0(){
	var msgtxt = document.getElementById('msg')
	setTimeout(function(){ msgtxt.innerHTML = "<h1>ACT</h1>" },500); 
	setTimeout(function(){ msgtxt.innerHTML = "<h1>ACT III</h1>"},1000); 
	setTimeout(function(){ msgtxt.innerHTML = "<h1>SCENE 3</h1>"},3000);
	var disptxt= "[Enter Alonso, Sebastian, Antonio, Gonzalo, Adrian, Francisco]"
	setTimeout(function(){ msgtxt.innerHTML = disptxt},6000); 
	setTimeout(function(){ msgtxt.innerHTML = "[Enter Alonso, Sebastian, Antonio, Gonzalo, Adrian, Francisco]"},6000); 
	disptxt = disptxt + "<br><br>GONZALO<br>[To ALONSO]<br>"
	setTimeout(function(){ msgtxt.innerHTML = disptxt},6500); 
	disptxt = disptxt + "1&emsp; By'r lakin, I can go no further, sir;<br>"+
						"&emsp;&nbsp; My old bones ache: here's a maze trod indeed<br>"+
						"3&emsp; Through forth-rights and meanders! By your patience,<br>"+
						"&emsp;&nbsp; I needs must rest me."
	setTimeout(function(){ msgtxt.innerHTML = disptxt},7000); 
	 disptxt=disptxt+"<br><br>ALONSO<br>"+
					"&emsp;&nbsp;Old lord, I cannot blame thee,<br>"+
					"5 &emsp;Who am myself attach'd with weariness,<br>"+
					"6 &emsp;To the dulling of my spirits: sit down, and rest.<br>"+
					"7 &emsp;Even here I will put off my hope and keep it<br>"+
					"8 &emsp;No longer for my flatterer: he is drown'd<br>"+
					"&emsp;&nbsp;Whom thus we stray to find, and the sea mocks<br>"+
					"10&emsp;Our frustrate search on land. Well, let him go."
	setTimeout(function(){ msgtxt.innerHTML = disptxt},7500); 
	disptxt = disptxt+"<br><br><button name = 'NEXT' value= 'next' class='nxtbutton' type = 'submit' onclick='gotopg1()'>NEXT </button>"
	
	setTimeout(function(){ msgtxt.innerHTML = disptxt},8000); 

}



function gotopg1()
{
	
	var msgtxt = document.getElementById('msg')
		    
		    disptxt= "<br><br>ANTONIO<br>"+
					 "&emsp;&nbsp;[Aside to SEBASTIAN]<br>"+
					 "&emsp;&nbsp;I am right glad that he's so out of hope.<br>"+
					 "12&emsp;Do not, for one repulse, forego the purpose<br>"+
					 "&emsp;&nbsp;That you resolved to effect."
			setTimeout(function(){ msgtxt.innerHTML =  disptxt},500); 
			disptxt= disptxt+ "<br>SEBASTIAN <br>"+
					 "&emsp;&nbsp;[Aside to ANTONIO]<br>"+
					 "&emsp;&nbsp;The next advantage Will we take throughly."
			setTimeout(function(){ msgtxt.innerHTML = disptxt },1000); 
			disptxt= disptxt+"<br>ANTONIO<br>"+
					"&emsp;&nbsp;[Aside to SEBASTIAN]<br>"+
					"&emsp;&nbsp;Let it be to-night<br>"+
					"15&emsp;For, now they are oppress'd with travail, they<br>"+
					"&emsp;&nbsp;Will not, nor cannot, use such vigilance<br>"+
					"&emsp;&nbsp;As when they are fresh.<br>"
			setTimeout(function(){ msgtxt.innerHTML = disptxt },2000); 
			disptxt = disptxt+"<br><br><button name = 'NEXT' value= 'next' class='nxtbutton' type = 'submit' onclick='gotopg2()'>NEXT </button>"
			setTimeout(function(){ msgtxt.innerHTML = disptxt },2500); 

}
function gotopg2()
{
	 var msgtxt = document.getElementById('msg')
		 disptxt="<br><br>SEBASTIAN<br>"+
				"&emsp;&nbsp;[Aside to ANTONIO]<br>"+
				"&emsp;&nbsp;I say, to-night: no more.<br>"+
				"<br><br>Solemn and strange music<br><br>"+
				"ALONSO<br>"+ 
				"&emsp;&nbsp;What harmony is this? My good friends, hark!<br>"+
				"GONZALO <br>"+
				"&emsp;&nbsp;Marvellous sweet music!<br>"
		timer=setTimeout(function(){ msgtxt.innerHTML = disptxt},500); 
		//clearTimeout(timer)
		disptxt = disptxt+"<br><br><button name = 'NEXT' value= 'next' class='nxtbutton' type = 'submit' onclick='gotopg3()'>NEXT </button>"
		timer=setTimeout(function(){ msgtxt.innerHTML = disptxt },2500); 
		
}
function gotopg3()
{
	 var msgtxt = document.getElementById('msg')
disptxt="<br>[Enter PROSPERO above, invisible. Enter several strange Shapes,<br> bringing in a banquet; "+
				"they dance about it with gentle actions of <br> salutation;and, inviting the King and company "+
				"to eat, they depart]<br>"+
				"&emsp;&nbsp;ALONSO<br>"+
				"20&emsp;Give us kind keepers, heavens! What were these?<br>"+
				"SEBASTIAN<br>"+
				"21&emsp;A living drollery. Now I will believe<br>"+
				"&emsp;&nbsp;That there are unicorns, that in Arabia<br>"+
				"&emsp;&nbsp;There is one tree, the phoenix' throne, one phoenix<br>"+
				"&emsp;&nbsp;At this hour reigning there.<br>"
timer=setTimeout(function(){ msgtxt.innerHTML = disptxt},1000); 

disptxt= disptxt+"ANTONIO<br>"+
				 "&emsp;&nbsp;I'll believe both;<br>"+
				 "25&emsp;And what does else want credit, come to me,<br>"+
				 "26&emsp;And I'll be sworn 'tis true: travellers ne'er did<br>"+
				 "&emsp;&nbsp;lie,<br>"+
				"&emsp;&nbsp;Though fools at home condemn 'em."
timer=setTimeout(function(){ msgtxt.innerHTML = disptxt},2000); 
//clearTimeout(timer)
disptxt = disptxt+"<br><br><button name = 'NEXT' value= 'next' class='nxtbutton' type = 'submit' onclick='gotopg4()'>NEXT </button>"
		timer=setTimeout(function(){ msgtxt.innerHTML = disptxt },2500); 
}

 function gotopg4()
 {
	 disptxt="<br>GONZALO <br>"+
       "&emsp;&nbsp;If in Naples<br>"+
       "&emsp;&nbsp;I should report this now, would they believe me?<br>"+
       "&emsp;&nbsp;If I should say, I saw such islanders--<br>"+
	   "30&emsp;For, certes, these are people of the island--<br>"+
       "&emsp;&nbsp;Who, though they are of monstrous shape, yet, note,<br>"+
	   "32&emsp;Their manners are more gentle-kind than of<br>"+
       "&emsp;&nbsp;Our human generation you shall find<br>"+
       "&emsp;&nbsp;Many, nay, almost any.<br>"
		timer=setTimeout(function(){ msgtxt.innerHTML = disptxt},1000); 
		disptxt= disptxt+"PROSPERO<br>"+
       "&emsp;&nbsp;[Aside] Honest lord,<br>"+
       "&emsp;&nbsp;Thou hast said well; for some of you there present<br>"+
       "&emsp;&nbsp;Are worse than devils.<br>"
	   timer=setTimeout(function(){ msgtxt.innerHTML = disptxt},3000); 
	   disptxt = disptxt+"<br><br><button name = 'NEXT' value= 'next' class='nxtbutton' type = 'submit' onclick='gotopg0()'>RETURN </button>"

 }
  function commentary()
  {
	  var theplay=document.getElementById('theplayid')
		var thecast=document.getElementById('thecastid')
		var thecomt=document.getElementById('comt')
		theplay.style.display= 'none' 
		thecast.style.display = 'none'
		thecomt.style.display = 'block'
	  
	var msgtxt = document.getElementById('comt')
	
	 disptxt="<h3>Notes on The Tempest</h3>"
	 setTimeout(function(){ msgtxt.innerHTML = disptxt },500); 
	disptxt = disptxt+"ACT III"
	setTimeout(function(){ msgtxt.innerHTML = disptxt},1000); 
	disptxt = disptxt+"<br>SCENE 3<br>"
	setTimeout(function(){ msgtxt.innerHTML = disptxt},2000);

disptxt= disptxt + "The king and his court are weary and despondent. As Prospero watches from "+
				"a viewpoint above the action, they are tormented by the appearance of a feast "+
				"that vanishes from their sight.<br>"+
				"<div style='float:left;'>1.  By'r lakin: a mild form of the oath 'by our Lady'<br>"+
				"3.  forth-rights and meanders: straight paths and winding ways<br>"+
				"5.  attach'd: seized<br>"+
				"6.  dulling: exhaustion<br>"+
				"7.  Even: right<br>"+
				"7.  it: i.e. hope<br>"+
				"8.  flatterer: deceiver<br>"+
				"10. frustrate: useless (stress the first syllable)<br></div>"+
				"<div style='float:left;padding-left:20px'>12. repulse: setback<br>"+
				"15. now ... travail: now that they are fatigued with their efforts<br>"+
				"20. keepers: guardian angels<br>"+
				"21. living drollery: live entertainment<br>"+
				"25. what ... credit: anything else that's believable<br>"+
				"26. travellers ... lie: travellers’ tales are considered notoriously false<br>"+
				"30. certes: certainly<br>"+
				"32. gentle-kind: well-bred</div>"
		setTimeout(function(){ msgtxt.innerHTML = disptxt},3000);

  }
  
