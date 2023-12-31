import { For, createEffect, createSignal, onMount } from "solid-js";

import Hamburger from "../Hamburger/Hamburger";
import { IoSettingsSharp } from "solid-icons/io";
import { Link } from "../Link/Link";
import { Menu } from "../Menu/Menu";
import { createIntersectionObserver } from "@solid-primitives/intersection-observer";
import styles from "./Navbar.module.scss";
import { t } from "~/helpers/translate";
import { navigate } from "~/helpers/navigate";
import { useApplicationContext } from "~/context/context";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = createSignal<boolean>(false);
  const store = useApplicationContext();
  const [_, { changeCurrentSection }] = store.currentSection;

  createEffect(() => {
    const body = document.getElementById("body");
    if (body) {
      if (menuOpen()) {
        body.style.overflowY = "hidden";
      } else {
        body.style.overflowY = "scroll";
      }
    }
  });

  const sections = ["home", "experience", "about", "projects", "contact"];
  const [elements, setElements] = createSignal<Element[]>([]);

  onMount(() => {
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        setElements((prev: Element[]) => [...prev, element]);
      }
    });

    window.scrollTo(0, 0);
  });

  const observer = createIntersectionObserver(
    elements,
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          changeCurrentSection(e.target.id);
        }
      });
    },
    { threshold: 0.6 }
  );

  return (
    <>
      <header class={styles.header}>
        <span class={styles.logo} onClick={() => navigate("home")}>
          {t("home_title")}
        </span>
        <nav
          class={styles.navbar}
          classList={{
            [styles.open_navbar]: menuOpen(),
          }}
        >
          <ul>
            <For each={sections}>
              {(section) => (
                <Link section={section} setMenuOpen={setMenuOpen} />
              )}
            </For>
          </ul>
        </nav>
        <div
          class={styles.button}
          classList={{
            [styles.touched_button]: menuOpen(),
          }}
          onClick={() => setMenuOpen(!menuOpen())}
        >
          <Hamburger menuOpen={menuOpen} />
          <IoSettingsSharp size={24} />
        </div>
        <Menu menuOpen={menuOpen} />
      </header>
      <div
        class={styles.overlay}
        classList={{ [styles.closed_overlay]: !menuOpen() }}
        onClick={() => setMenuOpen(!menuOpen())}
      />
    </>
  );
}
