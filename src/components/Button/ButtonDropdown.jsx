import { buttonImage } from './Button.module.css';
import { createSignal } from "solid-js";  
import Button from './Button'; 
import ArrowDown from "../../icons/arrow-down.png";
import ArrowUp from "../../icons/arrow-up.png";

function Dropdown() {
  const [isOpen, setIsOpen] = createSignal(false);

  const DropdownOpen = () => {
    console.log(setIsOpen(!isOpen()));
  };

  const ArrowOpened = <img class={buttonImage} src={ArrowUp} />;
  const ArrowClosed = <img class={buttonImage} src={ArrowDown} />;

  return (
    <>
      <Button type='primary' onClick={DropdownOpen}>
        Standard
        {!isOpen() ? ArrowClosed : ArrowOpened}
      </Button>

      {isOpen() && (
        //TODO: dropdown
        <></>
      )}
    </>
  );
}

export default Dropdown;
