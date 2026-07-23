/** @format */

import "./App.css";
import Header from "./Components/layout/Header";
import Hero from "./Components/hero/Hero";
import About from "./Components/About/About";
import Services from "./components/services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />
      <main className='relative z-10'>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
