import './Styles/app.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Navbar/LandingPage';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
