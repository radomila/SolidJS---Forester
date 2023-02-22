import { useI18n } from "@solid-primitives/i18n";
import { useAppState } from "../../contexts/AppStateContext"; 
import Button from './Button';

function Dropdown() {
  const [t] = useI18n();
  const [isEdit, {enableEdit, disableEdit}] = useAppState();

  const onUpdateClick = () => {
    if (!isEdit()) { 
      enableEdit(); 
    } else {  
      disableEdit()
    }
  } 


  return (
    <div>
      <Button onClick={onUpdateClick} type='update'>{t("menu.update")}</Button> 
    </div>
  );
}

export default Dropdown;