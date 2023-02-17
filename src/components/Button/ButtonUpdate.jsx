import { useI18n } from "@solid-primitives/i18n";
import Button from './Button'; 

function Dropdown() {
    const [t] = useI18n();

  return (
    <div>
      <Button type='update'>{t("menu.update")}</Button>
    </div>
  );
}

export default Dropdown;