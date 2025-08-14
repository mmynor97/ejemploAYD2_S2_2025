import { ThemeFactory } from './theme-factory';
import { LightFactory } from './themes/light-factory';
import { DarkFactory }  from './themes/dark-factory';

function detectUserTheme(): 'light' | 'dark' {

  return Math.random() > 0.5 ? 'light' : 'dark';
}

/** Devuelve la fábrica adecuada según el tema */
function getFactory(theme: 'light' | 'dark'): ThemeFactory {
  return theme === 'light' ? new LightFactory() : new DarkFactory();
}


const userTheme = detectUserTheme();
const uiFactory = getFactory(userTheme);

const btn = uiFactory.createButton();
const chk = uiFactory.createCheckbox();

btn.render();
chk.render();