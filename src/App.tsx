//STYLES
import "./index.scss";
import styles from "./components/aboutMeSection/AboutMeSection.module.scss";

//HOOKS
import { useState, useEffect } from "react";

//CONTEXT
import { useTheme } from "./themeContext/ThemeProvider";
import { useLanguage } from "./languageContext/LanguageProvider";

//COMPONENTS
import { Navbar } from "./components/navbar";
import { ProfileItem } from "./components/profileItem/ProfileItem";
import { InfoItem } from "./components/infoItem";
import { PresentationGroup } from "./components/presentation";
import { Menu } from "./components/menu";
import { DownArrow } from "./components/downarrow";
import { ThemeToggle } from "./components/themeToggle";
import { ProjectsSection } from "./components/projectsSection";
import { AboutMeSection } from "./components/aboutMeSection";
import { MySkillsSection } from "./components/mySkillsSection";
import { ContactMeSection } from "./components/contactMeSection";

//FONTAWESOME
import { FontAwesomeIcon, faMoon, faSun, faBars } from "./components/icon";

//ICONS FOR ABOUT ME
import { faReact, faJsSquare, faGlobe, faNodeJs } from "./components/icon";
import { Theme } from "./themeContext/types";

function App() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsProfileLoaded(true);
    }, 400);
  }, []);

  return (
    <div className="App" id={theme}>
      {isMenuActive && (
        <Menu onClose={() => setIsMenuActive(false)}>
          {language === "english" ? (
            <>
              <ul className="menu-list">
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About Me</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="menu-list">
                <li>
                  <a href="#projects">Proyectos</a>
                </li>
                <li>
                  <a href="#about">Sobre mí</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
              </ul>
            </>
          )}
        </Menu>
      )}

      <div
        className={`home-container ${!isProfileLoaded ? "hidden" : "active"}`}
      >
        <Navbar
          theme={theme}
          setTheme={setTheme}
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        >
          <ul id={theme === "dark" ? "dark" : "light"} className="nav-menu">
            {language === "english" ? (
              <>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About Me</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="#projects">Proyectos</a>
                </li>
                <li>
                  <a href="#about">Sobre mí</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
              </>
            )}
          </ul>
        </Navbar>
        <header id="home" className="app-header">
          <ProfileItem theme={theme} menuMode={isMenuActive} />
          <div className={`${isMenuActive && "hidden"}`}>
            <PresentationGroup language={language} theme={theme} />
          </div>
        </header>
        {!isMenuActive && <DownArrow sectionId="projects" />}
      </div>

      {!isMenuActive && isProfileLoaded && (
        <>
          <div className="projects-section">
            <ProjectsSection language={language} theme={theme} />
          </div>
          <AboutMeSection
            theme={theme}
            section="about"
            title={language === "english" ? "One pleasure..." : "Hola!"}
          >
            {language === "english" ? (
              <>
                <p>
                  {" "}
                  Im a self-taught Backend Developer based in Buenos Aires,
                  Argentina, willing to be an expert in{" "}
                  <span className={`${styles.nodeColor}`}>
                    <FontAwesomeIcon icon={faNodeJs} />
                    NodeJS
                  </span>{" "}
                  and its ecosystem and{" "}
                  <span className={`${styles.tsColor}`}>Typescript</span>. I'm
                  looking for my first job in this field.
                </p>
                <p>
                  {" "}
                  I created projects for my last job (administration position)
                  like{" "}
                  <a
                    target="_blank"
                    href="https://edendesk-crm-frontend.vercel.app"
                  >
                    this CRM
                  </a>{" "}
                  in order to improve daily tasks efficiency, and i made their{" "}
                  <a target="_blank" href="https://proviamoalmacengourmet.com">
                    E-commerce
                  </a>{" "}
                  , which is currently working, as well as personal projects
                  with a problem solution focus (you can find all of them in 'My
                  Projects' section).
                </p>
              </>
            ) : (
              <>
                <p>
                  {" "}
                  Soy un Desarrollador Backend autodidacta de Buenos Aires,
                  Argentina, en constante crecimiento y dispuesto a ser un
                  experto tanto en{" "}
                  <span className={`${styles.nodeColor}`}>
                    <FontAwesomeIcon icon={faNodeJs} />
                    NodeJS
                  </span>{" "}
                  y su ecosistema, como en{" "}
                  <span className={`${styles.tsColor}`}>Typescript</span>.
                  Actualmente me encuentro en busqueda de mi primer trabajo en
                  el rubro IT.
                </p>
                <p>
                  {" "}
                  Desarrollé proyectos para mi último trabajo (puesto de
                  administración) como{" "}
                  <a
                    target="_blank"
                    href="https://edendesk-crm-frontend.vercel.app"
                  >
                    este CRM
                  </a>{" "}
                  que desarrollé para mejorar la eficacia de mis tareas diarias,
                  e hice su{" "}
                  <a target="_blank" href="https://proviamoalmacengourmet.com">
                    E-commerce
                  </a>
                  , el cual actualmente está en uso, así como proyectos
                  personales con foco en la solución de problemas puntuales
                  (estos se encuentran en la sección "Mis Proyectos").
                </p>
              </>
            )}
          </AboutMeSection>
          <AboutMeSection
            theme={theme}
            section="skills"
            title={language === "english" ? "My stack" : "Mi stack"}
          >
            {language === "english" ? (
              <>
                <p>
                  I use{" "}
                  <span className={`${styles.nodeColor}`}>
                    <FontAwesomeIcon icon={faNodeJs} />
                    NodeJS
                  </span>{" "}
                  + <span className={`${styles.tsColor}`}>
                    Typescript
                  </span>,{" "}
                  <span className={`${styles.nodeColor}`}>Express</span>,{" "}
                  <span className={`${styles.englandColor}`}>NestJs</span>,{" "}
                  <span>SQL</span> +{" "}
                  <span className={`${styles.pgColor}`}>Postgres</span>,{" "}
                  <span>No-SQL</span> +{" "}
                  <span className={`${styles.nodeColor}`}>MongoDB</span>,{" "}
                  <span className={`${styles.typeORMColor}`}>TypeORM</span>,{" "}
                  <span className={`${styles.graphQLColor}`}>GraphQL</span>,{" "}
                  <span className={`${styles.jwtColor}`}>JWT</span> and{" "}
                  <span className={`${styles.jestColor}`}>Jest</span> for unit
                  testings.
                  <p>
                    {" "}
                    I focus in design and architecture patterns too, as well as
                    the best security practices.
                  </p>
                </p>
                <p>
                  {" "}
                  For client side,{" "}
                  <span className={`${styles.reactColor}`}>
                    <FontAwesomeIcon icon={faReact} />
                    React
                  </span>
                  , <span className={`${styles.twColor}`}>Tailwind</span>,{" "}
                  <span className={`${styles.sassColor}`}>SASS</span>,{" "}
                  <span className={`${styles.graphQLColor}`}>Bootstrap</span>,{" "}
                </p>
                <p>
                  {" "}
                  <span className={`${styles.englandColor}`}>
                    <FontAwesomeIcon icon={faGlobe} />
                    English
                  </span>{" "}
                  language is another of my passions, i use it everyday to
                  improve my skills. I can speak fluently, write, listen and
                  read.
                </p>
                {/*Teamwork, empathy and commitment are some of my virtues, and i'd love to show you what i can do!*/}
              </>
            ) : (
              <>
                <p>
                  Utilizo{" "}
                  <span className={`${styles.nodeColor}`}>
                    <FontAwesomeIcon icon={faNodeJs} />
                    NodeJS
                  </span>{" "}
                  + <span className={`${styles.tsColor}`}>
                    Typescript
                  </span>,{" "}
                  <span className={`${styles.nodeColor}`}>Express</span>,{" "}
                  <span className={`${styles.englandColor}`}>NestJs</span>,{" "}
                  <span>SQL</span> +{" "}
                  <span className={`${styles.pgColor}`}>Postgres</span>,{" "}
                  <span>No-SQL</span> +{" "}
                  <span className={`${styles.nodeColor}`}>MongoDB</span>,{" "}
                  <span className={`${styles.typeORMColor}`}>TypeORM</span>,{" "}
                  <span className={`${styles.graphQLColor}`}>GraphQL</span>,{" "}
                  <span className={`${styles.jwtColor}`}>JWT</span> and{" "}
                  <span className={`${styles.jestColor}`}>Jest</span> para unit
                  testings.
                  <p>
                    {" "}
                    Hago foco en patrones de diseño y arquitectura, así como en
                    buenas practicas de seguridad.
                  </p>
                </p>
                <p>
                  {" "}
                  En el lado del cliente,{" "}
                  <span className={`${styles.reactColor}`}>
                    <FontAwesomeIcon icon={faReact} />
                    React
                  </span>
                  , <span className={`${styles.twColor}`}>Tailwind</span>,{" "}
                  <span className={`${styles.sassColor}`}>SASS</span>,{" "}
                  <span className={`${styles.graphQLColor}`}>Bootstrap</span>,{" "}
                </p>
                <p>
                  {" "}
                  El{" "}
                  <span className={`${styles.englandColor}`}>
                    <FontAwesomeIcon icon={faGlobe} />
                    inglés
                  </span>{" "}
                  es otra de mis pasiones, lo utilizo a diario para perfeccionar
                  mis habilidades. Puedo hablarlo fluidamente, escribir y
                  entender tanto al escucharlo como al leerlo.
                </p>
                {/*Teamwork, empathy and commitment are some of my virtues, and i'd love to show you what i can do!*/}
              </>
            )}
          </AboutMeSection>
          <ContactMeSection language={language} theme={theme} />
        </>
      )}
    </div>
  );
}

export default App;
