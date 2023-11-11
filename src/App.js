import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoComponent from './Component/Video/VideoComponent';
import RedirectComponent from './Component/Redirect/RedirectComponent';
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [isRedirectVisible, setRedirectVisible] = useState(true);

  const toggleComponents = () => {
    setRedirectVisible(!isRedirectVisible);
  };

  return (
    <>
      <Router>
        {isRedirectVisible && <RedirectComponent />}
        <Navbar toggleComponents={toggleComponents} />
        <Routes>
          {/* Define your routes here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
