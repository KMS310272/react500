import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header id="header" className="color">
            <div className="header__port">
                <Link to="/portfolio">portfolio</Link>
            </div>
            <div className="header__logo">
                <Link to="/">webstoryboy</Link>
            </div>
            <nav className="header__menu">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/reference">Reference</Link></li>
                    <li><Link to="/youtube">youtube</Link></li>
                    <li><Link to="/script">Script</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;