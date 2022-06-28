import React from 'react'
import myself from "./covers/Me.jpg";
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';

import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';

//clock

let intervalID;
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

function Timer() {
 intervalID = setInterval(clock, 1000);
}

function clock() {

var today = new Date();

var date = month[today.getMonth()]+' '+today.getDate()+' '+today.getFullYear();
parseInt(today.getHours())
if (today.getHours()>12)
{
    var time = today.getHours()-12 + ":" + today.getMinutes() + ":" + today.getSeconds() + " PM"; 
}
else{
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " AM"; }
var dateTime = date+' '+time;
document.getElementById('time').innerHTML = dateTime;

//clock//




// Initialize thee variable
let songIndex=0
let audioElement=new Audio('./songs/1.mp3')
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let songName=document.getElementById('masterSongName')
let poster = document.getElementById('poster')
let songItems=Array.from(document.getElementsByClassName('songItem'))


// add songs and covers name

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    // {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    // {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    // {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    // {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    // {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    // {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    // {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    // {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]


    // // Adding a Lopp For song iterate
    
    // songItems.forEach((element,i) => {
    //     element.getElementsByTagName('img')[0].src=songs[i].coverPath;
        
    // });



    // handle Play/pause click
    
    // masterPlay.addEventListener('click',()=>{
    //     if(audioElement.paused || audioElement.currentTime<=0){
    //         audioElement.play();
            
    //     masterPlay.classList.remove('fa-play-circle')
    //     masterPlay.classList.add('fa-pause-circle')
    //     }
    //     else{
    //         masterPlay.classList.remove('fa-pause-circle')
    //          masterPlay.classList.add('fa-play-circle')
    //          audioElement.pause();
    //         //  poster.style.opacity=0;

    //     }
    // }) 
    
// // this adding for listen to events
// audioElement.addEventListener('timeupdate', ()=>{
//     // Update Seekbar
//     progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
    
//     //Update play-time

    

//     let seconds=parseInt(audioElement.currentTime);

    
//     function pad2(num) {
//         return (num < 10 ? '0' : '') + num
//     }

//     seconds = pad2(seconds);
//     if(seconds>=60){
//         seconds = pad2(seconds);
//         seconds-=60;
//         if (seconds>=60){
//             seconds = pad2(seconds);
//             seconds-=60;
//             if (seconds>=60){
//                 seconds = pad2(seconds);
//                 seconds-=60;
//                 if (seconds>=60){
//                     seconds = pad2(seconds);
//                     seconds-=60;
//                 }
//             }
//         }
//     }
//     let minutes = pad2(parseInt(audioElement.currentTime/60));
//     let s =  minutes +":"+seconds
//     + "/03:31";
//     document.getElementById('tracktime').innerHTML = s;
    
   

    
    
//     // 20/120*100
//     let progress

//     myProgressBar.value=progress; 
// })
// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
//     //    p=100*ct/d || ct=p*d/100
// })
// // play Songs to Line to Line

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.add('fa-play-circle')
//         element.classList.remove('fa-pause-circle')
    
        
//         })


// }

// let tracktime
// let s;

// // for Click  song internalplay
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         songIndex=parseInt(e.target.id)
//  audioElement.src= `songs/${songIndex+1}.mp3`;
//  songName.innerText=songs[songIndex].songName;
//  document.getElementById("poster").src=songs[songIndex].coverPath;
//  tracktime.innerHTML=s;
 

//  audioElement.currentTime=0;
//  audioElement.play();
//  poster.style.opacity=1;
//  masterPlay.classList.remove('fa-play-circle')
//  masterPlay.classList.add('fa-pause-circle')
 
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=10){
//         songIndex=0;
//     }
//     else{
//         songIndex+=1;
//     }
//     audioElement.src= `songs/${songIndex+1}.mp3`;
    
//     songName.innerText=songs[songIndex].songName;
//     document.getElementById("poster").src=songs[songIndex].coverPath;
    
//     audioElement.currentTime=0;
//  audioElement.play();
 
// })
// document.getElementById('previous').addEventListener('click',()=>{
//     if(songIndex<=0){
//         songIndex=0;
//     }
//     else{
//         songIndex-=1;
//     }
//     audioElement.src= `songs/${songIndex+1}.mp3`;

//     document.getElementById("poster").src=songs[songIndex].coverPath;

//     songName.innerText=songs[songIndex].songName;

//     audioElement.currentTime=0;
//  audioElement.play();
//  masterPlay.classList.remove('fa-play-circle')
//  masterPlay.classList.add('fa-pause-circle')
// })



}
function PlayerBody() {
    return (
        <div>
        <div onLoad={Timer()} class = "flex">
            <div class ="flex1">
        <img class= "pirate" src={myself}></img>
        <h1 class="name">Ayush Sharma,</h1>
        <h1 class="profession">Web Developer</h1>
        </div>    


    <div class="container">


    <h1 class="h3"  id ="time" >Clock</h1> 
        <div class="songList">
            <h1></h1>
            <div class="songItemContainer">
                <div class="songItem">
                    <img src="covers/1.jpg"/>
                    <span class="songName"> Let me Love You </span>
                </div>
                </div>
        </div> 

       
   </div>  
       
      

      
      </div>  
      <div class="progressBar">
       
       <input type="range" name="range" id="myProgressBar" value="0" min="0" max="100" />
       
       
        <div class="buttons">
            <button id ="previous" >
        < SkipPreviousRoundedIcon  color='primary' fontSize="large"/>
        </button>
       
       <button id = "masterPlay">
           <PlayCircleOutlineRoundedIcon color='primary' fontSize="large"/>
           
          
           </button>
        <button id = "masterPause">
        <PauseCircleOutlineRoundedIcon color='primary' fontSize="large"/>
            </button>
       <button id = "next"><SkipNextRoundedIcon  color='primary' fontSize="large"/></ button >
       
            </div>
       

 
   
       </div>
   </div>
    )
}

export default PlayerBody
