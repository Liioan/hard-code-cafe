import { NavbarProvider } from './context/NavbarContext';

//. components
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Location from './components/Location/Location';

//. styles
import './assets/global.css';

function App() {
  return (
    <div style={{ height: '1000vh' }}>
      <NavbarProvider>
        <Hero />
        <About />
        <Menu />
        <Location />
      </NavbarProvider>
    </div>
  );
}

export default App;
