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
                image="https://i.ibb.co/CVVgy4P/edendeskwallpaper.webp"
                url="https://edendesk-crm.vercel.app/"
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
                image="https://i.ibb.co/g6j0pBc/proviamowallpaper.webp"
                url="https://proviamoalmacengourmet.com"
              >
                E-Commerce for a gourmet products company based in Argentina.
                It's currently online and generating sales constantly with the
                MercadoPago's payment gateway.
              </ProjectItem>
              <ProjectItem
                theme={theme}
                project="marketlist"
                title="Marketlist against Inflation"
                subtitle="Personal Project"
                image="https://i.ibb.co/N9m6v1Q/comming-soon.webp"
                url="proviamoalmacengourmet.com"
              >
                In order to take a control of price increase due to high
                inflation in Argentina, i created this marketlist that converts
                products prices and total from your currency to dollars to
                compare them in your next visit to the market.
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
                image="https://i.ibb.co/CVVgy4P/edendeskwallpaper.webp"
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
                image="https://i.ibb.co/g6j0pBc/proviamowallpaper.webp"
                url="https://proviamoalmacengourmet.com"
              >
                E-Commerce para una cadena de productos gourmet de Argentina.
                Actualmente se encuentra en línea y genera ventas constantemente
                mediante la pasarela de pago de Mercado Pago.
              </ProjectItem>
              <ProjectItem
                theme={theme}
                project="marketlist"
                title="Marketlist against Inflation"
                subtitle="Proyecto Personal"
                image="https://i.ibb.co/N9m6v1Q/comming-soon.webp"
                url="proviamoalmacengourmet.com"
              >
                Debido a la alta inflación en Argentina, cree esta aplicación
                que funciona como "lista de compras" pero con la particularidad
                de que la misma guarda el precio total de la compra y lo
                convierte en dolares para un mayor control en el tiempo.
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
