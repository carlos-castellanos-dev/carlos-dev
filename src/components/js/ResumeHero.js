import "../css/ResumeHero.css";
import Resume from "../assests/Carlos-Castellanos-Resume.pdf";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Page from "../images/page.png";
import { IconArrowNarrowRight, IconBriefcase, IconThumbUp, IconTools, IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";

function ResumeHero() {
    return (
        <>
            <section id="home" className="resume-hero">
                <div className="container">
                    <div className="resume-content">
                        <div className="resume-main hero-main">
                            <div className="resume-text hero-text align-items-center">
                                <h1>My Resume</h1>
                                <img src={Page} alt="emoji" />
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
                                </span>
                                <a href={Resume} download="Carlos Castellanos Resume" target='_blank' rel="noreferrer">
                                    <Button className='download-btn' variant="primary">Download Resume <IconDownload className="download-icon" width={16} height={16} stroke={4} /></Button>{' '}
                                </a>
                            </div>
                            <div className="row">
                                <div className="resume-card col-lg-4 col-md-4 mb-lg-0 mb-4">
                                    <Card>
                                        <div className="land-icon"><IconBriefcase size={70} /></div>
                                        <Card.Body>
                                            Learn more about my experience & education!
                                            <br />
                                            <Card.Link href="#experience" className='stretched-link'>Background <IconArrowNarrowRight size={25} /></Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="resume-card col-lg-4 col-md-4 mb-lg-0 mb-4">
                                    <Card>
                                        <div className="land-icon"><IconThumbUp size={70} /></div>
                                        <Card.Body>
                                            See what others have to say about me!
                                            <br />
                                            <Card.Link href="#" className='stretched-link'>Testimonials <IconArrowNarrowRight size={25} /></Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="resume-card col-lg-4 col-md-4 mb-lg-0 mb-4">
                                    <Card>
                                        <div className="land-icon"><IconTools size={70} /></div>
                                        <Card.Body>
                                            Learn more about my technical & soft skills!
                                            <br />
                                            <Card.Link href="#" className='stretched-link'>Skills <IconArrowNarrowRight size={25} /></Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ResumeHero;
