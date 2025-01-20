import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, /*Link*/ } from 'react-router-dom';
import Navbar from './shared/components/navbar';
import Home from './pages/home';
import Shop from './pages/shop';
import ComingSoon from './pages/coming_soon';

function App() {
  const [temp, setTemp] = useState(false); 
  
  return (
    <>
    {
      temp &&
      <Navbar />
    }
    <Router basename="/namor_apparel_fe">
      {
        temp &&
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
        </Routes>
      }
      {
        !temp &&
        <Routes>
          <Route path="/" element={<ComingSoon/>} />
        </Routes>
      }
    </Router>
  </>
  );
}

export default App;
