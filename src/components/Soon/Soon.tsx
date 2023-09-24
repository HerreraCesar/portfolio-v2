import styles from "./Soon.module.scss";
import { A } from "solid-start";
import { t } from "~/helpers/translate";

export default function Soon() {
  return (
    <section class={styles.section}>
      <div class={styles.card}>
        <h1 class={styles.title}>{t("coming_soon")}</h1>
        <A class={styles.link} href="/contact">
          {t("contact_link")}
        </A>
      </div>
    </section>
  );
}
