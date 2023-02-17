import ButtonDropdown from "./Button/ButtonDropdown.jsx";  
import ButtonLanguage from "./Button/LanguageSelect.jsx"; 
import ButtonUpdate from "./Button/ButtonUpdate.jsx"; 
import Button from './Button/Button.jsx'; 
import {preHeader, header, buttons} from '../App.module.css'
import { useI18n } from "@solid-primitives/i18n";

function Header() {
  const [t] = useI18n();

  return (
    <div>
      <div class={preHeader}>
        <ButtonUpdate />
        <ButtonLanguage />
      </div>
      <div class={header}>
        <h3>{t("menu.header")}</h3>
        <div class={buttons}>
          <Button type='primary'>{t("menu.open")}</Button>
          <Button type='primary'>{t("menu.close")}</Button>
          <ButtonDropdown />
        </div>
      </div>
    </div>
  );
}

export default Header;