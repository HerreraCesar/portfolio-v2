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
import { Motion } from "@motionone/solid";

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
      slides-per-view="auto"
      centered-slides="true"
      class={styles.slider}
      onSlideChange={() => {
        setTouched(false);
      }}
      autoplay={
        window.innerWidth > 600
          ? { delay: 2400, pauseOnMouseEnter: true }
          : false
      }
    >
      <For each={props.slides}>
        {(slide, index) => (
          <swiper-slide
            class={styles.slide}
            classList={{
              [styles.touched]: touched() && index() == slideIndex(),
            }}
          >
            <Motion
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: index() !== 0 && 0.6 },
              }}
            >
              <div class={styles.back}>
                <p innerHTML={t(slide.description)} />
                <div>
                  <div>
                    <For each={slide.stack}>
                      {(tech) => {
                        const technology = technologies.find(
                          (t) => t.id === tech
                        );
                        return (
                          <A
                            href={technology.url}
                            target="_blank"
                            aria-aria-labelledby={technology.name}
                          >
                            <img
                              src={technology.icon}
                              width={20}
                              height={20}
                              alt={technology.id + " logo"}
                            />
                            <span>{technology.name}</span>
                          </A>
                        );
                      }}
                    </For>
                  </div>
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
                <div class={styles.buttons_container}>
                  <Motion
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: { delay: 0.3 },
                    }}
                  >
                    <A
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        transition: { delay: 0.3 },
                      }}
                      href={slide.url}
                      target="_blank"
                      onClick={(e) => {
                        if (!slide.url) {
                          e.preventDefault();
                        }
                      }}
                      class={styles.button}
                      classList={{
                        [styles.disabled]: !slide.url,
                      }}
                      aria-label="Go to project deployment"
                    >
                      <BsGlobe class={styles.sign} />
                      <div class={styles.text}>{t("projects_demo")}</div>
                    </A>
                  </Motion>
                  <Motion
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: { delay: 0.6 },
                    }}
                  >
                    <A
                      href={slide.repository}
                      target={"_blank"}
                      onClick={(e) => {
                        if (!slide.repository) {
                          e.preventDefault();
                        }
                      }}
                      class={styles.button}
                      classList={{
                        [styles.disabled]: !slide.repository,
                      }}
                      aria-label="Go to the project repository"
                    >
                      <VsGithub class={styles.sign} />
                      <div class={styles.text}>{t("projects_code")}</div>
                    </A>
                  </Motion>
                  <Motion
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: { delay: 0.9 },
                    }}
                  >
                    <button
                      class={styles.button}
                      onClick={() => {
                        setTouched(!touched());
                        setSlideIndex(index());
                      }}
                      classList={{
                        [styles.active]: touched() && slideIndex() == index(),
                      }}
                      aria-label={t("projects_info")}
                    >
                      <FaSolidCircleInfo class={styles.sign} />
                      <div class={styles.text}>{t("projects_info")}</div>
                    </button>
                  </Motion>
                </div>
              </div>
            </Motion>
          </swiper-slide>
        )}
      </For>
    </swiper-container>
  );
};
