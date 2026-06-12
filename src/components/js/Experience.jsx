import "../css/Experience.css";
import CapEmoji from "../images/graduation-emoji.png";
import WorkEmoji from "../images/briefcase-emoji.png";

function Experience() {
    return (
        <>
            <section id="experience" className="experience">
                <div className="container">
                    <div className="experience-content">
                        <div className="experience-text">
                            <h3>Professional Background</h3>
                            
                            <div className="experience-items row mt-5">
                                
                                {/* ==========================================
                                   COLUMN 1: MY CAREER
                                   ========================================== */}
                                <div className="col-12 col-md-6 mb-5 mb-md-0">
                                    <div className="title mb-5">
                                        <div className="big-icon">
                                            <img src={WorkEmoji} alt="briefcase emoji" className="emoji" />
                                        </div>
                                        <h4>My Career</h4>
                                    </div>
                                    <div className="resume-items active">
                                        
                                        {/* Role 1 */}
                                        <div className="resume-item">
                                            <span className="date">Dec. 2025 - Present</span>
                                            <h5 className="role-title">Data Center Deployment Network Engineer @ Tensorwave</h5>
                                            <p>
                                                Provision Arista switch hardware using EOS configurations and architect precise Layer 1-3 network and fiber topologies for cloud infrastructure.
                                            </p>
                                        </div>

                                        {/* Role 2 */}
                                        <div className="resume-item">
                                            <span className="date">Dec. 2024 - Dec. 2025</span>
                                            <h5 className="role-title">Data Center Technician @ Tensorwave</h5>
                                            <p>
                                                Managed physical server rack deployments, executed bare-metal provisioning tasks, and performed advanced hardware diagnostics.
                                            </p>
                                        </div>

                                        {/* Role 3 */}
                                        <div className="resume-item">
                                            <span className="date">Jul. 2024 - Dec. 2024</span>
                                            <h5 className="role-title">Network Operations Center Technician @ 365 Data Centers</h5>
                                            <p>
                                                Provided critical event monitoring, link failover mitigation, and analytical troubleshooting for multi-tenant data center environments.
                                            </p>
                                        </div>
                                        
                                        {/* Role 4 */}
                                        <div className="resume-item">
                                            <span className="date">Apr. 2023 - Jan. 2024</span>
                                            <h5 className="role-title">Junior Software Engineer @ BetterNOI</h5>
                                            <p>
                                                Developed data integration solutions based on product initiatives using Python and JavaScript while managing multiple data pipeline sources.
                                            </p>
                                        </div>

                                        {/* Role 5 */}
                                        <div className="resume-item">
                                            <span className="date">Dec. 2022 - Apr. 2023</span>
                                            <h5 className="role-title">Data Center Technician @ Flexential</h5>
                                            <p>
                                                Provided technical ITIL support, responded to server and network link issues, and handled timely component replacement diagnostics.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* ==========================================
                                   COLUMN 2: MY EDUCATION
                                   ========================================== */}
                                <div className="col-12 col-md-6">
                                    <div className="title mb-5">
                                        <div className="big-icon">
                                            <img src={CapEmoji} alt="graduation emoji" className="emoji" />
                                        </div>
                                        <h4>My Education</h4>
                                    </div>
                                    <div className="resume-items active">
                                        
                                        {/* Education 1 */}
                                        <div className="resume-item">
                                            <span className="date">Jan. 2019 - Dec. 2022</span>
                                            <h5 className="role-title">Computer Science Bachelor's @ FAU</h5>
                                            <p>
                                                Graduated with a Bachelors of Science in Computer Science with a 3.8 GPA, Presidential Honor Roll, Deans List, and Magna Cum Laude.
                                            </p>
                                        </div>

                                        {/* Education 2 */}
                                        <div className="resume-item">
                                            <span className="date">Jan. 2019 - Dec. 2022</span>
                                            <h5 className="role-title">Data Science Certification @ FAU</h5>
                                            <p>
                                                Acquired deep core expertise in engineering enormous volumes of enterprise industry data through dedicated advanced math and database systems coursework.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;