import "../css/Resume.css";
import { IconFileCv } from "@tabler/icons-react";

function Resume() {
    return (
        <>
            <aside id="resume" className="ck-hub">
                <button className="resume-btn" type="button">
                    <IconFileCv size={40} stroke={1.5} />
                </button>
            </aside>
        </>
    );
}

export default Resume;