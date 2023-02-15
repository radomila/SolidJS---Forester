import Dropdown from './components/Dropdown.jsx';
import LanguageSelect from './components/Language-select.jsx';  
import { useI18n } from "@solid-primitives/i18n";

function App() { 
  const [t] = useI18n();

  return (  
    <div> 
      <div class="pre-header">
        <button class="update">{t('menu.update')}</button> 
        <LanguageSelect/>
      </div>
      <div class="header"> 
        <h3>New Algorithm</h3> 
        <div class="buttons"> 
          <button>{t('menu.open')}</button>  
          <button>{t('menu.close')}</button>   
          <Dropdown/>  
        </div>   
      </div>   
    </div>
  );
}

export default App;
