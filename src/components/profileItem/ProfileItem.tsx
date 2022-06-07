import styles from './ProfileItem.module.scss';
import { useState, useEffect } from 'react';

type Props = {
  menuMode: boolean
  theme: string
}

export const ProfileItem: React.FC<Props> = ({ menuMode, theme }) => {

  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsProfileLoaded(true);
    }, 500)
  }, [])

  return (
    <div className={`${theme === "dark" ? styles.dark : styles.light}`}>
      <div className={`${styles.profileItem} ${menuMode ? styles.borderHidden : ""}`}>
        <img className={`${!isProfileLoaded && "hidden"} ${styles.profileImage}`} src="https://media-exp1.licdn.com/dms/image/C4D03AQHA5GXywIB7Vw/profile-displayphoto-shrink_800_800/0/1653831397692?e=1659571200&v=beta&t=hUEVAT8sWcueMox-BJ7he17HvrUY1d3l2XbodHUi-MQ" />
      </div>
    </div>
  )
}
