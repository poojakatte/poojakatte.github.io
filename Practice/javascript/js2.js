
    function generate_table() {
	
	var customer = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m"];
var year=["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013"];
var item=["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","item13"];
var order_count=["103","105","107","85","223","522","122","45","118","229","100","73","125"];
//document.getElementById("get").innerHTML = customer[0];


  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 0; i <=customer.length; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j < 4; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
     if(i==0)
    {
      var cell = document.createElement("th");
     //  var cellText = document.createTextNode("hello world 1");
      //cell.appendChild(cellText);
      row.appendChild(cell);
	  row.style.backgroundColor="blue"; 
	  if(j==0)
	  {
	  cell.innerHTML="Customer";
	  }
	  if(j==1)
	  {
	  cell.innerHTML="Year";
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
	 // document.getElementById("get").innerHTML = customer[i]
     // var cellText = document.createTextNode("helloooo");
	 // new_row.insertCell(i).innerHTML = customer[i];
    //  cell.appendChild(cellText);
      row.appendChild(cell);
	  if(i%2==1)
	  {
	    row.style.backgroundColor="#A89166";
      }
      else
      {
	   row.style.backgroundColor="#F9F9F9";
	  }	  
	  
	if(j==0)
	  {
	  cell.innerHTML=customer[i-1];
	  }
	  if(j==1)
	  {
	  cell.innerHTML=year[i-1];
	  }
	   if(j==2)
	   {
	  cell.innerHTML=item[i-1];
	  }
	   if(j==3)
	   {
	  cell.innerHTML=order_count[i-1];
	  if(order_count[i-1]<100)
	  row.style.backgroundColor="#FBB36B";
	  }
}
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
  tbl.setAttribute("align","center");

}

