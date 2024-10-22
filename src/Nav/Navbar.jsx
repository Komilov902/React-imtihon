import { Link } from "react-router-dom"
import './nav.css'
import logo from '../img/v-high-resolution-logo-removebg-preview.png'
function Navbar() {
    return (
        <div className="contanier-nav">
            <div className="container">
                <nav className={scrollY ? "active" : ""}>
                    <Link  to='/'><img src={logo} alt="" /></Link>
                    <div className="ul-box">
                        <ul>
                            <Link to='home'><li>Home</li></Link>
                            <Link to='about'><li>About</li></Link>
                            <Link to='info'><li>Info</li></Link>

                        </ul>
                    </div>
                    <button>send</button>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
