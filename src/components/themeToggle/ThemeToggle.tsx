import { FontAwesomeIcon, faMoon, faSun } from "../icon";
import styles from './ThemeToggle.module.scss';

type Props = {
    theme: "dark" | "light";
    onToggle: VoidFunction
}

export const ThemeToggle = ({theme = "dark", onToggle}:Props) => {
  return (
    <div onClick={onToggle} className={`${styles.radioBtn}`}>
        <div className={`${styles.radioInner} ${theme === "dark" ? styles.active : ""}`}>
        </div>
    </div>
  )
}
