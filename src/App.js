import { NavbarProvider } from './context/NavbarContext';

//. components
import Hero from './components/Hero/Hero';

//. styles
import './assets/global.css';

function App() {
  return (
    <div style={{ height: '1000vh' }}>
      <NavbarProvider>
        <Hero />
        {/*  */}
      </NavbarProvider>
    </div>
  );
}

export default App;
