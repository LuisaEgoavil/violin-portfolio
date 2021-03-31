import {Link} from 'react-router-dom'

function Header () {
    return (
        <div>
            <nav>
                <ul>
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