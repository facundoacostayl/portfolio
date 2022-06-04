import styles from './ProjectItem.module.scss';

type Props = {
  children: React.ReactNode,
  title: string,
  subtitle: string,
  image: string
}

export const ProjectItem: React.FC<Props> = ({children, title, subtitle, image}) => {
  return (
    <article className={`${styles.container}`}>
      <img src={`${image}`} alt="project" />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{children}</p>
    </article>
  )
}
