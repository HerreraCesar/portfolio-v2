import { experiences } from "~/constants";
import Slider from "../Slider/Slider";
import styles from "./Experience.module.scss";
import { t } from "~/helpers/translate";
import { Motion, Presence } from "@motionone/solid";
import { Show } from "solid-js";
import { useApplicationContext } from "~/context/context";

interface Props {
  id: string;
}

export default function Experience(props: Props) {
  const store = useApplicationContext();
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
            <h2 class={"title"}>{t("experiences_title")}</h2>
            <Slider slides={experiences} />
          </Motion.div>
        </Show>
      </Presence>
    </section>
  );
}
