import React from 'react';
import './App.css';
import './estilo.footer.css';
import './estilo.header.css';
import './index.css';



import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Page from './components/home.jsx';


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
