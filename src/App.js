import React from 'react';
import './App.css';
import './estilo.footer.css';
import './estilo.header.css';
import './index.css';



import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Page from './components/home/home.jsx';


function App() {
  return (
    <div>
      <Header/>
      <Page/>
      <Footer/>
      </div>
  );
}

export default App;
