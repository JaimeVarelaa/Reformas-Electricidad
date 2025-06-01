import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
         <Testimonials />
        <Contact />
      </main>
       <Footer />
    </ThemeProvider>
  );
}

export default App;