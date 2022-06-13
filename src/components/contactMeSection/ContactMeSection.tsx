import styles from './ContactMeSection.module.scss';
import { FontAwesomeIcon, faLinkedin, faGithub, faDownload, faEnvelope, faArrowUp } from '../icon';
import { Theme } from '../../themeContext/types';

type Props = {
    theme: string,
    language: "english" | "espanol"
}

export const ContactMeSection = ({ theme, language }: Props) => {
    return (
        <section className={`${theme === "dark" ? styles.dark : styles.light}`} id="contact">
            <div className={`${styles.container}`}>
                {language === "english" ?
                    <>
                        <h2>Tell me about you!</h2>
                        <div className={`${styles.formContainer}`}>
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
                        </div>
                        <div className={styles.contact}>
                            <p>Or you can find me on:</p>
                            <div className={styles.socialMediaBox}>
                                <a href="#"><i><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></i><p>CV</p></a>
                                <a href="#"><i><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></i></a>
                            </div>
                        </div>
                        <a href="#home" className={styles.upArrow}>
                            <i><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></i>
                        </a>
                    </>
                    :
                    <>
                        <h2>Contactémonos</h2>
                        <div className={`${styles.formContainer}`}>
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
                        </div>
                        <div className={styles.contact}>
                            <p>O también estoy en:</p>
                            <div className={styles.socialMediaBox}>
                                <a href="#"><i><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i></a>
                                <a href="#"><i><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></i><p>CV</p></a>
                                <a href="#"><i><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></i></a>
                            </div>
                        </div>
                        <a href="#home" className={styles.upArrow}>
                            <i><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></i>
                        </a>
                    </>
                }
            </div>
        </section>
    )
}
