import "../css/Contact.css";
import { IconMail, IconMapSearch, IconBrandLinkedin } from "@tabler/icons-react";

function Contact() {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="contact__content">
                        <div className="contact__title">
                            <p>Contact Me</p>
                            <h3>Reach out down below! 👇</h3>
                        </div>
                        <div className="contact__icons">
                            <div className="contact__icon-box">
                                <span>
                                    <IconMapSearch width={30} height={30} />
                                </span>
                                <div className="contact__info">
                                    <h3>Location</h3>
                                    <p>Hollywood, Florida</p>
                                </div>
                            </div>

                            <div className="contact__icon-box">
                                <span>
                                    <IconMail width={30} height={30} />
                                </span>
                                <div className="contact__info">
                                    <h3>Mail</h3>
                                    <a href="mailto:castellanosc0520@gmail.com">
                                        castellanosc0520@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact__icon-box">
                                <span>
                                    <IconBrandLinkedin width={30} height={30} />
                                </span>
                                <div className="contact__info">
                                    <h3>Linkedin</h3>
                                    <a href="https://www.linkedin.com/in/castellanosc/">
                                        in/castellanosc
                                    </a>
                                </div>
                            </div>

                            <div className="contact__form">
                                <form id="cform" method="post">
                                    <input className="" name="name" type="text" id="name" placeholder="Your Name"></input>
                                    <input className="" name="email" type="email" id="email" placeholder="Your Email"></input>
                                    <textarea className="" name="message" placeholder="Message"></textarea>
                                    <button href="#" className="" >Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
