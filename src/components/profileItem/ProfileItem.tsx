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
        <img className={`${!isProfileLoaded && "hidden"} ${styles.profileImage}`} src="https://lh3.googleusercontent.com/a-/AOh14Gj3HCc1IRWPzQ5ht9QYHC8mrTO6gUIKlg9gja3c=s288-p-rw-no" />
      </div>
    </div>
  )
}
