import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import Stack from './components/Stack';
import AboutPage from './components/AboutPage';

function App() {
  const isAboutPage = window.location.pathname.replace(/\/$/, '') === '/about';
  return (
    <div className="app">
      <Header isAboutPage={isAboutPage} />
      <main id="main">
        {isAboutPage ? <AboutPage /> : <>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <ProjectList />
        </>}
      </main>
      <Footer />
    </div>
  )
}

export default App;
