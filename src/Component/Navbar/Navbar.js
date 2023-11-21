import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  useEffect(() => {
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    const modeToggle = document.querySelector(".dark-light");
    const searchToggle = document.querySelector(".searchToggle");
    const sidebarOpen = document.querySelector(".sidebarOpen");

    // Retrieve dark mode preference from local storage
    const getMode = localStorage.getItem("mode");

    // Set initial dark mode state based on local storage
    if (getMode === "dark-mode") {
      body.classList.add("dark");
      modeToggle.classList.add("active");
    }

    // Event listener to toggle dark mode
    const handleDarkModeToggle = () => {
      modeToggle.classList.toggle("active");
      body.classList.toggle("dark");

      // Update local storage with the current mode preference
      const newMode = body.classList.contains("dark") ? "dark-mode" : "light-mode";
      localStorage.setItem("mode", newMode);
    };

    // Event listener to toggle search box
    const handleSearchToggle = () => {
      searchToggle.classList.toggle("active");
      // Add logic to open/close the search box here
      // For example, you can toggle a CSS class or show/hide the search box element
    };

    // Add event listeners
    modeToggle.addEventListener("click", handleDarkModeToggle);
    searchToggle.addEventListener("click", handleSearchToggle);
    sidebarOpen.addEventListener("click", () => {
      nav.classList.add("active");
    });

    // Close sidebar on body click
    body.addEventListener("click", (e) => {
      let clickedElm = e.target;
      if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
      }
    });

    // Clean up event listeners on component unmount
    return () => {
      modeToggle.removeEventListener("click", handleDarkModeToggle);
      searchToggle.removeEventListener("click", handleSearchToggle);
      sidebarOpen.removeEventListener("click", () => {});
      body.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
         <nav>
        <div class="nav-bar">
            <i class='bx bx-menu sidebarOpen' ></i>
            <span class="logo navLogo"><a href="#">LOVELOOM</a></span>
            <div class="menu">
                <div class="logo-toggle">
                    <span class="logo"><a href="#">LOVELOOM</a></span>
                    <i class='bx bx-x siderbarClose'></i>
                </div>
                <ul class="nav-links">
                <li><Link to="/">Home</Link></li>               <li><Link href="#">Members</Link></li>               <li><Link href="#">How it Works</Link></li>               <li><Link href="#">Stories</Link></li>               <li><Link href="#">Login</Link></li>               <li><Link href="#">Sign Up</Link></li>
                </ul>
            </div>
            <div class="darkLight-searchBox">
                <div class="dark-light">
                    <i class='bx bx-moon moon'></i>
                    <i class='bx bx-sun sun'></i>
                </div>
                <div class="searchBox">
                   <div class="searchToggle">
                    <i class='bx bx-x cancel'></i>
                    <i class='bx bx-search search'></i>
                   </div>
                    <div class="search-field">
                        <input type="text" placeholder="Search..."/>
                        <i class='bx bx-search'></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  );
}
