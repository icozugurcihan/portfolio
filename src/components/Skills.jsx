import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import skills from "../data/skills.json";

export default function Skills() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="skills">
            <h2 className="section-title">
                {language === "TR" ? "Yetenekler" : "Skills"}
            </h2>

            <div className="skills-grid">
                {skills.map(skill => (
                    <div key={skill.id} className="skill-card">
                        <h3>{skill.title[language]}</h3>
                        <p>{skill.description[language]}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
