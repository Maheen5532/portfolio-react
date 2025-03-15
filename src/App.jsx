import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";  // Adjust path if needed
import Projects from "./components/Projects";  // Adjust path if needed
import Contact from "./components/Contact";  // Adjust path if needed
import Footer from "./components/Footer";  // Adjust path if needed


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
       <Hero />
       <Projects />
       <About />
       <Contact />
       <Footer />
    </>
  )
}

export default App
