import { useI18n } from "@solid-primitives/i18n";
import Button from './Button';
import { useAppState } from "../../contexts/AppStateContext"; 

function Dropdown() {
  const [t] = useI18n();
  const { isEdit, enableEdit, disableEdit } = useAppState();

  const onUpdateClick = () => {
    if (isEdit()) {
      disableEdit();
    } else {
      enableEdit();
    }
  }

  return (
    <div>
      <Button onClick={onUpdateClick} type='update'>{t("menu.update")}</Button>
    </div>
  );
}

export default Dropdown;