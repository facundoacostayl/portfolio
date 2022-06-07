//STYLES
import styles from "./ProjectItem.module.scss";

//ICONS
import { FontAwesomeIcon, faGithub, faLink } from '../../icon';


type Props = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  image: string;
  project: string;
};

export const ProjectItem: React.FC<Props> = ({
  children,
  title,
  subtitle,
  image,
  project
}) => {
  return (
    <article className={`${styles.article}`}>
      <div className={`${styles.container}`}>
        <img src={`${image}`} alt="project" />
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{children}</p>
      </div>

      {project === "edendesk" &&
        <>
          <div className={`${styles.stack}`}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
              alt="react-logo"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
              alt="typescript-logo"
            />
             <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              alt="tailwind-logo"
            />
            <img
              src="https://pablomagaz.com/content/images/2020/01/NodeJs.png"
              alt="node-logo"
            />
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn.pixabay.com/photo/2020/03/17/17/46/database-4941338_960_720.png"
                alt="postgres-logo"
              />
              <p>PostgreSQL</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://img.stackshare.io/service/7419/20165699.png"
                alt="type-orm"
              />
              <p>TypeORM</p>
            </div>
          </div>
        </>
      }

      {project === "proviamo" &&
        <>
          <div className={`${styles.stack}`}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              alt="css-logo"
            />
            <img
              src="https://i.ibb.co/ZHPxSf1/80-803501-javascript-logo-logo-de-java-script-png.png"
              alt="-javascript-logo"
            />
            <img
              src="https://pablomagaz.com/content/images/2020/01/NodeJs.png"
              alt="node-logo"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/2965/2965327.png"
              alt="sheets-logo"
            />
          </div>
        </>
      }

      {project === "marketlist" &&
        <>
          <div className={`${styles.stack}`}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
              alt="react-logo"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
              alt="typescript-logo"
            />
            <img
              src="https://stringfixer.com/files/736788654.jpg"
              alt="node-logo"
            />
            
              <img
                src="https://raw.githubusercontent.com/johan-v-r/LibSassBuilder/main/package/sass.png"
              />
          </div>
        </>
      }

      {project === "caloriesCalculator" &&
        <>
          <div className={`${styles.stack}`}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
              alt="react-logo"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
              alt="typescript-logo"
            />
            <img
              src="https://pablomagaz.com/content/images/2020/01/NodeJs.png"
              alt="node-logo"
            />
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn.pixabay.com/photo/2020/03/17/17/46/database-4941338_960_720.png"
                alt="postgres-logo"
              />
              <p>PostgreSQL</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://img.stackshare.io/service/7419/20165699.png"
                alt="type-orm"
              />
              <p>TypeORM</p>
            </div>
          </div>
        </>
      }

      <div className={`${styles.info}`}>
        <div className={`${styles.icon}`}>
          <FontAwesomeIcon icon={faLink} />
          <p>Go to website</p>
        </div>
        <div className={`${styles.icon}`}>
          <FontAwesomeIcon icon={faGithub} />
          <p>Repository</p>
        </div>
      </div>
    </article>
  );
};
