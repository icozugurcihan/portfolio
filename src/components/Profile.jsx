import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import profile from "../data/profile.json";

export default function Profile() {
    const { language } = useContext(LanguageContext);

    const personal = profile.personal;
    const about = profile.about?.[language];
    const role = profile.personal?.role?.[language];

    return (
        <section className="profile">
            <div className="profile-left">
                <h2 className="section-title">Profile</h2>

                <ul className="profile-list">
                    <li>
                        <span>Birth Date:</span>
                        <span>{personal?.birthDate || "-"}</span>
                    </li>
                    <li>
                        <span>Location:</span>
                        <span>{personal?.location || "-"}</span>
                    </li>
                    <li>
                        <span>Education:</span>
                        <span>{personal?.education || "-"}</span>
                    </li>
                    <li>
                        <span>Role:</span>
                        <span>{role || "-"}</span>
                    </li>
                </ul>
            </div>

            <div className="profile-right">
                <h2 className="section-title">About Me</h2>
                <p>{about || "-"}</p>
            </div>
        </section>
    );
}
