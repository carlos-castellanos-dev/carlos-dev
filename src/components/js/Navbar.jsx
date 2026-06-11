import { useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import "../css/Navbar.css";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Navbar() {
    const [hamburger, setHamburger] = useState(false);
    const location = useLocation();

    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    };

    const pageUp = () => {
        // Fixed syntax tuple coordinate calculation bug
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Correctly structured the logic to reference state arrays accurately
    const getNavLinks = () => {
        return location.pathname === '/Resume' ? resumelinks : homelinks;
    };

    const homelinks = [
        { name: "Home", link: "/", isRoute: true, color: "#147efb" },
        { name: "About", link: "#about", isRoute: false },
        { name: "Projects", link: "#projects", isRoute: false },
        { name: "Contact", link: "#contact", isRoute: false },
        { name: "Resume", link: "/Resume", isRoute: true }, // Added explicit path lead slash
    ];

    const resumelinks = [
        { name: "Home", link: "/", isRoute: true },
        { name: "Experience", link: "#experience", isRoute: false },
        { name: "Testimonials", link: "#testimonials", isRoute: false },
        { name: "Skills", link: "#rskill", isRoute: false },
        { name: "Resume", link: "/Resume", isRoute: true, color: "#147efb" },
    ];

    return (
        <>
            <nav className="navbar-container">
                <h3 onClick={pageUp} className="logo">
                    CARLOSC.DEV
                </h3>
                
                {/* Desktop Link Items Display Array Container */}
                <ul className="nav-links__desktop">
                    {getNavLinks().map((item) => (
                        <li key={item.name}>
                            {item.isRoute ? (
                                <Link to={item.link} style={{ color: item.color }} onClick={pageUp}>
                                    {item.name}
                                </Link>
                            ) : (
                                <a href={item.link} style={{ color: item.color }}>{item.name}</a>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Trigger Separated from the Desktop Row List */}
                <div className="mobile-hamburger__trigger" onClick={hamburgerMenu}>
                    <IconMenu2 className="mobile-menu" width={30} height={30} />
                </div>
            </nav>

            {/* Mobile Sidebar Navigation Panel */}
            <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
                <span className="close-trigger" onClick={hamburgerMenu}>
                    <IconX width={30} height={30} />
                </span>

                <ul>
                    {getNavLinks().map((item) => (
                        <li key={item.name} onClick={hamburgerMenu}>
                            {item.isRoute ? (
                                <Link to={item.link} style={{ color: item.color }} onClick={pageUp}>
                                    {item.name}
                                </Link>
                            ) : (
                                <a href={item.link} style={{ color: item.color }}>{item.name}</a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Navbar;