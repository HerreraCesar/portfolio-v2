import Footer from "../Footer/Footer";
import { IoCopy } from "solid-icons/io";
import { personal_data } from "~/config";
import styles from "./Contact.module.scss";
import { t } from "~/helpers/translate";
import toast from "solid-toast";
import { A } from "solid-start";
import { links } from "~/config";
import { BsBriefcaseFill, BsGithub, BsLinkedin } from "solid-icons/bs";

interface Props {
  id: string;
}

export default function Contact(props: Props) {
  return (
    <section
      class={"section"}
      id={props.id}
      style={{ "background-color": "var(--colors-neutral-200)" }}
    >
      <div class={styles.card}>
        <h2
          class={"title"}
          style={{ "margin-top": "var(--measures-footer-height)" }}
        >
          <strong>{t("contact_us")}</strong>
        </h2>
        <div
          class={styles.email}
          onClick={() => {
            navigator.clipboard.writeText(personal_data.email);
            toast.success(() => t("copied_mail"));
          }}
        >
          <h2>{personal_data.email}</h2>
          <div class={styles.copy}>
            <IoCopy />
          </div>
        </div>
        <div class={styles.icons}>
          <A href={links.github} target="_blank">
            <BsGithub />
          </A>
          <A href={links.linkedin} target="_blank">
            <BsLinkedin />
          </A>
        </div>
      </div>
      <Footer />
    </section>
  );
}
