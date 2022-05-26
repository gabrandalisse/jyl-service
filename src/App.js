import './App.css';

import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Map from './components/Map/Map';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Features />
      <Map />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
