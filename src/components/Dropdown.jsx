//import styles from '../styles.css'; 
import ArrowDown from "../icons/arrow-down.png"; 
import ArrowUp from "../icons/arrow-up.png";
import { createSignal } from "solid-js";  

function Dropdown() { 
  const [isOpen, setIsOpen] = createSignal(false);   
  
  const DropdownOpen = () => { 
    console.log(setIsOpen(!isOpen()));
  } 

  const ArrowOpened = <img src={ArrowUp} />
  const ArrowClosed = <img src={ArrowDown} />

    return ( 
      <> 
      <button onClick={DropdownOpen}> 
        Standard
        {!isOpen() ? ArrowClosed : ArrowOpened} 
      </button>    

        {isOpen() && (  
            //TODO: dropdown
            <></>
        ) 
        }
      </> 
     
    )
  }

export default Dropdown;