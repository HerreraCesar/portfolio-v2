import { FaSolidCircleArrowUp } from 'solid-icons/fa';
import styles from './ToTop.module.scss';

export default function ToTop() {
  return (
    <div class={styles.container}>
      <button class={styles.button} onClick={() => window.scrollTo(0, 0)}>
        <FaSolidCircleArrowUp fill={'var(--colors-neutral-600)'} />
      </button>
    </div>
  );
}
