import "./css/Hero.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function Hero() {
    return (
        <>
            <section id="home" className="hero">
                <div className="container">
                    <div className="content">
                        <div className="hero-main">
                            <div className="hero-text">
                                <h1>Software Developer</h1>
                                <p>
                                    Hi, I'm Carlos Castellanos. A passionate Software Developer based in Hollywood, Florida. 📍
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
                            </div>
                            <div className="hero-img"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
