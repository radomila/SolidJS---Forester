/* @refresh reload */
import { render } from 'solid-js/web';
import dictionary from './translations';
import './index.css';
import { createI18nContext, I18nContext } from "@solid-primitives/i18n";
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

const value = createI18nContext(dictionary, "cs");

render(() => (
    <I18nContext.Provider value={value}>
      <App />
    </I18nContext.Provider>
  ),
  root
 );
