import Navbar from './Components/Navbar/Navbar';
import './Styles/app.css';

import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <video className="intro-video" autoPlay={true} muted={true} loop>
        <source src={require('./videos/Final ASH 4k 50fps-1.MOV')} />
      </video>
    </div>
  );
}

export default App;
