import "../css/Hero.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import HandEmoji from "../images/waving.png";

function Hero() {
    return (
        <>
            <section id="home" className="hero">
                <div className="container">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>
                                Deployment Network Engineer
                                <span className="wave-emoji__wrapper">
                                    <img src={HandEmoji} alt="waving hand" className="wave-emoji" />
                                </span>
                            </h1>
                            <p>
                                Hi, I'm Carlos Castellanos. A passionate Deployment Network Engineer based in Hollywood, Florida. 📍
                            </p>
                            <span className="hero-socials">
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
                        </div>
                        <div className="hero-img"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;