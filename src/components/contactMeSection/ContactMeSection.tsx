import styles from './ContactMeSection.module.scss';
import { FontAwesomeIcon, faLinkedin, faGithub, faDownload, faEnvelope } from '../icon';
import { Theme } from '../../themeContext/types';

type Props = {
    theme: string,
    language: "english" | "español"
}

export const ContactMeSection = ({ theme, language }: Props) => {
    return (
        <section className={`${theme === "dark" ? styles.dark : styles.light}`} id="contact">
            <div className={`${styles.container}`}>
                {language === "english" ?
                    <>
                        <h2>Tell me about you!</h2>
                        <form
                            action="https://formspree.io/f/moqrygej"
                            method="POST"
                        >
                            <div className={`${styles.group}`}>
                                <label htmlFor="email">
                                    Your email:
                                </label>
                                <input required type="email" name="email" id="email" />
                            </div>
                            <div className={`${styles.group}`}>
                                <label htmlFor="message">
                                    Your message:
                                </label>
                                <textarea required name="message" id="message"></textarea>
                            </div>
                            <button type="submit"><FontAwesomeIcon icon={faEnvelope} /> Send</button>
                        </form>
                        <div className={styles.contact}>
                            <p>Or you can find me on:</p>
                            <div className={styles.socialMediaBox}>
                                <i><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i>
                                <i><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon><p>CV</p></i>
                                <i><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></i>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <h2>Contactémonos!</h2>
                        <form
                            action="https://formspree.io/f/moqrygej"
                            method="POST"
                        >
                            <div className={`${styles.group}`}>
                                <label htmlFor="email">
                                    Tu email:
                                </label>
                                <input required type="email" name="email" id="email" />
                            </div>
                            <div className={`${styles.group}`}>
                                <label htmlFor="message">
                                    Tu mensaje:
                                </label>
                                <textarea required name="message" id="message"></textarea>
                            </div>
                            <button type="submit"><FontAwesomeIcon icon={faEnvelope} /> Enviar</button>
                        </form>
                        <div className={styles.contact}>
                            <p>o también estoy en:</p>
                            <div className={styles.socialMediaBox}>
                                <i><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i>
                                <i><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon><p>CV</p></i>
                                <i><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></i>
                            </div>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}
