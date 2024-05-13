//STYLES
import styles from "./ProjectItem.module.scss";

//ICONS
import { FontAwesomeIcon, faGithub, faLink } from "../../icon";

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  image: string;
  project: string;
  theme: string;
  url: string;
};

export const ProjectItem: React.FC<Props> = ({
  children,
  title,
  subtitle,
  image,
  project,
  theme,
  url,
}) => {
  return (
    <article className={`${styles.article}`}>
      <div className={`${styles.container}`}>
        <a target="_blank" href={url}>
          <img src={`${image}`} alt="project" />
        </a>
        <a target="_blank" href={url}>
          <h3>{title}</h3>
        </a>
        <h4>{subtitle}</h4>
        <p>{children}</p>
      </div>

      {project === "edendesk" && (
        <>
          <div className={`${styles.stack}`}>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
                alt="typescript-logo"
              />
              <p>Typescript</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                alt="node-logo"
              />
              <p>NodeJS</p>
            </div>

            <div className={`${styles.icon}`}>
              <img
                src="https://img.stackshare.io/service/7419/20165699.png"
                alt="type-orm"
              />
              <p>TypeORM</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn.pixabay.com/photo/2020/03/17/17/46/database-4941338_960_720.png"
                alt="postgres-logo"
              />
              <p>PostgreSQL</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://img.icons8.com/color/480/java-web-token.png"
                alt="type-orm"
              />
              <p>JWT</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                alt="react-logo"
              />
              <p>React</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                alt="tailwind-logo"
              />
              <p>Tailwind</p>
            </div>
          </div>
        </>
      )}
      {project === "proviamo" && (
        <>
          <div className={`${styles.stack}`}>
            <div className={`${styles.icon}`}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Java-logo.png"
                alt="java-logo"
              />
              <p>Java</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png"
                alt="springboot-logo"
              />
              <p>SpringBoot</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn.pixabay.com/photo/2020/03/17/17/46/database-4941338_960_720.png"
                alt="postgres-logo"
              />
              <p>PostgreSQL</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://img.icons8.com/color/480/java-web-token.png"
                alt="type-orm"
              />
              <p>JWT</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                alt="react-logo"
              />
              <p>React</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
                alt="typescript-logo"
              />
              <p>Typescript</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                alt="tailwind-logo"
              />
              <p>Tailwind</p>
            </div>
          </div>
        </>
      )}

      {project === "multipar" && (
        <>
          <div className={`${styles.stack}`}>
            <div className={`${styles.icon}`}>
              <img
                src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"
                alt="javascript-logo"
              />
              <p>Javascript</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png"
                alt="html-logo"
              />
              <p>HTML</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://raw.githubusercontent.com/johan-v-r/LibSassBuilder/main/package/sass.png"
                alt="sass-logo"
              />
              <p>Sass</p>
            </div>
          </div>
        </>
      )}

      {project === "autoprices" && (
        <>
          <div className={`${styles.stack}`}>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
                alt="typescript-logo"
              />
              <p>Typescript</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                alt="node-logo"
              />
              <p>NodeJS</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png"
                alt="nestjs-logo"
              />
              <p>NestJS</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn.pixabay.com/photo/2020/03/17/17/46/database-4941338_960_720.png"
                alt="postgres-logo"
              />
              <p>PostgreSQL</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
                alt="graphql-logo"
              />
              <p>GraphQl</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                alt="react-logo"
              />
              <p>React</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://raw.githubusercontent.com/johan-v-r/LibSassBuilder/main/package/sass.png"
                alt="sass-logo"
              />
              <p>Sass</p>
            </div>
          </div>
        </>
      )}

      {project === "caloriesCalculator" && (
        <>
          <div className={`${styles.stack}`}>
            <div className={`${styles.icon}`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
                alt="typescript-logo"
              />
              <p>Typescript</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://themes.getbootstrap.com/wp-content/uploads/2018/02/Bootstrap-logo.png"
                alt="bootstrap-logo"
              />
              <p>Bootstrap</p>
            </div>
            <div className={`${styles.icon}`}>
              <img
                src="https://raw.githubusercontent.com/johan-v-r/LibSassBuilder/main/package/sass.png"
                alt="sass-logo"
              />
              <p>Sass</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
};
