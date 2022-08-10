import './Styles/app.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Navbar/LandingPage';
import FooterPart from './Components/Navbar/Footer';
import Contact from './Components/Navbar/Contact';
import Services from './Components/Navbar/services';
import About from './Components/Navbar/about';
import Gallery from './Components/Navbar/Gallery';

function App() {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <FooterPart />
      </Router>
    </div>
  );
}

export default App;
