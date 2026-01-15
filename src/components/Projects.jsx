import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Projects() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="projects">
            <h2 className="section-title">
                {language === "TR" ? "Projeler" : "Projects"}
            </h2>

            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}
