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
                  Im a Full-Stack Developer based in Buenos Aires, Argentina,
                  with +3 years of experience. I focus principally in good
                  practices and strong communication.
                </p>
                <p>
                  {" "}
                  I created several end-to-end projects for the company I work
                  for, such as{" "}
                  <a
                    target="_blank"
                    href="https://edendesk-crm-frontend.vercel.app/"
                  >
                    this CRM
                  </a>{" "}
                  in order to improve daily tasks efficiency, and i made{" "}
                  <a target="_blank" href="https://proviamoalmacengourmet.com">
                    this E-commerce
                  </a>{" "}
                  , which is currently working and generating sales constantly,
                  among others.
                </p>
              </>
            ) : (
              <>
                <p>
                  {" "}
                  Soy un Desarrollador Full-Stack de Buenos Aires, Argentina,
                  con más de 3 años de experiencia. Mi enfoque principal son las
                  buenas prácticas y la comunicación efectiva.
                </p>
                <p>
                  {" "}
                  Desarrollé proyectos de principio a fin para la empresa en la
                  que trabajo, como{" "}
                  <a
                    target="_blank"
                    href="https://edendesk-crm-frontend.vercel.app"
                  >
                    este CRM
                  </a>{" "}
                  , utilizado para mejorar la eficiencia de las tareas diarias,
                  o{" "}
                  <a target="_blank" href="https://proviamoalmacengourmet.com">
                    este E-commerce
                  </a>
                  , el cual está funcionando actualmente y generando ventas
                  constantemente.
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
                  </span> +{" "}
                  <span className={`${styles.nodeColor}`}>Express</span>,{" "}
                  <span className={`${styles.englandColor}`}>Java</span> +{" "}
                  <span className={`${styles.nodeColor}`}>SpringBoot</span>,{" "}
                  <span>SQL</span> +{" "}
                  <span className={`${styles.pgColor}`}>Postgres</span>,{" "}
                  <span>No-SQL</span> +{" "}
                  <span className={`${styles.nodeColor}`}>MongoDB</span>,{" "}
                  <span className={`${styles.typeORMColor}`}>TypeORM</span>,{" "}
                  <span className={`${styles.graphQLColor}`}>GraphQL</span>,{" "}
                  <span className={`${styles.jwtColor}`}>JWT</span> and{" "}
                  <span className={`${styles.jestColor}`}>Jest</span> for unit
                  testings.
                </p>
                <p>
                  {" "}
                  <span className={`${styles.tsColor}`}>Docker</span>,{" "}
                  <span className={`${styles.nodeColor}`}>Kubernetes</span> and{" "}
                  <span className={`${styles.jestColor}`}>Github-actions </span>
                  for CI/CD and deployment.
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
                  <span className={`${styles.englandColor}`}>Java</span>,{" "}
                  <span className={`${styles.nodeColor}`}>SpringBoot</span>{" "}
                  <span>SQL</span> +{" "}
                  <span className={`${styles.pgColor}`}>Postgres</span>,{" "}
                  <span>No-SQL</span> +{" "}
                  <span className={`${styles.nodeColor}`}>MongoDB</span>,{" "}
                  <span className={`${styles.typeORMColor}`}>TypeORM</span>,{" "}
                  <span className={`${styles.graphQLColor}`}>GraphQL</span>,{" "}
                  <span className={`${styles.jwtColor}`}>JWT</span> and{" "}
                  <span className={`${styles.jestColor}`}>Jest</span> para unit
                  testings.
                </p>
                <p>
                  {" "}
                  <span className={`${styles.tsColor}`}>Docker</span>,{" "}
                  <span className={`${styles.nodeColor}`}>Kubernetes</span> and{" "}
                  <span className={`${styles.jestColor}`}>Github-actions </span>
                  para CI/CD y deployment.
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
                  Hago foco en patrones de diseño y arquitectura, así como en
                  buenas practicas de seguridad.
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
