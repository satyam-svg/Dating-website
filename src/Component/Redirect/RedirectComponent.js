import React from "react";
import "./style.css";
import img1 from "./images/girl.png";
import img2 from "./images/smili.png";
import img3 from "./images/male.jpg";
export default function RedirectComponent() {
  return (
    <>
    <div id="wrapper2">
    <div id="container10">

        <h1 className="a">MEET THE</h1>
        <h1 className="b">CHOSEN ONE.</h1>

    </div>
</div>
      <div class="circle"></div>  
           <img src={img1} alt="Your" className="centered-image" loading="lazy" />
           <img src={img2} alt="Your" className="centered-image1" loading="lazy" />
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
