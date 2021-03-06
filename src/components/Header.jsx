import React from "react";
import {Link} from 'react-router-dom'

function Header () {
    return (
        <div className="nav-container">
            <nav>
                <ul className="ul-nav">
                    <li><Link to="/willkommen">Willkommen</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/uebermich">Über mich</Link></li>
                    <li><Link to="/vita">Vita</Link></li>
                    <li><Link to="/unterricht">Unterricht</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header