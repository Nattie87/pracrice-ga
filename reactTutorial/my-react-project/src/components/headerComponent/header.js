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
            <li className="first">
              <a href="/">Home</a>
            </li>
            <li>
              <Link to ="/Products">Products</Link>
            </li>
            <li className="last">
              <Link to ="/">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
