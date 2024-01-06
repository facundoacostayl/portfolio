import styles from "./ContactMeSection.module.scss";
import {
  FontAwesomeIcon,
  faLinkedin,
  faGithub,
  faDownload,
  faEnvelope,
  faArrowUp,
  faSquarePhone,
} from "../icon";
import { Theme } from "../../themeContext/types";

type Props = {
  theme: string;
  language: "english" | "espanol";
};

export const ContactMeSection = ({ theme, language }: Props) => {
  return (
    <section
      className={`${theme === "dark" ? styles.dark : styles.light}`}
      id="contact"
    >
      <div className={`${styles.container}`}>
        {language === "english" ? (
          <>
            <h2>Tell me about you!</h2>
            {/*<div className={`${styles.formContainer}`}>
              <form action="https://formspree.io/f/moqrygej" method="POST">
                <div className={`${styles.group}`}>
                  <label htmlFor="email">Your email:</label>
                  <input required type="email" name="email" id="email" />
                </div>
                <div className={`${styles.group}`}>
                  <label htmlFor="message">Your message:</label>
                  <textarea required name="message" id="message"></textarea>
                </div>
                <button type="submit">
                  <FontAwesomeIcon icon={faEnvelope} /> Send
                </button>
              </form>
        </div>*/}
            <div className={styles.contact}>
              <h3>You can find me on:</h3>
              <div className={styles.socialMediaBox}>
                <div className={`${styles.socialBox}`}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/facundoacostayl"
                  >
                    <i>
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </i>
                  </a>
                  <a href="mailto:facundoacostayl@gmail.com">
                    <i>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </i>
                  </a>
                  <a target="_blank" href="tel:1133436143">
                    <i>
                      <FontAwesomeIcon icon={faSquarePhone}></FontAwesomeIcon>
                    </i>
                  </a>

                  <a target="_blank" href="https://github.com/facundoacostayl">
                    <i>
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </i>
                  </a>
                </div>
                <div className={`${styles.resumeBox}`}>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1EDvYbjKb-H7X18Va9LV46N4wwIelEnmj/view?usp=drive_link"
                  >
                    <i>
                      <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </i>
                    <p>My CV (English)</p>
                  </a>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1RoSFPDh-u_YKZS1rXa413Qlpfk7rMYDM/view?usp=drive_link"
                  >
                    <i>
                      <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </i>
                    <p>My CV (Spanish)</p>
                  </a>
                </div>
              </div>
              <h4>Thank you for visiting!</h4>
            </div>
            <a href="#home" className={styles.upArrow}>
              <i>
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
              </i>
            </a>
          </>
        ) : (
          <>
            <h2>Contactémonos</h2>
            {/*<div className={`${styles.formContainer}`}>
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
            </div>*/}
            <div className={styles.contact}>
              <h3>Estoy en:</h3>
              <div className={styles.socialMediaBox}>
                <div className={`${styles.socialBox}`}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/facundoacostayl"
                  >
                    <i>
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </i>
                  </a>
                  <a href="mailto:facundoacostayl@gmail.com">
                    <i>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </i>
                  </a>
                  <a target="_blank" href="tel:1133436143">
                    <i>
                      <FontAwesomeIcon icon={faSquarePhone}></FontAwesomeIcon>
                    </i>
                  </a>
                  <a target="_blank" href="https://github.com/facundoacostayl">
                    <i>
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </i>
                  </a>
                </div>
                <div className={`${styles.resumeBox}`}>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1EDvYbjKb-H7X18Va9LV46N4wwIelEnmj/view?usp=drive_link"
                  >
                    <i>
                      <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </i>
                    <p>Mi CV (Inglés)</p>
                  </a>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1RoSFPDh-u_YKZS1rXa413Qlpfk7rMYDM/view?usp=drive_link"
                  >
                    <i>
                      <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </i>
                    <p>Mi CV (Español)</p>
                  </a>
                </div>
              </div>
              <h4>Gracias por la visita!</h4>
            </div>
            <a href="#home" className={styles.upArrow}>
              <i>
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
              </i>
            </a>
          </>
        )}
      </div>
    </section>
  );
};
