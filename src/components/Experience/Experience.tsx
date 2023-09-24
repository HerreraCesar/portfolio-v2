import { experiences } from "~/constants";
import Slider from "../Slider/Slider";
import styles from "./Experience.module.scss";
import { t } from "~/helpers/translate";

interface Props {
  id: string;
}

export default function Experience(props: Props) {
  return (
    <section class={styles.section} id={props.id}>
      <div class={styles.card}>
        <h2 class={styles.title}>{t("experiences_title")}</h2>
        <Slider slides={experiences} />
      </div>
    </section>
  );
}
