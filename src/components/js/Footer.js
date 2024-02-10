import "../css/Footer.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footerc">
                        <h4>
                            Copyright © {new Date().getFullYear()} Carlos Castellanos. All Rights Reserved.
                        </h4>
                        <div className="footerc__socials">
                            <a
                                aria-label="linkedin"
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/castellanosc/"
                            >
                                <IconBrandLinkedin width={30} height={30} />
                            </a>
                            <a
                                aria-label="github"
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/carlos-castellanos-dev"
                            >
                                <IconBrandGithub width={30} height={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
