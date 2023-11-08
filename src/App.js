import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoComponent from './Component/Video/VideoComponent';
import RedirectComponent from './Component/Redirect/RedirectComponent'
function App() {
  return (
    <>
    <Router>
      <RedirectComponent/>
      <Routes>
      
       </Routes>
       </Router>
    </>
  );
}

export default App;