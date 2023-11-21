import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar' // Assuming Home is the correct import
import Home from './Component/Home/Home';
function App() {
  const [isRedirectVisible, setRedirectVisible] = useState(true);

  const toggleComponents = () => {
    setRedirectVisible(!isRedirectVisible);
  };

  const closeBurgerMenu = () => {
    // Implement the logic to close the burger menu here
    console.log('Burger menu closed');
  };

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/>
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
