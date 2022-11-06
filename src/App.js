import { NavbarProvider } from './context/NavbarContext';

//. components
import Hero from './components/Hero/Hero';
import About from './components/About/About';

//. styles
import './assets/global.css';

function App() {
  return (
    <div style={{ height: '1000vh' }}>
      <NavbarProvider>
        <Hero />
        <About />
        {/*  */}
      </NavbarProvider>
    </div>
  );
}

export default App;
