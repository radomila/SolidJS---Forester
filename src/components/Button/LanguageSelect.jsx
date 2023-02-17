import {selectionButton, selectedOption} from './Button.module.css'; 
import { useI18n } from "@solid-primitives/i18n";

function LanguageSelect() {
  const [_, { locale }] = useI18n();

  return (
    <div>
      <select class={selectionButton}
        onChange={(e) => {
          const selectedOption = e.target.value;
          locale(selectedOption);
        }}
      >
        <option class={selectedOption} value="cs">CS</option>
        <option class={selectedOption} value="en">EN</option>
      </select>
    </div>
  );
}

export default LanguageSelect;
