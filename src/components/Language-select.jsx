import { clearDelegatedEvents, render } from "solid-js/web";
import styles from '../styles.css'; 
import { createSignal } from "solid-js";  

function Dropdown() { 
  const [isOpen, setIsOpen] = createSignal("Standard");  

    return ( 
      <div> 
        <select onChange={(e) =>{
          const selectedOption = e.target.value; 
          setIsOpen(selectedOption);
        }}>  
          <option value="cs">CS</option> 
          <option value="en">EN</option> 
        </select> 
      </div> 
     
    )
  }

export default Dropdown;