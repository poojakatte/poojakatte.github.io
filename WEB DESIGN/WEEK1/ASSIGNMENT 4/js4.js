function disptxt(x)
{
// change text inside div when clicked
 if (x=='F')
 {
 document.getElementById("changetxt").innerHTML = "<u>Smooth Smith Action</u>: <section id ='intext'>The bar (rated at 800 lb. capacity) slides on Teflon bushings "+
"alongside solid steel guide rods. Smooth motion is key to successful workouts, "+
"as the target muscles are utilized to their full potential with each repetition.</section>"+
"<u>Proper Angle</u>: <section id ='intext'>The bar travels along a 7 degree path from vertical. Studies have "+
"shown that this is the proper lifting angle to increase your comfort and"+
"prevent injury.</section>"+
"<u>Safety</u>:<section id ='intext'> The LSM400 has 20 lock-out points for a safe, solid stop at "+
"any point in your workout routine.</section>"+
"<u>Rugged</u>:<section id ='intext'>Constructed with heavy 12 gauge steel and 7 gauge reinforcing plate. This is "+
"a unit built to last.</section>"+
"<u>Warranty</u>:<section id ='intext'>Every part of the LSM400 has a lifetime guarantee. We will replace "+
"or repair anything that goes wrong.</section>"
 }
 
 if (x=='O')
 {
 document.getElementById("changetxt").innerHTML = "<article>Linear Smith Machines are the ultimate in weight machines and the LSM400 "+
"leads the field. Designed for both serious fitness users and beginners, the "+
"LSM400's vertical design provides all of the safety and control associated "+
"with Smith Machines, while still allowing for the effective use of gravity "+
"for effective resistance. You don't even need a workout partner. Lock points "+
"can be set to prevent the bar from movement outside of your body's natural "+
"range of motion.</article>"+
"<article>You can tailor the LSM400 to meet you specific workout needs. Start with the "+
"basic package of the Smith Machine rack and, as your needs grow, add a "+
"lat/row, pec dec, plate tree, dip, and accessory organizer. Accessories are easy "+
"to insert and remove, allowing you to continue your workout without delay. "+
"The LSM400 works with all standard Olympic weight plates </article> "+ 
"<article>The LSM400 is compact with all components place one side of the unit for easy "+
"access. This makes the LSM400 perfect for people who want a quality home gym, but "+
"do not have a lot of space. Place the LSM400 against a wall and you're ready "+
"to go!</article>"
 }
  if (x=='OA')
 {
 document.getElementById("changetxt").innerHTML = "<ul class = 'litems'><li>Selectorized Lat/Row station (Part: MA831-4)</li>"+
   "<li>Pec Dec station (Part: MA218-6)</li> "+
   "<li>Dip station (Part: MA105-3)</li>"+
   "<li>Plate tree (Part: MA488-0)</li>"+
   "<li>Accessory organizer (MA212-1)</li>"+
   "<li>Workout DVD (MA051-1)</li>"+
   "<li>Workout poster (MA055-3)</li>"+
   "</ul>"
 }
 if (x=='D')
 {
 document.getElementById("changetxt").innerHTML = "<br>Dimensions<br><br>"+
'Width: 85"<br>'+
'Height: 82"<br>'+
'Depth: 72"<br>' 
 }
 if (x=='AU')
 {
 document.getElementById("changetxt").innerHTML = "<br>Body Systems<br>"+
"401 Commercial Drive<br>"+
"Eaton, TX  87015<br>"+
"(800) 555-2811" 
 }
 
}

