import Logo from "../images/logo.png"

export default function Navbar() {
    return (
        <nav className="nav-container">
            <img src={Logo} alt="logo" className="nav--logo" />
        </nav>
    )
}