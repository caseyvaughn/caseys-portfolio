import './App.css';
// import "./App.scss";
// import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage/> 
      <Portfolio />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
