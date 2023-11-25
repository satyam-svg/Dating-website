import React, { useEffect} from "react";
import "./home.css";
import img1 from "./Images/Ellipse 1.png";
import img2 from "./Images/charlie-green-3JmfENcL24M-unsplash.jpg";
import img3 from "./Images/christian-buehner-DItYlc26zVI-unsplash.jpg";
import img4 from "./Images/freestocks-9UVmlIb0wJU-unsplash.jpg";
import img5 from "./Images/irene-strong-v2aKnjMbP_k-unsplash.jpg";
import img6 from "./Images/tamara-bellis-Brl7bqld05E-unsplash.jpg";
import img7 from "./Images/icons8-add-30.png";
import img8 from "./Images/heart-4928970_1280.png";
import img9 from "./Images/icons8-apple-50.png";
import img10 from "./Images/icons8-play-store-50.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
export default function Home() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});

    },[])
  return (
    <>
    
      <div className="container2">
      
        <img src={img1} className="i"alt="error" />
        <img src={img8} alt="error" className="img8" />
        <div className="rectangle">
          <h4>2.8k+ Members</h4>
          <div class="small-circle">
            <img src={img2} alt="" className="img1" />
            <img src={img3} alt="" className="img2" />
            <img src={img4} alt="" className="img3" />
            <img src={img5} alt="" className="img4" />
            <img src={img6} alt="" className="img5" />
            <img src={img7} alt="" className="img6" />
          </div>
        </div>
      </div>
      <div className="wrapper">
      <h1>
  Find Your
  <br />
  Best Match
  <h3>
Looking for that someone special? Create an account with us and get<br/> ready to fill in the pages of your great love story!
</h3>
</h1>
<button class="custom-button">Join Now</button>
      </div>
      <div className="download">
        <div className="box1">
          <img src={img9} alt="error" className="apple" />
          <h5>Download from <br/><span className="store-apple">App Store</span></h5>
        </div>
        <div className="box2">
        <img src={img10} alt="error" className="apple" />
          <h5>Download from <br/><span className="store-apple">Play Store</span></h5>
        </div>
      </div>
    </>
  );
}
