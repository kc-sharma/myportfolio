import React from 'react'
import myself from "./covers/Me.jpg";

let intervalID;
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

function Timer() {
 intervalID = setInterval(clock, 1000);
}

function clock() {

var today = new Date();

var date = month[today.getMonth()]+' '+today.getDate()+' '+today.getFullYear();

if (today.getHours()>12)
{
    var time = today.getHours()-12 + ":" + today.getMinutes() + ":" + today.getSeconds() + " PM"; 
}
else
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " AM"; 

var dateTime = date+' '+time;
document.getElementById('time').innerHTML = dateTime;


}
function Intro() {
    return (
        <div onLoad={Timer()} class = "flex">
            <div class ="flex1">
        <img class= "pirate" src={myself}></img>
        <h1 class="name">Ayush Sharma,</h1>
        <h1 class="profession">Web Developer</h1>
        </div>    

        <div class="container">

         <h1 class = "h1">Programmer, Database Manager, UI Designer, Developer
         <h1 class="h3"  id ="time" >Clock</h1> 
         </h1>
          
        
        
        </div>
        </div>
    )
}

export default Intro
