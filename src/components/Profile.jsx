import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import profile from "../data/profile.json";

export default function Profile() {
    const { language } = useContext(LanguageContext);

    const { labels, personal, about } = profile;

    return (
        <section className="profile">
            <div className="profile-left">
                <h2 className="section-title">
                    {labels[language].profile}
                </h2>

                <h3 className="profile-subtitle">
                    {labels[language].profile}
                </h3>

                <ul className="profile-list">
                    <li>
                        <span>{labels[language].birthDate}</span>
                        <span>{personal.birthDate}</span>
                    </li>
                    <li>
                        <span>{labels[language].location}</span>
                        <span>{personal.location}</span>
                    </li>
                    <li>
                        <span>{labels[language].education}</span>
                        <span>{personal.education}</span>
                    </li>
                    <li>
                        <span>{labels[language].role}</span>
                        <span>{personal.role[language]}</span>
                    </li>
                </ul>
            </div>

            <div className="profile-right">
                <h2 className="section-title">
                    {labels[language].about}
                </h2>
                <p>{about[language]}</p>
            </div>
        </section>
    );
}
