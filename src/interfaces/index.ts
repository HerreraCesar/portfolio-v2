export interface Dictionary {
  [key: string]: string;
}

export type Language = 'en' | 'es';

export type Theme = 'dark' | 'light';

export type Color = '#dd423e' | '#e61e7a' | '#5e28ed' | '#255bff';

export type Typography =
  | 'Montserrat'
  | 'Roboto'
  | 'Nunito'
  | 'Raleway'
  | 'Bricolage Grotesque'
  | 'Poppins';
