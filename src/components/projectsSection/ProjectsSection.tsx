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
                image="https://storage.cloudconvert.com/tasks/261fe12c-f4a0-45b0-b2c8-f13dfb2f2452/edendeskwallpaper.webp?AWSAccessKeyId=cloudconvert-production&Expires=1655718844&Signature=UJsAoR%2BrfmT5OXOuiegJmtI0sVU%3D&response-content-disposition=inline%3B%20filename%3D%22edendeskwallpaper.webp%22&response-content-type=image%2Fwebp"
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
                image="https://storage.cloudconvert.com/tasks/907454fc-a755-4da8-b96a-4657e24aaa63/proviamowallpaper.webp?AWSAccessKeyId=cloudconvert-production&Expires=1655718845&Signature=6nht21FAWYMkG%2BEyoK7zEUe1xj8%3D&response-content-disposition=inline%3B%20filename%3D%22proviamowallpaper.webp%22&response-content-type=image%2Fwebp"
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
                image="https://storage.cloudconvert.com/tasks/7991a119-b994-4212-8277-e80e3e272111/comming-soon.webp?AWSAccessKeyId=cloudconvert-production&Expires=1655724066&Signature=lY6ZZVooXOHqem%2F2HJ8T%2FwWdg4U%3D&response-content-disposition=inline%3B%20filename%3D%22comming-soon.webp%22&response-content-type=image%2Fwebp"
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
                image="https://storage.cloudconvert.com/tasks/261fe12c-f4a0-45b0-b2c8-f13dfb2f2452/edendeskwallpaper.webp?AWSAccessKeyId=cloudconvert-production&Expires=1655718844&Signature=UJsAoR%2BrfmT5OXOuiegJmtI0sVU%3D&response-content-disposition=inline%3B%20filename%3D%22edendeskwallpaper.webp%22&response-content-type=image%2Fwebp"
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
                image="https://storage.cloudconvert.com/tasks/907454fc-a755-4da8-b96a-4657e24aaa63/proviamowallpaper.webp?AWSAccessKeyId=cloudconvert-production&Expires=1655718845&Signature=6nht21FAWYMkG%2BEyoK7zEUe1xj8%3D&response-content-disposition=inline%3B%20filename%3D%22proviamowallpaper.webp%22&response-content-type=image%2Fwebp"
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
                image="https://storage.cloudconvert.com/tasks/7991a119-b994-4212-8277-e80e3e272111/comming-soon.webp?AWSAccessKeyId=cloudconvert-production&Expires=1655724066&Signature=lY6ZZVooXOHqem%2F2HJ8T%2FwWdg4U%3D&response-content-disposition=inline%3B%20filename%3D%22comming-soon.webp%22&response-content-type=image%2Fwebp"
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
