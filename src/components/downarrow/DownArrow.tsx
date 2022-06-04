import styles from './DownArrow.module.scss';
import {useTheme} from '../../themeContext/ThemeProvider';

type Props = {
  sectionId: string;
}

export const DownArrow = ({sectionId}: Props) => {

  const {theme} = useTheme();
 
  return (
    <a className={theme === "dark" ? styles.dark : styles.light} href={`#${sectionId}`}>
      <div className={`${styles.box}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  )
}
