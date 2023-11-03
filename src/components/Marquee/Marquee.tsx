import { For, JSXElement } from "solid-js";

import styles from "./Marquee.module.scss";
import { Motion } from "@motionone/solid";

interface SliderProps {
  quantity: number;
  children: JSXElement;
  duration?: number;
  direction?: "normal" | "reverse";
}

export default function Marquee(props: SliderProps) {
  return (
    <Motion.div
      class={styles.container}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      <div>
        <div
          style={{
            "animation-duration": `${props.duration ?? props.quantity * 3}s`,
            "animation-direction": `${props.direction ?? "normal"}`,
          }}
        >
          <For each={Array(props.quantity * 3)}>{() => props.children}</For>
        </div>
      </div>
    </Motion.div>
  );
}
