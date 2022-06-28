import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import PlayerBody from "./PlayerBody";

import logo from './covers/logo.png'


function Player() {
  return (
    <div class="b2">
          <Header/>
            <PlayerBody/>            
            <Footer/>
    </div>
  );
}

export default Player
