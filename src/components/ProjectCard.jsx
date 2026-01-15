import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function ProjectCard({ project }) {
    const { language } = useContext(LanguageContext);

    return (
        <article className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.title[language]} />
            </div>

            <h3 className="project-title">
                {project.title[language]}
            </h3>

            <p className="project-description">
                {project.description[language]}
            </p>

            <div className="project-tags">
                {project.tech.map((item, index) => (
                    <span key={index} className="project-tag">
                        {item}
                    </span>
                ))}
            </div>

            <div className="project-links">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
                <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                >
                    View Site
                </a>
            </div>
        </article>
    );
}
