/** @format */

import "./App.css";
import Header from "./Components/layout/Header";
import Hero from "./Components/hero/Hero";
import About from "./Components/About/About";
import Services from "./components/services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <main className='relative z-10'>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
