import logo from '../images/logo.png'

export function Header() {
    return <nav className="nav">
        <div className="nav-wrapper blue-grey darken-3">
            <a href="#" className="brand-logo"><img src={logo}></img>Movies APP</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">REPO</a></li>
            </ul>
        </div>
    </nav >
}