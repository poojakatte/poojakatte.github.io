/*function parsing()
{
text = document.getElementById( "xmldoc" ).value;

//to parse it

var doc = new DOMParser().parseFromString( text, "text/xml" );
var documentElement = doc.documentElement;
alert(documentElement.getElementsByTagName("streetNumber")[0].childNodes[0].nodeValue);

}*/


function parsingg()
{
 //document.frames.b.location.href="js5right.html";
 
 var tbl     = document.getElementById("xmltable");
var rowLength = tbl.getElementsByTagName("tr").length;
//var thlength=tbl.getElementsByTagName("th").length;
//alert(rowLength);
//alert(thlength);
if(rowLength)
{
for(var j=rowLength;j>=0;j--)
{
//alert(j);
tbl.deleteRow(j);
 }
 }
text = document.getElementById( "xmldoc1" ).value;

//to parse it

var doc = new DOMParser().parseFromString( text, "text/xml" );
var documentElement = doc.documentElement;
//alert('hi');
//var namexml=documentElement.getElementsByTagName("name");
//var namexml=documentElement.getElementsByTagName("price");
//var desxml=documentElement.getElementsByTagName("description");
//var calxml=documentElement.getElementsByTagName("calories");

//alert(namexml[0].childNodes[0].nodeValue);
 //document.write(namexml[0].nodeName);

 
/*var x=documentElement.childNodes;
for (i=0;i<x.length;i++)
{ 
if (x[i].nodeType==1)
  {//Process only element nodes (type 1) 
  document.write(x[i].nodeName);
  document.write("<br>");
  } 
  
}*/
var doce=documentElement;
/*alert(documentElement.parentNode.nodeName);
alert(documentElement.parentNode.nodeType);
alert(documentElement.children[0].nodeName);
alert(documentElement.children[0].children[0].nodeName);
alert(documentElement.children[0].children[0].firstChild.nodeValue);
alert(documentElement.nodeName);*/
var title=documentElement.nodeName;
//div2=document.getElementsById("write");
//alert(title);
//var para = document.createElement("p");
//para.innerHTML=title;
//div2.appendChild(para);

var body = document.getElementById("write1");
 
  // creates a <table> element and a <tbody> element
  //var tbl     = document.getElementById("xmltable");
 // var tblBody = document.createElement("tbody");
 var captable = tbl.createCaption();
//var title="hello";
captable.innerHTML = title;
 
   var row = document.createElement("tr");
for(i=0;i<4;i++)
{
  var cell = document.createElement("th");
  row.appendChild(cell);
	  cell.innerHTML=documentElement.children[i].children[i].nodeName;
//alert(documentElement.children[i].children[i].nodeName);
}
 tbl.appendChild(row);
for(i=0;i<5;i++)
{
 var row = document.createElement("tr");
 for(j=0;j<4;j++)
 {
  var cell = document.createElement("td");
  row.appendChild(cell);
cell.innerHTML=documentElement.children[i].children[j].firstChild.nodeValue;
}
 tbl.appendChild(row);
}

 // tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
   tbl.setAttribute("width", "400");
  //tbl.setAttribute("align","center");
/*xmlDoc=doce;

document.write("Nodename: " + xmlDoc.nodeName);
document.write(" (nodetype: " + xmlDoc.nodeType + ")<br>");

x=xmlDoc.documentElement;

document.write("Nodename: " + x.nodeName);
document.write(" (nodetype: " + x.nodeType + ")<br>");

y=x.childNodes;

for (i=0;i<y.length;i++)
{
document.write("Nodename: " + y[i].nodeName);
document.write(" (nodetype: " + y[i].nodeType + ")<br>");
for (z=0;z<y[i].childNodes.length;z++)
  {
  document.write("Nodename: " + y[i].childNodes[z].nodeName);
  document.write(" (nodetype: " + y[i].childNodes[z].nodeType + ")<br>");
  }
}
*/

}

function body1()
{

  // creates a <table> element and a <tbody> element

}

