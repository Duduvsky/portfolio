import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Videos from './components/Projetos/Projetos';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import Habilidades from './components/Habilidades/Habilidades';

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Habilidades />
      <Videos />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
