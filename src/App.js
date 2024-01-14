import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import Projects from './Projects';
import Inner from './Inner';
import Skills from './Skills';
import Strength from './Strength';
import Footer from './Footer';
import Recent from './Recent';

function App() {
  return(
    <div>
      <Navbar/>
      <Content/>
      <Projects/>
      <Inner/>
      <Skills/>
      <Strength/>
      <Recent/>
      <Footer/>
    </div>
  )
}

export default App;
