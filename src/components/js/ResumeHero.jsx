import "../css/ResumeHero.css";
import Resume from "../assets/Carlos-Castellanos-Resume.pdf"; 
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
                        
                        <div className="resume-text-section">
                            <h1>My Resume</h1>
                            <img src={Page} alt="emoji" className="resume-page-emoji" />
                            <p>
                                Welcome to my resume! Below you'll find more information regarding my professional background & more about me.
                            </p>
                            <span className="resume-socials">
                                <a
                                    aria-label="linkedin"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/castellanosc/"
                                >
                                    <IconBrandLinkedin width={32} height={32} stroke={1.5} />
                                </a>
                                <a
                                    aria-label="github"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/carlos-castellanos-dev"
                                >
                                    <IconBrandGithub width={32} height={32} stroke={1.5} />
                                </a>
                            </span>
                            <a href={Resume} download="Carlos Castellanos Resume" target='_blank' rel="noreferrer" className="download-btn__link">
                                <Button className='download-btn' variant="primary">
                                    Download Resume 
                                    <IconDownload className="download-icon" width={18} height={18} stroke={2.5} />
                                </Button>
                            </a>
                            <div className="scroll-hint">
                                <p>Don't want to download? Scroll down instead 👇</p>
                            </div>
                        </div>

                        <div className="row resume-cards__row">
                            <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                                <Card className="card-nav h-100">
                                    <div className="land-icon"><IconBriefcase size={50} stroke={1.5} /></div>
                                    <Card.Body className="resume-card-body">
                                        <p className="card-desc-text">Career timeline, roles, and education.</p>
                                        <Card.Link href="#experience" className='stretched-link'>
                                            Background <IconArrowNarrowRight size={22} />
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                                <Card className="card-nav h-100">
                                    <div className="land-icon"><IconThumbUp size={50} stroke={1.5} /></div>
                                    <Card.Body className="resume-card-body">
                                        <p className="card-desc-text">Professional recommendations and endorsements.</p>
                                        <Card.Link href="#testimonials" className='stretched-link'>
                                            Testimonials <IconArrowNarrowRight size={22} />
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
                                <Card className="card-nav h-100">
                                    <div className="land-icon"><IconTools size={50} stroke={1.5} /></div>
                                    <Card.Body className="resume-card-body">
                                        <p className="card-desc-text">Core network tools and systems toolkits.</p>
                                        <Card.Link href="#rskill" className='stretched-link'>
                                            Skills <IconArrowNarrowRight size={22} />
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default ResumeHero;