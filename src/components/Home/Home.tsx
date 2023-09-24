import Marquee from "../Marquee/Marquee";
import { navigate } from "~/helpers/navigate";
import { Accessor, For, onMount } from "solid-js";
import styles from "./Home.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";
import { Language } from "~/interfaces";
import { translations } from "~/constants";

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
    profile.style.left = event.offsetX + "px";
  }
};

export default function Home(props: Props) {
  const store = useApplicationContext();
  const [language]: [Accessor<Language>] = store.language;

  return (
    <section class={styles.section} id={props.id}>
      <div class={styles.card}>
        <h1 class={styles.title}>{t("home_title")}</h1>
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
        <h3 class={styles.subtitle}>{t("home_subtitle")}</h3>
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
          <button class={styles.button}>
            <p>{t("home_button")}</p>
          </button>
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
