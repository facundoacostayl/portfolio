//HOOKS
import { useState } from "react";

import styles from "./ProjectsSection.module.scss";
import { DownArrow } from "../downarrow";

//COMPONENTS
import { Navbar } from "../navbar";
import { ProjectItem } from "./projectItem";

//TYPES
import { Theme } from "../../themeContext/types";
import { Language } from "../../languageContext/types";

type Props = {
  theme: Theme;
  language: Language;
};

export const ProjectsSection = ({ theme, language }: Props) => {
  const [isMoreOpened, setIsMoreOpened] = useState(false);

  return (
    <section
      className={`${theme === "dark" ? styles.dark : styles.light}`}
      id="projects"
    >
      {language === "english" ? (
        <div
          className={`${styles.container} ${
            isMoreOpened ? styles.heightMore : styles.heightLess
          }`}
        >
          <div className={`${styles.content}`}>
            <h1>My Projects</h1>
            <div className={`${styles.projectsContainer}`}>
              <ProjectItem
                theme={theme}
                project="edendesk"
                title="EdenDesk CRM"
                subtitle="Real Project"
                image="https://i.ibb.co/4SG1g9q/edendeskwallpaper.webp"
                url="https://edendesk-crm-frontend.vercel.app/"
              >
                CRM for a regional products company. It was created in order to
                improve efficiency of client managment and get information about
                incomes and outcomes of the company.
              </ProjectItem>
              <ProjectItem
                theme={theme}
                project="proviamo"
                title="Proviamo's E-Commerce"
                subtitle="Real Project"
                image="https://i.ibb.co/VJKxp2B/proviamowallpaper.webp"
                url="https://proviamoalmacengourmet.com"
              >
                E-Commerce for a gourmet products company based in Argentina.
                It's currently online and generating sales constantly with the
                MercadoPago's payment gateway.
              </ProjectItem>
              <ProjectItem
                theme={theme}
                project="multipar"
                title="Multipar"
                subtitle="Real Project"
                image="https://i.ibb.co/Y2pPGP8/multiparwallpaper.webp"
                url="https://multipar.com.ar"
              >
                I developed the Frontend of a Argentinian Maritime Company’s
                landing page. My team was formed by a Product Owner, a designer
                and me.
              </ProjectItem>
              {/*isMoreOpened && (
            <ProjectItem
              theme={theme}
              project="caloriesCalculator"
              title="Harris Benedict Calculator"
              subtitle="Personal Project"
              image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png"
            >
              Harris Benedict Calculator takes information about your height,
              weigth, age, etc and shows your metabolism requirements to loss,
              gain or mantein your weight.
            </ProjectItem>
          )*/}
            </div>
            {/*<button
          onClick={() => setIsMoreOpened(!isMoreOpened)}
          className={styles.more}
        >
          {isMoreOpened ? "Hide content" : "See more"}
        </button>*/}

            <DownArrow section="project" sectionId="about" />
          </div>
        </div>
      ) : (
        <div
          className={`${styles.container} ${
            isMoreOpened ? styles.heightMore : styles.heightLess
          }`}
        >
          <div className={`${styles.content}`}>
            <h1>Mis Proyectos</h1>
            <div className={`${styles.projectsContainer}`}>
              <ProjectItem
                theme={theme}
                project="edendesk"
                title="EdenDesk CRM"
                subtitle="Proyecto Real"
                image="https://i.ibb.co/4SG1g9q/edendeskwallpaper.webp"
                url="https://edendesk-crm.vercel.app/"
              >
                CRM para una cadena de comercios de productos regionales. Creada
                para mejorar la administración de sus clientes y obtener
                información mediante gráficas sobre sus ingresos y consumos.
              </ProjectItem>
              <ProjectItem
                theme={theme}
                project="proviamo"
                title="Proviamo's E-Commerce"
                subtitle="Proyecto Real"
                image="https://i.ibb.co/VJKxp2B/proviamowallpaper.webp"
                url="https://proviamoalmacengourmet.com"
              >
                E-Commerce para una cadena de productos gourmet de Argentina.
                Actualmente se encuentra en línea y genera ventas constantemente
                mediante la pasarela de pago de Mercado Pago.
              </ProjectItem>
              <ProjectItem
                theme={theme}
                project="multipar"
                title="Multipar"
                subtitle="Proyecto Real"
                image="https://i.ibb.co/Y2pPGP8/multiparwallpaper.webp"
                url="https://multipar.com.ar"
              >
                Desarrollé el frontend de la landing page de una compañía
                maritima de Buenos Aires, Argentina. Desarrollo junto a
                Diseñador y Product Owner.
              </ProjectItem>
              {/*isMoreOpened && (
            <ProjectItem
              theme={theme}
              project="caloriesCalculator"
              title="Harris Benedict Calculator"
              subtitle="Personal Project"
              image="https://www.sitesaga.com/wp-content/uploads/2020/04/what-is-website-how-it-works.png"
            >
              Harris Benedict Calculator toma la información proporcionada sobre tu
              altura, peso, edad, etc y muestra tus requerimientos metabolicos para
              perder, ganar o mantener tu peso.
            </ProjectItem>
          )*/}
            </div>
            {/*<button
          onClick={() => setIsMoreOpened(!isMoreOpened)}
          className={styles.more}
        >
          {isMoreOpened ? "Hide content" : "See more"}
        </button>*/}

            <DownArrow section="project" sectionId="about" />
          </div>
        </div>
      )}
    </section>
  );
};
