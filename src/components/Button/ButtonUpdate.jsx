import { useI18n } from "@solid-primitives/i18n";
import { useAppState } from "../../contexts/AppStateContext"; 
import Button from './Button';

function Dropdown() {
  const [t] = useI18n();
  const [isEdit, {enableEdit, disableEdit}] = useAppState();

  const onUpdateClick = () => {
    if (isEdit()) { 
      disableEdit()
      console.log('Button is disabled');
    } else {  
      enableEdit();
      console.log('Button is enabled');
    }
  } 


  return (
    <div>
      <Button onClick={onUpdateClick} type='update'>{t("menu.update")}</Button>
    </div>
  );
}

export default Dropdown;