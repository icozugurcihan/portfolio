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
                        href="mailto:ugurcihanicoz@gmail.com"
                        className="footer-mail"
                    >
                        👉 ugurcihanicoz@gmail.com
                    </a>
                </div>

                <div className="footer-right">
                    <a href="#" className="footer-link">
                        Personal Blog
                    </a>
                    <a
                        href="https://github.com/icozugurcihan"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link github"
                    >
                        Github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/u%C4%9Fur-cihan-i%C3%A7%C3%B6z-893005299/"
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
