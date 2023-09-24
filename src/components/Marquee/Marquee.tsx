import { For, JSXElement } from 'solid-js';

import styles from './Marquee.module.scss';

interface SliderProps {
  quantity: number;
  children: JSXElement;
  duration?: number;
  direction?: 'normal' | 'reverse';
}

export default function Marquee(props: SliderProps) {
  return (
    <div class={styles.container}>
      <div>
        <div
          style={{
            'animation-duration': `${props.duration ?? props.quantity * 3}s`,
            'animation-direction': `${props.direction ?? 'normal'}`,
          }}
        >
          <For each={Array(props.quantity * 3)}>{() => props.children}</For>
        </div>
      </div>
    </div>
  );
}
