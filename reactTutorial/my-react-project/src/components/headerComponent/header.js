import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

      <div className="Logo">
      LOGO
      </div>

        <nav>
          <ul>
            <li className="first"><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li className="last"><a href="#">Contact</a></li>
            </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
