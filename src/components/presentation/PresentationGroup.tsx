//HOOKS
import { useState, useEffect } from 'react';

//STYLES
import styles from './PresentationGroup.module.scss';

//ICONS
import { FontAwesomeIcon, faReact } from '../icon';

type Props = {
  theme: string,
  language: "english" | "español"
}

export const PresentationGroup: React.FC<Props> = ({ theme, language }) => {

  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsProfileLoaded(true);
    }, 800)
  }, [])

  return (
    <ul className={`${theme === "dark" ? styles.dark : styles.light} ${!isProfileLoaded ? styles.hidden : styles.active}`}>
      {language === "english" ?
        <>
          <li className={`${styles.greeting}`}>Hi, i'm</li>
          <li className={`${styles.name}`}>Facundo Acosta</li>
          <div className={`${styles.presentationBox}`}>
            <p>Frontend developer</p>
            <p>on <span><FontAwesomeIcon icon={faReact} />React</span></p>
          </div>
        </>
        :
        <>
        <li className={`${styles.greeting}`}>Hola, soy</li>
        <li className={`${styles.name}`}>Facundo Acosta</li>
        <div className={`${styles.presentationBox}`}>
          <p>Desarrollador Frontend</p>
          <p>en <span><FontAwesomeIcon icon={faReact} />React</span></p>
        </div>
      </>
      }
    </ul>
  )
}
