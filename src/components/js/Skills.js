import "../css/Skills.css";

function Skills() {
    const skillsIcons = [
        {
            img: "https://skillicons.dev/icons?i=html",
            id: 1,
        },
        {
            img: "https://skillicons.dev/icons?i=css",
            id: 2,
        },
        {
            img: "https://skillicons.dev/icons?i=js",
            id: 3,
        },
        {
            img: "https://skillicons.dev/icons?i=jquery",
            id: 4,
        },
        {
            img: "https://skillicons.dev/icons?i=bootstrap",
            id: 5,
        },
        {
            img: "https://skillicons.dev/icons?i=sass",
            id: 6,
        },
        {
            img: "https://skillicons.dev/icons?i=tailwind",
            id: 7,
        },
        {
            img: "https://skillicons.dev/icons?i=react",
            id: 8,
        },
        {
            img: "https://skillicons.dev/icons?i=nodejs",
            id: 9,
        },
        {
            img: "https://skillicons.dev/icons?i=py",
            id: 10,
        },
        {
            img: "https://skillicons.dev/icons?i=django",
            id: 11,
        },
        {
            img: "https://skillicons.dev/icons?i=mysql",
            id: 12,
        },
        {
            img: "https://skillicons.dev/icons?i=cpp",
            id: 13,
        },
        {
            img: "https://skillicons.dev/icons?i=sentry",
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