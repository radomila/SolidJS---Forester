import { useI18n } from "@solid-primitives/i18n"; 

function Dropdown() { 
  const [_, { locale }] = useI18n();  

    return ( 
      <div> 
        <select onChange={(e) =>{
          const selectedOption = e.target.value; 
          locale(selectedOption);
        }}>  
          <option value="cs">CS</option> 
          <option value="en">EN</option> 
        </select> 
      </div> 
     
    )
}

export default Dropdown;