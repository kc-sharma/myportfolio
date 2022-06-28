import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@material-ui/core';

function Footer() {
    return (
    <footer class="foot">
     {/* <iframe class="frame" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLQAeDYOIDYif55CGaNMSjyHE8Xv-D9o6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
     <Typography variant="h6"> Connect with me </Typography>
     <div  >
         <a href="https://www.instagram.com/sharma.au7/">
            <InstagramIcon color='primary'/></a>
             <a class="footImg" href="https://twitter.com/AyushSh87790196"   >
                 <TwitterIcon color='primary' /></a>
                 <a href="https://www.linkedin.com/in/khemchand-sharma-325654193/">
                    <LinkedInIcon color='primary'/></a>
                 <a class="footImg" href="https://www.facebook.com/profile.php?id=100008089148130"  >
                     <FacebookIcon color='primary'/></a> 
                    <a  href="https://www.github.com/kc-sharma">
                    <GitHubIcon color='primary'/></a>
     </div>
     <Typography variant="h6"> © 2022, April 22 </Typography>
     </footer>
    )
}

export default Footer
