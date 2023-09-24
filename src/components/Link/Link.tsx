import { navigate } from '~/helpers/navigate';
import styles from './Link.module.scss';
import { t } from '~/helpers/translate';

interface LinkProps {
  section: string;
  setMenuOpen: (arg: boolean) => void;
  current: string;
}

export const Link = (props: LinkProps) => {
  return (
    <li>
      <button
        onClick={() => {
          navigate(props.section);
          props.setMenuOpen(false);
        }}
        class={styles.link}
        classList={{
          [styles.active_link]: props.section === props.current,
        }}
      >
        {t(props.section)}
      </button>
    </li>
  );
};
