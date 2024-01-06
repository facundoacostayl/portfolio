//HOOKS
import { useState, useEffect } from "react";

//STYLES
import styles from "./PresentationGroup.module.scss";

//ICONS
import { FontAwesomeIcon, faReact } from "../icon";

type Props = {
  theme: string;
  language: "english" | "espanol";
};

export const PresentationGroup: React.FC<Props> = ({ theme, language }) => {
  return (
    <ul className={`${theme === "dark" ? styles.dark : styles.light}`}>
      {language === "english" ? (
        <>
          <li className={`${styles.greeting}`}>Hi, i'm</li>
          <li className={`${styles.name}`}>Facundo Acosta</li>
          <div className={`${styles.presentationBox}`}>
            <p>Full-Stack developer</p>
          </div>
        </>
      ) : (
        <>
          <li className={`${styles.greeting}`}>Hola, soy</li>
          <li className={`${styles.name}`}>Facundo Acosta</li>
          <div className={`${styles.presentationBox}`}>
            <p>Full-Stack developer</p>
          </div>
        </>
      )}
    </ul>
  );
};
