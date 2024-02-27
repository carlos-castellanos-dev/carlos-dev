import "../css/ResumeHero.css";
import { IconBrandGithub, IconBrandLinkedin, IconFileDownload, IconDownload } from "@tabler/icons-react";
import Button from 'react-bootstrap/Button';

function ResumeHero() {
    return (
        <>
            <section id="home" className="hero">
                <div className="container">
                    <div className="content">
                        <div className="hero-main">
                            <div className="hero-text">
                                <h1>My Resume</h1>
                                <p>
                                    Welcome to my resume! Below you'll find more information regarding my professional background & more about me. 👇
                                </p>
                                <span>
                                    <a
                                        aria-label="linkedin"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/castellanosc/"
                                    >
                                        <IconBrandLinkedin width={32} height={32} />
                                    </a>
                                    <a
                                        aria-label="github"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://github.com/carlos-castellanos-dev"
                                    >
                                        <IconBrandGithub width={32} height={32} />
                                    </a>
                                    <Button className='download-btn' variant="primary">Download Resume <IconDownload width={16} height={16} /></Button>{' '}
                                </span>
                            </div>
                            <div className="resume-img"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ResumeHero;
