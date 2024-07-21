import './App.css';
import AppNavbar from './Components/AppNavbar';
import Deals from './Components/Deals';
import Hero from './Components/Hero';


function App() {
  return (
    <div className='main container mx-auto' >
      <AppNavbar />
      <Hero />
      <Deals />
    </div>
  )
}

export default App;
