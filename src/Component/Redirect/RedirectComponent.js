import React from "react";
import "./style.css";
import img1 from "./images/girl.png";
import img2 from "./images/smili.png";
import img3 from "./images/male.jpg";
export default function RedirectComponent() {
  return (
    <>
      <div class="circle"></div>  
           <img src={img1} alt="Your" className="centered-image" />
           <img src={img2} alt="Your" className="centered-image1" />
          <div className="container">
        <div class="rectangle">
          <div class="loading-bar loading-bar1"></div>
          <div class="loading-bar loading-bar2"></div>
          <div class="loading-bar loading-bar3"></div>
          <div class="photo-container">
            <div class="circle1">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        </div> 
      
    </>
  );
}
