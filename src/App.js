import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Particles from 'react-particles-js';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <>
      <Particles 
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 6,
              color: '#f9ab00'
            }
          }
        }
      }} />
      <Navbar />
      <Header />
      <AboutMe />
      </>
    </div>
  );
}

export default App;
