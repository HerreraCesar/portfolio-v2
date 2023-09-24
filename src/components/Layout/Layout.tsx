import { Accessor, JSXElement } from 'solid-js';

import Navbar from '../Navbar/Navbar';
import { Theme } from '~/interfaces';
import ToTop from '../ToTop/ToTop';
import { Toaster } from 'solid-toast';
import styles from './Layout.module.scss';
import { useApplicationContext } from '~/context/context';

interface SectionProps {
  children: JSXElement;
}

export default function Layout({ children }: SectionProps) {
  const store = useApplicationContext();
  const [theme]: [Accessor<Theme>] = store.theme;

  return (
    <div
      class={`
        ${theme() === 'dark' ? 'dark-mode' : 'light-mode'}
        ${styles.layout} 
      `}
    >
      <Navbar />
      <ToTop />
      <main class={styles.main}>{children}</main>
      <Toaster
        position={'bottom-center'}
        toastOptions={{
          className: styles.toast,
          duration: 3000,
        }}
      />
    </div>
  );
}
