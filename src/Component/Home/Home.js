import React from "react";
import "./home.css";
import img1 from "./Images/Ellipse 1.png";
import img2 from "./Images/charlie-green-3JmfENcL24M-unsplash.jpg";
import img3 from "./Images/christian-buehner-DItYlc26zVI-unsplash.jpg";
import img4 from "./Images/freestocks-9UVmlIb0wJU-unsplash.jpg";
import img5 from "./Images/irene-strong-v2aKnjMbP_k-unsplash.jpg";
import img6 from "./Images/tamara-bellis-Brl7bqld05E-unsplash.jpg";


export default function Home() {
  return (
    <>
      <div className="container">
        <img src={img1} alt="error" />
        <div className="rectangle">
        <div class="small-circle">
    <img src={img2} alt="" className="img1"/>
  </div>
        </div>
      </div>
    </>
  );
}
