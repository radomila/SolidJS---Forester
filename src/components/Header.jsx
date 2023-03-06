import ButtonDropdown from "./Button/ButtonDropdown.jsx";
import ButtonLanguage from "./Button/LanguageSelect.jsx";
import ButtonUpdate from "./Button/ButtonUpdate.jsx";
import Button from "./Button/Button.jsx";
import { preHeader, header, buttons } from "../App.module.css";
import { useI18n } from "@solid-primitives/i18n";

function Header(props) {
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
          <Button onClick={() => props.openAllFunc()} type="primary">
            {t("menu.open")}
          </Button>
          <Button onClick={() => props.closeAllFunc()} type="primary">
            {t("menu.close")}
          </Button>
          <ButtonDropdown onClickItem={props.onClickItem} mode={props.mode}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
