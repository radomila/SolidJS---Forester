import { buttonImage } from "./Button.module.css";
import { createSignal } from "solid-js";
import Button from "./Button";
import Standard from "../Menu/Standard";
import ArrowDown from "../../icons/arrow-down.png";
import ArrowUp from "../../icons/arrow-up.png";

function Dropdown(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  const DropdownOpen = () => {
    setIsOpen(!isOpen());
  };

  const ArrowOpened = <img class={buttonImage} src={ArrowUp} />;
  const ArrowClosed = <img class={buttonImage} src={ArrowDown} />;

  return (
    <>
      <Button type="primary" onClick={DropdownOpen}>
        {props.mode}
        {!isOpen() ? ArrowClosed : ArrowOpened}
        {isOpen() && <Standard onClickItem={props.onClickItem} />}
      </Button>
    </>
  );
}

export default Dropdown;
