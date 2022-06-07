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
        <div className={`${styles.projectsContainer}`}>
        <ProjectItem project="edendesk" title="EdenDesk CRM" subtitle="Real Project" image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png">
          CRM for a regional products company. It was created in order to improve efficiency of client managment and get information about incomes and outcomes of the company.
        </ProjectItem>
        <ProjectItem project="proviamo" title="Proviamo's E-Commerce" subtitle="Real Project" image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png">
          E-Commerce for a gourmet products company based in Argentina. It's currently online and generating sales constantly with the MercadoPago's payment gateway.
        </ProjectItem>
        <ProjectItem project="marketlist" title="Marketlist against Inflation" subtitle="Personal Project" image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png">
          In order to take a control of money increments due to high inflation in Argentina, i created this marketlist that converts products prices and total from your currency to dollars to compare them in your next visit to the market.
        </ProjectItem>
        {isMoreOpened &&
          <ProjectItem project="caloriesCalculator" title="Harris Benedict Calculator" subtitle="Personal Project" image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png">
            Harris Benedict Calculator takes information about your height, weigth, age, etc and shows your metabolism requirements to loss, gain or mantein your weight;
          </ProjectItem>
        }
        </div>
        <button onClick={() => setIsMoreOpened(!isMoreOpened)} className={styles.more}>{isMoreOpened ? "Hide content" : "See more"}</button>

          <DownArrow sectionId="about" />

      </div>
    </section>
  )
}
