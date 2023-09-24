import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div class={styles.background}>
      <div class={styles.container} />
      <div class={styles.loader} />
    </div>
  );
}
