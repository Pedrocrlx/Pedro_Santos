import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import Stack from './components/Stack';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <ProjectList />
      </main>
      <Footer />
    </div>
  )
}

export default App;
