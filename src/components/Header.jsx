import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <header className="header">
            <div className="logo">MyPortfolio</div>

            <div className="header-controls">
                <button className="hire-btn">
                    Hire Me
                </button>

                <div className="theme-switch">
                    <span>DARK MODE</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={() =>
                                setTheme(theme === "light" ? "dark" : "light")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                <span className="divider">|</span>

                <button
                    className="lang-btn"
                    onClick={() =>
                        setLanguage(language === "TR" ? "EN" : "TR")
                    }
                >
                    {language === "TR" ? "ENGLISH" : "TÜRKÇE'ye geç"}
                </button>
            </div>
        </header>
    );
}
