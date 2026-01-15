export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h2>
                        Let’s work together on <br />
                        your next product.
                    </h2>

                    <a
                        href="mailto:almilasucode@gmail.com"
                        className="footer-mail"
                    >
                        👉 almilasucode@gmail.com
                    </a>
                </div>

                <div className="footer-right">
                    <a href="#" className="footer-link">
                        Personal Blog
                    </a>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link github"
                    >
                        Github
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link linkedin"
                    >
                        Linkedin
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Uğur Cihan İçöz
            </div>
        </footer>
    );
}
