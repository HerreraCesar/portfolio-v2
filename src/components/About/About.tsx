import styles from "./About.module.scss";
import { t } from "~/helpers/translate";
import { images } from "~/assets/images";
import Marquee from "../Marquee/Marquee";
import { Accessor, For, Show } from "solid-js";
import { stats, technologies } from "~/constants";
import { A } from "solid-start";
import english_cv from "~/assets/pdfs/CV_Herrera_Cesar_English.pdf";
import spanish_cv from "~/assets/pdfs/CV_Herrera_Cesar_Español.pdf";
import { useApplicationContext } from "~/context/context";
import { Language } from "~/interfaces";
import { FiExternalLink } from "solid-icons/fi";
import { Motion, Presence } from "@motionone/solid";

interface Props {
  id: string;
}

export default function About(props: Props) {
  const store = useApplicationContext();
  const [language]: [Accessor<Language>] = store.language;
  const [currentSection] = store.currentSection;

  return (
    <section class={"section"} id={props.id}>
      <Presence>
        <Show when={currentSection() === props.id}>
          <Motion.div
            class={styles.card}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
                    aria-label="Open the CV in pdf file"
                  >
                    <FiExternalLink />
                    {t("about_resume")}
                  </A>
                </div>
                <div class={styles.image}>
                  <img src={images.newProfile} alt="Profile" />
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
          </Motion.div>
        </Show>
      </Presence>
    </section>
  );
}
