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
                                <div className="col col-md">
                                    <div className="title mb-5">
                                        <div className="big-icon">
                                            <img src={WorkEmoji} alt="emoji" className="emoji" />
                                        </div>
                                        <h4>My Career</h4>
                                    </div>
                                    <div className="resume-items active">
                                        <div className="resume-item">
                                            <div className="date">
                                                Apr. 2023 - Jan. 2024
                                            </div>
                                            <div className="name">
                                                <h5>Junior Software Engineer @ BetterNOI</h5>
                                            </div>
                                            <p>
                                                As a previous Junior Software & Data Integration Engineer at BetterNOI, I developed innovative solutions based on product initiatives and business challenges utilizing both Python and JavaScript. I worked with new technologies daily to apply them on current projects and managed multiple data sources.
                                            </p>
                                        </div>
                                        <div className="resume-item">
                                            <div className="date">
                                                Dec. 2022 - Apr. 2023
                                            </div>
                                            <div className="name">
                                                <h5>Data Center Technician @ Flexential</h5>
                                            </div>
                                            <p>
                                                As a Data Center Technician at Flexential, I provided IT support (ServiceNow) to staff and customers, as well as responding to server and network issues. Along with monitoring the day-to-day performance of servers and running hardware diagnostics to replace failing parts in a timely manner.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md">
                                    <div className="title mb-5">
                                        <div className="big-icon">
                                            <img src={CapEmoji} alt="emoji" className="emoji" />
                                        </div>
                                        <h4>My Education</h4>
                                    </div>
                                    <div className="resume-items active">
                                        <div className="resume-item">
                                            <div className="date">
                                                Jan. 2019 - Dec. 2022
                                            </div>
                                            <div className="name">
                                                <h5>Computer Science Bachelor's @ FAU</h5>
                                            </div>
                                            <p>
                                                Graduated from Florida Atlantic University with a Bachelors of Science in Computer Science with a 3.8 GPA, Presidential Honor Roll, Deans List, and Magna Cum Laude.
                                            </p>
                                        </div>
                                        <div className="resume-item">
                                            <div className="date">
                                                Jan. 2019 - Dec. 2022
                                            </div>
                                            <div className="name">
                                                <h5>Data Science Certification @ FAU</h5>
                                            </div>
                                            <p>
                                                Graduated from Florida Atlantic University with a Data Science Certification by acquiring the necessary expertise to make use of the enormous volumes of data available to the Industry through relevant coursework.
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