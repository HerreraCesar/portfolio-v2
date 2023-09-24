import noise from '../../../public/noise.webp';
import styles from './Card.module.scss';

interface CardProps {
  delay?: number;
}

export default function Card({ delay = 0 }: CardProps) {
  return (
    <div class={styles.card}>
      <img
        src="/noise.webp"
        alt="White noise"
        class={styles.gif}
        style={{ 'animation-delay': `${delay}s, 8s` }}
      />
      <img src="/bars.webp" alt="White noise" class={styles.img} />
    </div>
  );
}
