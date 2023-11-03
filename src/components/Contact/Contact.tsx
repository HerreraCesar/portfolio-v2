import Footer from "../Footer/Footer";
import { IoCopy } from "solid-icons/io";
import { personal_data } from "~/config";
import styles from "./Contact.module.scss";
import { t } from "~/helpers/translate";
import toast from "solid-toast";
import { A } from "solid-start";
import { links } from "~/config";
import { BsGithub, BsLinkedin } from "solid-icons/bs";
import { useApplicationContext } from "~/context/context";
import { Motion, Presence } from "@motionone/solid";
import { Show } from "solid-js";

interface Props {
  id: string;
}

export default function Contact(props: Props) {
  const store = useApplicationContext();
  const [currentSection] = store.currentSection;

  return (
    <section
      class={"section"}
      id={props.id}
      style={{ "background-color": "var(--colors-neutral-200)" }}
    >
      <Presence>
        <Show when={currentSection() === props.id}>
          <Motion.div
            class={styles.card}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
            exit={{ y: -50, opacity: 0 }}
          >
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
              <Motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { delay: 0.3 } }}
                href={links.github}
                target="_blank"
                aria-label="Go to GitHub profile"
              >
                <BsGithub />
              </Motion.a>
              <Motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { delay: 0.6 } }}
                href={links.linkedin}
                target="_blank"
                aria-label="Go to LinkedIn profile"
              >
                <BsLinkedin />
              </Motion.a>
            </div>
          </Motion.div>
        </Show>
      </Presence>
      <Presence>
        <Show when={currentSection() === props.id}>
          <Motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <Footer />
          </Motion.div>
        </Show>
      </Presence>
    </section>
  );
}
