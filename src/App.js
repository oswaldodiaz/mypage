import React, {Component} from 'react';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import './App.css';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">

        <Router>
          <TopBar/>
          <Route exact={true} path="/" component={Profile} />
          <Route path="/profile" component={Profile} />
        </Router>

        <Footer/>
      </div>
    );
  }
}

export default App;
