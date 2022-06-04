import styles from './MySkillsSection.module.scss';

export const MySkillsSection = () => {
  return (
    <section>
      <div className={`${styles.container}`}>
        <h2>My Skills</h2>
        <ul>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" /></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}
