//HOOKS
import { useState } from 'react';

import styles from './ProjectsSection.module.scss';
import { DownArrow } from '../downarrow';

//COMPONENTS
import { Navbar } from '../navbar';
import { ProjectItem } from './projectItem';

//TYPES
import { Theme } from '../../themeContext/types';

type Props = {
  theme: Theme;
}

export const ProjectsSection = ({ theme }: Props) => {

  const [isMoreOpened, setIsMoreOpened] = useState(false);

  return (
    <section className={`${theme === "dark" ? styles.dark : styles.light}`} id="projects">
      <div className={`${styles.container}`}>
        <h1>My Projects</h1>
        <ProjectItem title="EdenDesk CRM" subtitle="Real Project" image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png">
          CRM for a regional products company. It was created in order to get information about incomes.
        </ProjectItem>
        <ProjectItem title="Proviamo's E-Commerce" subtitle="Real Project" image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png">
          E-Commerce for a gourmet products company based in Argentina. It's my first project and was developed on Vanilla Javascript, NodeJS and Google Sheets API as database.
        </ProjectItem>
        <ProjectItem title="Marketlist against Inflation" subtitle="Personal Project" image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png">
          In order to take a control of money increments due to inflation, i created this marketlist that save your last bought total and converts your actual currency to dollars to compare the price in your next visit to the market.
        </ProjectItem>
        {isMoreOpened &&
          <ProjectItem title="Harris Benedict Calculator" subtitle="Personal Project" image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png">
            Harris Benedict Calculator take information about your height, weigth, age, etc and shows you your metabolism requirements if you want to loss, gain or mantein your weight;
          </ProjectItem>
        }
        <button onClick={() => setIsMoreOpened(!isMoreOpened)} className={styles.more}>{isMoreOpened ? "Hide content" : "See more"}</button>
        <div className={styles.arrowBox}>
          <DownArrow sectionId="about" />
        </div>
      </div>
    </section>
  )
}
