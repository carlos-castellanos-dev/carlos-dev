import { useState } from "react";
import { useLocation } from 'react-router-dom';
import "../css/Navbar.css";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Navbar() {
    const [hamburger, setHamburger] = useState(false);
    const location = useLocation();

    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    };

    const pageUp = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
    };

    const navlinks = () => {
        return location.pathname !== '/Resume' ? homelinks : resumelinks;
    }

    const homelinks = [
        {
            name: "Home",
            link: "/",
            color: "#147efb"
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Contact",
            link: "#contact",
        },
        {
            name: "Resume",
            link: "Resume",
        },
    ];

    const resumelinks = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Experience",
            link: "#experience",

        },
        {
            name: "Testimonials",
            link: "#testimonials",
        },
        {
            name: "Skills",
            link: "#skills",

        },
        {
            name: "Resume",
            link: "Resume",
            color: "#147efb"
        },
    ];
    return (
        <>
            <nav>
                <h3 onClick={pageUp} className="logo">
                    CARLOSC.DEV
                </h3>
                <ul>
                    {navlinks(location.pathname).map((item) => (
                        <li key={item.name}>
                            <a href={item.link} style={{ color: item.color }} >{item.name}</a>
                        </li>
                    ))}
                    <li onClick={() => hamburgerMenu()}>
                        <IconMenu2 className="mobile-menu" width={30} height={30} />
                    </li>
                </ul>
            </nav>

            {/* mobile nav */}
            <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
                <span onClick={() => hamburgerMenu()}>
                    <IconX width={30} height={30} />
                </span>

                <ul>
                    {navlinks(location.pathname).map((item) => (
                        <li key={item.name} onClick={() => hamburgerMenu()}>
                            <a href={item.link} style={{ color: item.color }} >{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Navbar;
