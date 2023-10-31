import styles from "./About.module.scss";
import { t } from "~/helpers/translate";
import { images } from "~/assets/images";
import Marquee from "../Marquee/Marquee";
import { For, Show } from "solid-js";
import { technologies } from "~/constants";

interface Props {
  id: string;
}

export default function About(props: Props) {
  return (
    <section class={styles.section} id={props.id}>
      <div class={styles.card}>
        <h2 class={styles.title}>{t("about_title")}</h2>
        <div class={styles.image}>
          <img src={images.aboutme} />
        </div>
        <Marquee quantity={1} duration={72}>
          <For each={technologies}>
            {(technology) => (
              <div class={styles.marquee_item}>
                <img src={technology.icon} />
                <span>{technology.name}</span>
              </div>
            )}
          </For>
        </Marquee>
      </div>
    </section>
  );
}
