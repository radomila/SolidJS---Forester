import styles from './styles.css';  
import Dropdown from './components/Dropdown.jsx';
import LanguageSelect from './components/Language-select.jsx';


function App() {
  return (
    <div> 
      <div class="pre-header">
        <button class="update">Upravit</button> 
        <LanguageSelect/>
      </div>
      <div class="header"> 
        <h3>New Algorithm</h3> 
        <div class="buttons"> 
          <button>Open All</button>  
          <button>Close All</button>   
          <Dropdown/> 
        </div> 
      </div>  
    </div>
  );
}

export default App;
