import React, { useEffect} from 'react';
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
        <div className="nav-bar">
            <i className='bx bx-menu sidebarOpen' ></i>
            <span className="logo navLogo"><Link to="/">LOVELOOM</Link></span>
            <div className="menu">
                <div className="logo-toggle">
                    <span className="logo" id='logo1'><Link to="/">LOVELOOM</Link></span>
                    <i className='bx bx-x siderbarClose'></i>
                </div>
                <ul className="nav-links">
                <li><Link to="/">Home</Link></li>               <li><Link to="/members">Members</Link></li>               <li><Link to="works">How it Works</Link></li>               <li><Link to="story">Stories</Link></li>               <li><Link href="#">Login</Link></li>               <li><Link href="#">Sign Up</Link></li>
                </ul>
            </div>
            <div className="darkLight-searchBox">
                <div className="dark-light">
                    <i className='bx bx-moon moon'></i>
                    <i className='bx bx-sun sun'></i>
                </div>
                <div className="searchBox">
                   <div className="searchToggle">
                    <i className='bx bx-x cancel'></i>
                    <i className='bx bx-search search'></i>
                   </div>
                    <div className="search-field">
                        <input type="text" placeholder="Search..."/>
                        <i id='searchIcon' className='bx bx-search'></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  );
}
