import React from 'react';
import './App.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SingleArticlePage from './components/SingleArticlePage';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router className="AppRouter">
        <Home path="/" />
        <Home path="/articles/topics/:slug" />
        <SingleArticlePage path="/articles/:articleId" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
