import { BsBriefcaseFill, BsGithub, BsLinkedin } from 'solid-icons/bs';
import { FaBrandsGithub, FaBrandsLinkedin } from 'solid-icons/fa';

import { A } from 'solid-start';
import { links } from '~/config';
import styles from './Footer.module.scss';
import { t } from '~/helpers/translate';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.icons}>
        <A href={links.github} target="_blank">
          <BsGithub />
        </A>
        <A href={links.linkedin} target="_blank">
          <BsLinkedin />
        </A>
        <A href={links.portfolio} target="_blank">
          <BsBriefcaseFill />
        </A>
      </div>
      <span class={styles.author}>
        {t('author')}
        <A href={links.portfolio} target="_blank">
          Herrera César
        </A>
      </span>
    </footer>
  );
}
