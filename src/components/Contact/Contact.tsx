import Footer from '../Footer/Footer';
import { IoCopy } from 'solid-icons/io';
import { personal_data } from '~/config';
import styles from './Contact.module.scss';
import { t } from '~/helpers/translate';
import toast from 'solid-toast';

interface Props {
  id: string;
}

export default function Contact(props: Props) {
  return (
    <section class={styles.section} id={props.id}>
      <div class={styles.card}>
        <h2 class={styles.title}>
          {t('title')}
          <strong>{t('contact_us')}</strong>
        </h2>
        <div
          class={styles.email}
          onClick={() => {
            navigator.clipboard.writeText(personal_data.email);
            toast.success(() => t('copied_mail'));
          }}
        >
          <h2>{personal_data.email}</h2>
          <div class={styles.copy}>
            <IoCopy />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
