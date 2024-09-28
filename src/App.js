import { BrowserRouter as Router, Routes, Route, /*Link*/ } from 'react-router-dom';
import Navbar from './shared/components/navbar';
import Home from './pages/home';
import Shop from './pages/shop';

function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
