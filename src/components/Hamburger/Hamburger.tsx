import { Accessor } from 'solid-js';
import styles from './Hamburger.module.scss';

interface Props {
  menuOpen: Accessor<boolean>;
}

export default function Hamburger(props: Props) {
  return (
    <div
      class={styles.icon}
      classList={{
        [styles.open_menu]: props.menuOpen(),
      }}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
