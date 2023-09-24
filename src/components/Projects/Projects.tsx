import { projects } from "~/constants";
import Slider from "../Slider/Slider";
import styles from "./Projects.module.scss";
import { t } from "~/helpers/translate";

interface Props {
  id: string;
}

export default function Projects(props: Props) {
  return (
    <section class={styles.section} id={props.id}>
      <div class={styles.card}>
        <h2 class={styles.title}>{t("projects_title")}</h2>
        <Slider slides={projects} />
      </div>
    </section>
  );
}
