export const languages = {
    en: 'English',
    es: 'Spanish',
  };
  
export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.pacman': 'Pacman',
    'nav.cv': 'CV',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.pacman': 'Pacman',
    'nav.cv': 'CV',
  },
} as const;

export const routes = {
    es: {
        'projects': 'proyectos',
        'about': 'sobremi',
        'pacman': 'pacman',
        'cv': 'cv',
    },
    en: {
        'projects': 'projects',
        'about': 'about',
        'pacman': 'pacman',
        'cv': 'cv',
    },
   }
export const showDefaultLang = false;
