import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <header>
                <nav className="nav navbar-light">
                <ul className="nav navar-nav">
                    <li className="nav-item">Login</li>
                </ul>
                </nav>
            </header>
        );
    }
}

export default Header;