import { Color, Language, Theme, Typography } from "~/interfaces";
import { JSX, createContext, createSignal, useContext } from "solid-js";
import {
  INITIAL_COLOR,
  INITIAL_LANGUAGE,
  INITIAL_THEME,
  INITIAL_TYPOGRAPHY,
} from "~/constants";

interface ApplicationProviderProps {
  children: JSX.Element;
}

const ApplicationContext = createContext();

export function ApplicationProvider(props: ApplicationProviderProps) {
  const [theme, setTheme] = createSignal<Theme>(INITIAL_THEME);
  const [language, setLanguage] = createSignal<Language>(INITIAL_LANGUAGE);
  const [selectedColor, setSelectedColor] = createSignal<Color>(INITIAL_COLOR);
  const [selectedTypography, setSelectedTypography] =
    createSignal<Typography>(INITIAL_TYPOGRAPHY);

  const store = {
    theme: [
      theme,
      {
        changeTheme(theme: Theme) {
          setTheme(() => theme);
        },
      },
    ],
    language: [
      language,
      {
        changeLanguage(language: Language) {
          setLanguage(() => language);
        },
      },
    ],
    selectedColor: [
      selectedColor,
      {
        changeSelectedColor(selectedColor: Color) {
          setSelectedColor(() => selectedColor);
          document.documentElement.style.setProperty(
            "--colors-accent-100",
            selectedColor
          );
        },
      },
    ],
    selectedTypography: [
      selectedTypography,
      {
        changeSelectedTypography(selectedTypography: Typography) {
          setSelectedTypography(() => selectedTypography);
          document.documentElement.style.setProperty(
            "--font",
            selectedTypography
          );
        },
      },
    ],
  };

  return (
    <ApplicationContext.Provider value={store}>
      {props.children}
    </ApplicationContext.Provider>
  );
}

export function useApplicationContext() {
  return useContext<any>(ApplicationContext);
}
