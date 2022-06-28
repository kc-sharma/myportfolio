import React from 'react'
import Me from "./covers/Me.jpg";
import { Typography } from '@material-ui/core';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

let intervalID;

function Timer() {
 intervalID = setInterval(clock, 1000);
}

function clock() {

var today = new Date();

var date = month[(today.getMonth())]+' '+today.getDate()+' '+today.getFullYear();
parseInt(today.getHours())
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
        <div id="intro" onLoad={Timer()} class = "flex">
            <div class ="flex1">
        <img class= "pirate" src={Me}></img>
        <h1 class="name">Ayush Sharma</h1>
        <h1 class="profession">Web Developer</h1>
        </div>    

        <div class="container">
        <h1 class="h1">Greetings!! Welcome to my JavaScript Arena
        <h1 class="h3"  id ="time" >Clock</h1> 
        </h1>
        
        <div class = "flex3">
        </div>
        
        </div>
        </div>
    )
}

export default Intro
