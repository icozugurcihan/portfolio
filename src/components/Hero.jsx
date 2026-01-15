import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import profile from "../data/profile.json";
import GithubIcon from "../assets/icons/github.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import HeroImage from "../assets/hero/hero.png";
export default function Hero() {
    const { language } = useContext(LanguageContext);

    const title = profile.heroTitle[language];
    const description = profile.heroDescription[language];

    return (
        <section className="hero">
            <div className="hero-text">
                <span className="hero-name">Almila Su</span>
                <h1>
                    {title.split("\n").map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h1>

                <p>{description}</p>

                

                <div className="hero-buttons">

<a
  href={profile.social.github}
  target="_blank"
  rel="noopener noreferrer"
  className="btn hero-hire"
>Hire Me</a>
<a
  href={profile.social.github}
  target="_blank"
  rel="noopener noreferrer"
  className="btn hero-outline"
>
  <img src={GithubIcon} alt="GitHub" />
  Github
</a>

<a
  href={profile.social.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="btn hero-outline"
>
  <img src={LinkedinIcon} alt="LinkedIn" />
  Linkedin
</a>

                </div>
            </div>

                        <div className="hero-image">
                <img src={HeroImage} alt="Hero" />
            </div>
        </section>
    );
}
