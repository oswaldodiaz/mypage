import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Posts from './components/Posts';
import Footer from './components/Footer';
import ProfileSummary from "./components/ProfileSummary";
import About from "./components/About";

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
          <ProfileSummary/>
          <Route exact={true} path="/" component={Profile} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About}/>
        </Router>

        <Footer/>
      </div>
    );
  }
}

export default App;
