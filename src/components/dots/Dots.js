import React from 'react';
import "./dots.css";

export default function Dots() {
    return (
        <>
          <center><strong>"Connecting the dots"</strong></center>
        <div className='dots'>
            <div className="spinner">
                <div class="cube"></div>
                <div class="blob top"></div>
                <div class="blob bottom"></div>
                <div class="blob left"></div>  
                <div class="blob move-blob"></div>            
            </div>
        </div>
       </>
    
    );
}