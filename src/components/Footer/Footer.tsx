import { A } from "solid-start";
import { links } from "~/config";
import styles from "./Footer.module.scss";
import { t } from "~/helpers/translate";

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <span class={styles.author}>
        {t("author")}
        <A href={links.portfolio} target="_blank">
          Herrera César
        </A>
      </span>
    </footer>
  );
}
