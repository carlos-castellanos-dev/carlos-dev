import "../css/Float.css";
import { IconFileCv, IconHome } from "@tabler/icons-react";
import { useLocation, Link } from "react-router-dom";

function Float() {
    const location = useLocation();

    const pageUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {location.pathname === "/" ? (
                <Link className="resume-btn" to='/Resume' onClick={pageUp} aria-label="View Resume">
                    <IconFileCv size={32} stroke={1.5} />
                </Link>
            ) : (
                <Link className="resume-btn" to='/' onClick={pageUp} aria-label="Go to Home">
                    <IconHome size={32} stroke={1.5} />
                </Link>
            )}
        </>
    );
}

export default Float;