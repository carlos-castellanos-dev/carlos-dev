import "../css/Skills.css";

function Skills() {
    const skillsIcons = [
        {
            img: "https://skillicons.dev/icons?i=py",
            id: 1,
        },
        {
            img: "https://skillicons.dev/icons?i=ansible",
            id: 2,
        },
        {
            img: "https://skillicons.dev/icons?i=linux",
            id: 3,
        },
        {
            img: "https://skillicons.dev/icons?i=ubuntu",
            id: 4,
        },
        {
            img: "https://skillicons.dev/icons?i=docker",
            id: 5,
        },
        {
            img: "https://skillicons.dev/icons?i=aws",
            id: 6,
        },
        {
            img: "https://skillicons.dev/icons?i=nginx",
            id: 7,
        },
        {
            img: "https://skillicons.dev/icons?i=cloudflare",
            id: 8,
        },
        {
            img: "https://skillicons.dev/icons?i=bash",
            id: 9,
        },
        {
            img: "https://skillicons.dev/icons?i=git",
            id: 10,
        },
        {
            img: "https://skillicons.dev/icons?i=github",
            id: 11,
        },
        {
            img: "https://skillicons.dev/icons?i=gitlab",
            id: 12,
        },
        {
            img: "https://skillicons.dev/icons?i=mysql",
            id: 13,
        },
        {
            img: "https://skillicons.dev/icons?i=windows",
            id: 14,
        },
    ];

    return (
        <>
            <section id="skills" className="skills-list">
                <div className="container">
                    <div className="skills-content">
                        <div className="skills-main">
                            <div className="skills-text">
                                <p>Tech Skills</p>
                            </div>
                            <div className="logos">
                                <div className="logos-slide">
                                    <ul>
                                        {skillsIcons.map((icon) => (
                                            <li key={icon.id}>
                                                <img src={icon.img} alt="skill-icon" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="logos-slide">
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
                </div>
            </section>
        </>
    );
}

export default Skills;