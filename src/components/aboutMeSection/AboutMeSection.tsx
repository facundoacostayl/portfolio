//STYLES
import styles from './AboutMeSection.module.scss';
import {DownArrow} from '../../components/downarrow';

type Props = {
  children: React.ReactNode;
  title: string;
  section: "about" | "skills";
  theme: string;
}

export const AboutMeSection = ({ children, title, section, theme }: Props) => {
  return (
    <section className={`${theme === "dark" ? styles.dark : styles.light}`} id={`${section}`}>
      <div className={`${styles.container} ${section === "about" ? styles.aboutContainer : styles.skillsContainer}`}>
        <h2>{title}</h2>
        <div className={styles.children}>
          {children}
        </div>
        <DownArrow sectionId={section === "about" ? "skills" : "contact"}/>
      </div>
    </section>
  )
}