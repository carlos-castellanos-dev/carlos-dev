import "../css/Float.css";
import { IconFileCv, IconHome } from "@tabler/icons-react";
import { useLocation, Link } from "react-router-dom";

function Float() {
    const location = useLocation();

    const pageUp = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
    };

    return (
        <>
            <aside id="float" className="float-hub">
                {location.pathname === "/" ?
                    <Link className="resume-btn" to='/Resume' onClick={pageUp}>
                        <IconFileCv className='float-icon' size={40} stroke={1.5} />
                    </Link>
                    :
                    <Link className="resume-btn" to='/' onClick={pageUp}>
                        <IconHome className='float-icon' size={40} stroke={1.5} />
                    </Link>
                }
            </aside>
        </>
    );
}

export default Float;