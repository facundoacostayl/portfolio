//HOOKS
import { useEffect } from "react";
import { useLanguage } from "../../languageContext/LanguageProvider";

//STYLES
import styles from "./LanguageSelector.module.scss";

//TYPES
import {Language} from '../../languageContext/types';

type Props = {
  theme: "dark" | "light"
}

export const LanguageSelector = ({theme}: Props) => {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div onClick={() => setLanguage(language === Language.english ? Language.espanol : Language.english)} className={styles.element}>
      {language === "english" ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png"
          alt="flag"
        />
      ) : (
        <img
          src="https://i.pinimg.com/originals/6d/58/03/6d5803a761b49785361bdf6789212e36.png"
          alt="flag"
        />
      )}
      <span className={theme === "dark" ? styles.dark : styles.light}>{language === "english" ? "EN" : "ES"}</span>
    </div>
  );
};
