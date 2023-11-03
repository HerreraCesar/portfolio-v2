import { projects } from "~/constants";
import Slider from "../Slider/Slider";
import styles from "./Projects.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";
import { Motion, Presence } from "@motionone/solid";
import { Show } from "solid-js";

interface Props {
  id: string;
}

export default function Projects(props: Props) {
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
            <h2 class={"title"}>{t("projects_title")}</h2>
            <Slider slides={projects} />
          </Motion.div>
        </Show>
      </Presence>
    </section>
  );
}
