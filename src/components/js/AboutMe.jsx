import "../css/AboutMe.css";
import AboutImg from "../images/bg-img.jpeg";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.jpg";

function AboutMe() {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="img-side">
                            <img src={AboutImg} alt="background" className="img-side__main-img" />
                            <span>
                                <div className="rotate-wrapper">
                                    <img src={RoundedText} alt="text" />
                                </div>
                                <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
                            </span>
                        </div>
                        <div className="text-side">
                            <h3>About me</h3>
                            <h4>
                                Deployment Network Engineer <br /> based in Hollywood, Florida 📍
                            </h4>
                            <p>
                                Hi, my name is Carlos! I am a Computer Science graduate with hands-on experience in enterprise data center operations, network management, and server environments. I specialize in deploying hardware, setting up VLANs, managing subnets, and troubleshooting network setups to keep infrastructure running smoothly.
                                <br />
                                <br />
                                With a strong background in software development, I leverage my programming skills to write helpful scripts and build automation workflows. My experience includes working as a Junior Software Engineer at BetterNOI, where I developed data-driven solutions using Python and JavaScript—a toolkit that allows me to bring an automation-focused approach to modern network infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;