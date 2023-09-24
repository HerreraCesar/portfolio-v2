import styles from "./About.module.scss";
import { t } from "~/helpers/translate";

interface Props {
  id: string;
}

export default function About(props: Props) {
  return (
    <section class={styles.section} id={props.id}>
      <div class={styles.card}>
        <h2>About</h2>
      </div>
    </section>
  );
}
