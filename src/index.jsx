/* @refresh reload */
import { render } from "solid-js/web";
import dictionary from "./translations";
import "./index.css";
import { createI18nContext, I18nContext } from "@solid-primitives/i18n";
import App from "./App";
import { AppStateProvider } from "./contexts/AppStateContext";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

const value = createI18nContext(dictionary, "cs");

render(
  () => (
    <I18nContext.Provider value={value}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </I18nContext.Provider>
  ),
  root
);
