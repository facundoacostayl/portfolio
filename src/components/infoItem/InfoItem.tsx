type Props = {
    children: React.ReactNode;
}

import styles from './InfoItem.module.scss';

export const InfoItem: React.FC<Props> = ({children}) => {
  return (
    <li className={`${styles.infoItem}`}>{children}</li>
  )
}
