import "../css/Float.css";
import { IconFileCv, IconHome } from "@tabler/icons-react";
import { useLocation, Link } from "react-router-dom";

function Float() {
    const location = useLocation();
    return (
        <>
            <aside id="float" className="ck-hub">
                {location.pathname === "/" ?
                    <Link to='/Resume'>
                        <button className="resume-btn" type="button"><IconFileCv size={40} stroke={1.5} /></button>
                    </Link>
                    :
                    <Link to='/'>
                        <button className="resume-btn" type="button"><IconHome size={40} stroke={1.5} /></button>
                    </Link>
                }
            </aside>
        </>
    );
}

export default Float;