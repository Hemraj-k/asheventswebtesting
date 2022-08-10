import './Styles/app.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Navbar/LandingPage';
import Footer from './Components/Navbar/Footer';
import Contact from './Components/Navbar/Contact';

function App() {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
