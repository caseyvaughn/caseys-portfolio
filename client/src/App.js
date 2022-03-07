import './App.css';
// import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Portfolio />
      <AboutMe/>
      {/* <Routes>
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/aboutme" element={<AboutMe/>}/>
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
