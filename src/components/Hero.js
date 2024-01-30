import "./css/App.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const skillsIcons = [
    {
        img: "https://skillicons.dev/icons?i=html,css",
        id: 1,
    },
    {
        img: "https://skillicons.dev/icons?i=js,ts",
        id: 2,
    },
    {
        img: "https://skillicons.dev/icons?i=react,next",
        id: 3,
    },
    {
        img: "https://skillicons.dev/icons?i=tailwind,scss",
        id: 4,
    },
];

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

                        {/*  */}
                        <div className="skills">
                            <p>Tech Stack</p>
                            <div className="logos">
                                <ul>
                                    {skillsIcons.map((icon) => (
                                        <li key={icon.id}>
                                            <img src={icon.img} alt="skill-icon" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
