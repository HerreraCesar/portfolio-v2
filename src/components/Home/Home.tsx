import Marquee from "../Marquee/Marquee";
import { navigate } from "~/helpers/navigate";
import { Accessor, For, onMount } from "solid-js";
import styles from "./Home.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";
import { Language } from "~/interfaces";
import { translations } from "~/constants";
import { A } from "solid-start";
import { links } from "~/config";
import { BsBriefcaseFill, BsGithub, BsLinkedin } from "solid-icons/bs";

interface Props {
  id: string;
}

let profile: HTMLElement | null;

onMount(() => {
  profile = document.getElementById("profile");
});

const follow = (event: MouseEvent) => {
  if (profile) {
    profile.style.top = event.clientY + "px";
    profile.style.left = event.clientX + "px";
  }
};

export default function Home(props: Props) {
  const store = useApplicationContext();
  const [language]: [Accessor<Language>] = store.language;

  return (
    <section class={"section"} id={props.id}>
      <div class={styles.card}>
        <h1 class={styles.title}>
          {t("home_title")}
          <div class={styles.circle} onClick={() => navigate("contact")}>
            <svg viewBox="0 0 100 100">
              <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
              <text class={styles.rotate_text}>
                <textPath href="#circle" style={{ "margin-right": "10px" }}>
                  <tspan>{t("home_button_slogan")}</tspan>
                  <For each={Array(5)}>
                    {() => (
                      <tspan dx={language() == "en" ? "7" : "9"}>
                        {t("home_button_slogan")}
                      </tspan>
                    )}
                  </For>
                </textPath>
              </text>
            </svg>
            <button class={styles.button} aria-label={t("home_button")}>
              <p>{t("home_button")}</p>
            </button>
          </div>
        </h1>
        <div class={styles.picture} id="profile" />
        <h2
          class={styles.name}
          onMouseOver={() => {
            if (profile) {
              profile.style.display = "block";
            }
          }}
          onMouseOut={() => {
            if (profile) {
              profile.style.display = "none";
            }
          }}
          onMouseMove={follow}
        >
          {t("home_name")}
        </h2>
        <div class={styles.subtitle_container}>
          <h3 class={styles.subtitle}>{t("home_subtitle")}</h3>
          <div class={styles.icons}>
            <A
              href={links.github}
              target="_blank"
              aria-label="Go to GitHub profile"
            >
              <BsGithub />
            </A>
            <A
              href={links.linkedin}
              target="_blank"
              aria-label="Go to LinkedIn profile"
            >
              <BsLinkedin />
            </A>
          </div>
        </div>

        <Marquee quantity={3} duration={36}>
          <For each={translations}>
            {(translation) => <span>{translation}</span>}
          </For>
        </Marquee>
      </div>
    </section>
  );
}
