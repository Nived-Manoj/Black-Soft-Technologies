import './App.css';
import Home from './home/home';
import Services from './services/Services';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import TechnologiesMaster from './technologies/TechnologiesMaster';
import TopBar from './topBar/topBar';
import Testimonial from './testimonial/Testimonial';

function App() {
  return (
    <div className='app_container'>
 {/* TopBar */}
 <TopBar />
      <Home/>
      <Services/>
      <TechnologiesMaster/>
      <Testimonial/>
      <About />

      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
