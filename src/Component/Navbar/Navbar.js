import React, { useEffect } from 'react'
import './navbar.css'
export default function Navbar() {
    useEffect(()=>{
        
    },[])
  return (
   
    <>
      <div class="bars" id="nav-action">
  <span class="bar"> </span>
</div>
<nav id="nav">
  <ul>
    <li class="shape-circle circle-one"><a href="#">Contact</a></li>
    <li class="shape-circle circle-two"><a href="#">Blog</a></li>
    <li class="shape-circle circle-three"><a href="#">Work</a></li>
    <li class="shape-circle circle-five">
      <a href="#">Home</a>
    </li>
  </ul>
</nav>
    </>
  )
}
