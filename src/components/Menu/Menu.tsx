import { Accessor, For } from 'solid-js';
import { Color, Language, Theme, Typography } from '~/interfaces';

import styles from './Menu.module.scss';
import { t } from '~/helpers/translate';
import { useApplicationContext } from '~/context/context';

interface MenuProps {
  menuOpen: Accessor<boolean>;
}

export const Menu = (props: MenuProps) => {
  const store = useApplicationContext();

  const [theme, { changeTheme }]: [
    Accessor<Theme>,
    { changeTheme: (theme: Theme) => void }
  ] = store.theme;

  const [language, { changeLanguage }]: [
    Accessor<Language>,
    { changeLanguage: (language: Language) => void }
  ] = store.language;

  const [selectedColor, { changeSelectedColor }]: [
    Accessor<Color>,
    { changeSelectedColor: (selectedColor: Color) => void }
  ] = store.selectedColor;

  const [selectedTypography, { changeSelectedTypography }]: [
    Accessor<Typography>,
    { changeSelectedTypography: (selectedTypography: Typography) => void }
  ] = store.selectedTypography;

  const colorOptions: Color[] = ['#dd423e', '#e61e7a', '#5e28ed', '#255bff'];
  const typographyOptions: Typography[] = [
    'Montserrat',
    'Bricolage Grotesque',
    'Nunito',
    'Roboto',
    'Raleway',
    'Poppins',
  ];

  return (
    <div
      class={styles.menu}
      classList={{
        [styles.open_menu]: props.menuOpen(),
      }}
    >
      <div class={styles.card}>
        <span>{t('spanish')}</span>
        <label class={styles.switch}>
          <input
            class={styles.input}
            type="checkbox"
            checked={language() === 'en' && true}
            onclick={() => changeLanguage(language() === 'es' ? 'en' : 'es')}
          />
          <div class={styles.slider} />
        </label>
        <span>{t('english')}</span>
      </div>
      <div class={styles.card}>
        <span>{t('dark')}</span>
        <label class={styles.switch}>
          <input
            class={styles.input}
            type="checkbox"
            checked={theme() === 'light' && true}
            onclick={() => changeTheme(theme() === 'dark' ? 'light' : 'dark')}
          />
          <div class={styles.slider} />
        </label>
        <span>{t('light')}</span>
      </div>
      <div class={styles.card}>
        <span>{t('color')}</span>
        <For each={colorOptions}>
          {(color) => (
            <div
              onClick={() => changeSelectedColor(color)}
              style={{ 'background-color': color }}
              class={styles.color}
              classList={{
                [styles.selected_color]: selectedColor() === color,
              }}
            />
          )}
        </For>
      </div>
      <div class={styles.card}>
        <span>{t('typography')}</span>
        <For each={typographyOptions}>
          {(typography) => (
            <span
              onClick={() => changeSelectedTypography(typography)}
              style={{ 'font-family': typography }}
              class={styles.typography}
              classList={{
                [styles.selected_typography]:
                  selectedTypography() === typography,
              }}
            >
              {typography}
            </span>
          )}
        </For>
      </div>
    </div>
  );
};
