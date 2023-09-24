// @ts-nocheck

import { A } from "solid-start";
import { VsGithub } from "solid-icons/vs";
import { For, createSignal } from "solid-js";
import { register } from "swiper/element/bundle";
import styles from "./Slider.module.scss";
import { t } from "~/helpers/translate";
import { BsGlobe } from "solid-icons/bs";
import { technologies } from "~/constants";
import { FaSolidCircleInfo } from "solid-icons/fa";

register();

interface Props {
  slides: any;
}

export default (props: Props) => {
  const [touched, setTouched] = createSignal(false);
  const [slideIndex, setSlideIndex] = createSignal();

  return (
    <swiper-container
      loop={true}
      // pagination="true"
      // pagination-clickable="true"
      slides-per-view="auto"
      centered-slides="true"
      class={styles.slider}
      space-between="60"
      onSlideChange={() => {
        setTouched(false);
      }}

      // autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
    >
      <For each={props.slides}>
        {(slide, index) => (
          <swiper-slide
            class={styles.slide}
            classList={{
              [styles.touched]: touched() && index() == slideIndex(),
            }}
          >
            <div class={styles.back}>
              <p>{t(slide.description)}</p>
              <div>
                <For each={slide.stack}>
                  {(tech) => {
                    const technology = technologies.find((t) => t.id === tech);
                    return (
                      <A href={technology.url} target="_blank">
                        <img src={technology.icon} width={20} height={20} />
                        <span>{technology.name}</span>
                      </A>
                    );
                  }}
                </For>
              </div>
            </div>
            <div class={styles.background}>
              <div
                style={{
                  background: `url(${slide.background})`,
                }}
              />
            </div>
            <div class={styles.data}>
              <h3>{slide.title}</h3>
              <A href={slide.url} target="_blank">
                <button class={styles.button}>
                  <BsGlobe class={styles.sign} />
                  <div class={styles.text}>{t("projects_demo")}</div>
                </button>
              </A>
              <A href={slide.repository} target="_blank">
                <button class={styles.button}>
                  <VsGithub class={styles.sign} />
                  <div class={styles.text}>{t("projects_code")}</div>
                </button>
              </A>
              <button
                class={styles.button}
                onClick={() => {
                  setTouched(!touched());
                  setSlideIndex(index());
                }}
                classList={{
                  [styles.active]: touched() && slideIndex() == index(),
                }}
              >
                <FaSolidCircleInfo class={styles.sign} />
                <div class={styles.text}>{t("projects_info")}</div>
              </button>
            </div>
          </swiper-slide>
        )}
      </For>
    </swiper-container>
  );
};
