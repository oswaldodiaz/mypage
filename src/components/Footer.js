import React, {Component} from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import '../App.css';

class Footer extends Component {
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
      <footer>
        <hr/>
        <Container>
          <a href="https://www.linkedin.com/in/oswaldo-d%C3%ADaz-397b036b/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/oswaldodiaz"><FontAwesomeIcon icon={faGithub}  /></a>
        </Container>
      </footer>
    );
  }
}

export default Footer;
