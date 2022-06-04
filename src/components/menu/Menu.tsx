import styles from "./Menu.module.scss"

type Props = {
    children: React.ReactNode,
    onClose: VoidFunction
}

export const Menu:React.FC<Props> = ({children, onClose}) => {
  return (
    <div onClick={onClose} className={`${styles.container}`}>
        <b className={`${styles.backdrop}`}></b>
        <span onClick={onClose} className={styles.closeButton}>X</span>
        {children}
    </div>
  )
}
