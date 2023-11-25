import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar' // Assuming Home is the correct import
import Home from './Component/Home/Home';
import Member from './Component/Members/Member';
import Work from './Component/Works/Work';
import Story from './Component/Story/Story';
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
        <Route  exact path="/" element={<Home/>}/>
        <Route   path="/members" element={<Member/>}/>
        <Route   path="/works" element={<Work/>}/>
        <Route   path="/story" element={<Story/>}/>
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
