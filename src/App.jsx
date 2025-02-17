import './app.scss'
import Hero from './components/Hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import Text from './Text';
import Parallax from './components/parrelex/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';

const App = () => {
  return <div>
    <Cursor/>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'> <Parallax type="services"/> </section>
    <section><Services/></section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id='Contact'><Contact/></section>
    
    {/* <Text/> */}
</div>   
        
        
  
 
};

export default App;
