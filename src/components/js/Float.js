import "../css/Float.css";
import { IconFileCv, IconHome } from "@tabler/icons-react";
import { useLocation, Link } from "react-router-dom";

function Float() {
    const location = useLocation();
    return (
        <>
            <aside id="float" className="float-hub">
                {location.pathname === "/" ?
                    <Link className="resume-btn" to='/Resume'>
                        <IconFileCv className='float-icon' size={40} stroke={1.5} />
                    </Link>
                    :
                    <Link className="resume-btn" to='/'>
                        <IconHome className='float-icon' size={40} stroke={1.5} />
                    </Link>
                }
            </aside>
        </>
    );
}

export default Float;