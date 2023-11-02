import styles from "./About.module.scss";
import { t } from "~/helpers/translate";
import { images } from "~/assets/images";
import Marquee from "../Marquee/Marquee";
import { Accessor, For } from "solid-js";
import { stats, technologies } from "~/constants";
import { A } from "solid-start";
import english_cv from "~/assets/pdfs/CV_Herrera_Cesar_English.pdf";
import spanish_cv from "~/assets/pdfs/CV_Herrera_Cesar_Español.pdf";
import { useApplicationContext } from "~/context/context";
import { Language } from "~/interfaces";
import { FiExternalLink } from "solid-icons/fi";

interface Props {
  id: string;
}

export default function About(props: Props) {
  const store = useApplicationContext();
  const [language]: [Accessor<Language>] = store.language;

  return (
    <section class={"section"} id={props.id}>
      <div class={styles.card}>
        <h2 class={"title"}>{t("about_title")}</h2>
        <div class={styles.container}>
          <div class={styles.subcontainer}>
            <div class={styles.actions}>
              <For each={stats}>
                {(stat) => (
                  <div>
                    <img
                      src={stat.icon}
                      width={25}
                      height={25}
                      alt={t(stat.id) + " icon"}
                    />
                    <span>{t(stat.name)}</span>
                  </div>
                )}
              </For>
              <A
                href={language() === "es" ? spanish_cv : english_cv}
                target="_blank"
                class={styles.button}
                aria-label="Open the cv in pdf file"
              >
                <FiExternalLink />
                {t("about_resume")}
              </A>
            </div>
            <div class={styles.image}>
              <img src={images.profile} alt="Profile" />
            </div>
          </div>
          <div class={styles.data}>
            <h3>{t("about_name")}</h3>
            <p innerHTML={t("about_description")} />
          </div>
        </div>
        <Marquee quantity={1} duration={68}>
          <For each={technologies}>
            {(technology) => (
              <div class={styles.marquee_item}>
                <img src={technology.icon} alt={technology.id + " logo"} />
                <span>{technology.name}</span>
              </div>
            )}
          </For>
        </Marquee>
      </div>
    </section>
  );
}
