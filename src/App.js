// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  // console.log("hello");
  return (
    <div>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Tours />

      <Footer />
    </div>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React Now
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
