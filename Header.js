import React from 'react'
import logo from './covers/logo.png'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InfoIcon from '@mui/icons-material/Info';
import FolderIcon from  '@mui/icons-material/Folder';
import Brightness6Icon from '@mui/icons-material/Brightness6';

import Aaron from "./covers/Aaron.jpg";
import Intro from './Intro';


function Header() {
    return (
        <div>
            <nav >
             <ul class="headerFlex">
             <li >
<div class="dropdown" id = "dropdown">
  <button class="dropbtn"><MenuIcon /></button>
  <div class="dropdown-content">
    <Link to = "/"><HomeIcon color = "primary"/>  <Typography varient="h6">Home</Typography></Link>
    
    {/* <Link to = "/player">Player</Link> */}
    <Link to="/"><FolderIcon color = "primary"/></Link>
    <a href="https://my-search-007.web.app/">Google Clone</a>
    <a href="https://spotify-clone-3b1d5.web.app/#">Spotify Clone</a>
    <Link to = "/watch"><YouTubeIcon color = "primary"/><Typography varient="h6">Watch</Typography></Link>
    <Link to = "/about" ><InfoIcon color = "primary"/><Typography varient="h6">About me</Typography></Link>
     {/* <button > <Brightness6Icon color = "primary"/></button> */}
  </div>
</div><li class="brand" ><Link to = "/" class="brand" ><Typography variant="h6" id ="brand"> Home </Typography></Link> </li></li>    
             
            
            </ul>
            </nav>
        </div>
    )
}

export default Header
