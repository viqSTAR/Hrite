
import LiquidBackground from './components/Background/LiquidBackground';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Projects from './components/Sections/Projects';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <>
      <LiquidBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
