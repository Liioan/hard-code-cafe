import Hero from './components/Hero/Hero';
import { NavbarProvider } from './context/NavbarContext';

//. styles
import './assets/global.css';

function App() {
  return (
    <div>
      <NavbarProvider>
        <Hero />
        {/*  */}
      </NavbarProvider>
    </div>
  );
}

export default App;
