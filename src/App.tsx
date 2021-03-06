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
                  <a href="#about">Sobre m??</a>
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

      <div className={`home-container ${!isProfileLoaded ? "hidden" : "active"}`}>
        <Navbar
          theme={theme}
          setTheme={setTheme}
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        >
          <ul id={theme === "dark" ? "dark" : "light"} className="nav-menu">
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
                  Im a self-taught Full-Stack Developer based in Buenos Aires,
                  Argentina, willing to be an expert in{" "}
                  <span className={`${styles.reactColor}`}>
                    <FontAwesomeIcon icon={faReact} />
                    React
                  </span>{" "}
                  and its ecosystem and{" "}
                  <span className={`${styles.jsColor}`}>
                    <FontAwesomeIcon icon={faJsSquare} />
                    Javascript
                  </span>
                  . I'm looking for my first job in this field.
                </p>
                <p>
                  {" "}
                  I created projects for my last job (administration position)
                  like this CRM in order to improve daily tasks efficiency, and
                  i made their e-commerce which is currently working, as well as
                  personal projects with a problem solution focus (you can find
                  all of them in 'My Projects' section).
                </p>
              </>
            ) : (
              <>
                <p>
                  {" "}
                  Soy un Desarrollador Full-Stack autodidacta de Buenos Aires,
                  Argentina, en constante crecimiento y dispuesto a ser un
                  experto tanto en{" "}
                  <span className={`${styles.reactColor}`}>
                    <FontAwesomeIcon icon={faReact} />
                    React
                  </span>{" "}
                  y su ecosistema, como en{" "}
                  <span className={`${styles.jsColor}`}>
                    <FontAwesomeIcon icon={faJsSquare} />
                    Javascript
                  </span>
                  . Actualmente me encuentro en busqueda de mi primer trabajo en
                  el rubro IT.
                </p>
                <p>
                  {" "}
                  Desarroll?? proyectos para mi ??ltimo trabajo (puesto de
                  administraci??n) como un CRM que desarroll?? para mejorar la
                  eficacia de mis tareas diarias, e hice su E-Commerce el cual
                  actualmente est?? en uso, as?? como proyectos personales con
                  foco en la soluci??n de problemas puntuales (estos se
                  encuentran en la secci??n "Mis Proyectos").
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
                  {" "}
                  I like to use{" "}
                  <span className={`${styles.tsColor}`}>Typescript</span>,{" "}
                  <span className={`${styles.twColor}`}>Tailwind</span>,{" "}
                  <span className={`${styles.sassColor}`}>SASS</span>,{" "}
                  <span className={`${styles.graphQLColor}`}>GraphQL</span> and{" "}
                  <span>React-Testing-Library</span> +{" "}
                  <span className={`${styles.jestColor}`}>Jest</span> for
                  testing.
                </p>
                <p>
                  For client side, i
                  use{" "}
                  <span className={`${styles.nodeColor}`}>
                    <FontAwesomeIcon icon={faNodeJs} />
                    NodeJS
                  </span>
                  , <span>SQL</span> +{" "}
                  <span className={`${styles.pgColor}`}>Postgres</span>,{" "}
                  <span className={`${styles.jwtColor}`}>JWT</span>,{" "}
                  <span className={`${styles.typeORMColor}`}>TypeORM</span> and
                  main concepts of server side development too.
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
                  {" "}
                  Me gusta usar{" "}
                  <span className={`${styles.tsColor}`}>Typescript</span>,{" "}
                  <span className={`${styles.twColor}`}>Tailwind</span>,{" "}
                  <span className={`${styles.sassColor}`}>SASS</span>,{" "}
                  <span className={`${styles.graphQLColor}`}>GraphQL</span> y{" "}
                  <span>React-Testing-Library</span> +{" "}
                  <span className={`${styles.jestColor}`}>Jest</span> para unit
                  testing.
                </p>
                <p>
                  En cuanto a backend, utilizo tecnolog??as
                  como{" "}
                  <span className={`${styles.nodeColor}`}>
                    <FontAwesomeIcon icon={faNodeJs} />
                    NodeJS
                  </span>
                  , <span>SQL</span> +{" "}
                  <span className={`${styles.pgColor}`}>Postgres</span>,{" "}
                  <span className={`${styles.jwtColor}`}>JWT</span>,{" y "}
                  <span className={`${styles.typeORMColor}`}>TypeORM</span>.
                </p>
                <p>
                  El{" "}
                  <span className={`${styles.englandColor}`}>
                    <FontAwesomeIcon icon={faGlobe} />
                    Ingles
                  </span>{" "}
                  es otra de mis pasiones, lo uso constantemente para mejorar
                  mis habilidades. Puedo hablar con fluidez, escribir, escuchar
                  y leerlo con facilidad.
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
