import React from 'react';
import './App.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SingleArticlePage from './components/SingleArticlePage';
import { Router } from '@reach/router';

class App extends React.Component {
  state = {
    user: 'tickle122'
  };
  render() {
    return (
      <div className="App">
        <Title />
        <Navbar />
        <Router className="AppRouter">
          <Home path="/" />
          <Home path="/articles/topics/:slug" />
          <SingleArticlePage
            path="/articles/:articleId"
            user={this.state.user}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
