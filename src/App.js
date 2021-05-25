import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Services from './components/Services';

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
      <Services />
      </>
    </div>
  );
}

export default App;
