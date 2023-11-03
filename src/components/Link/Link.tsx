import { navigate } from "~/helpers/navigate";
import styles from "./Link.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";

interface LinkProps {
  section: string;
  setMenuOpen: (arg: boolean) => void;
}

export const Link = (props: LinkProps) => {
  const store = useApplicationContext();
  const [currentSection] = store.currentSection;
  return (
    <li>
      <button
        onClick={() => {
          navigate(props.section);
          props.setMenuOpen(false);
        }}
        class={styles.link}
        classList={{
          [styles.active_link]: props.section === currentSection(),
        }}
        aria-label={t(props.section)}
      >
        {t(props.section)}
      </button>
    </li>
  );
};
