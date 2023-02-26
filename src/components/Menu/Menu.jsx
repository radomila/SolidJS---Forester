import { createSignal } from "solid-js";
import { menu, menuItems, menuBase } from "./Menu.module.css";
import SubmenuNodeTypes from "./SubmenuNodeTypes";

function Menu() {
  const [isDisplayed, setIsDisplayed] = createSignal(false); 

  const MouseOverFunc = () => {
    setIsDisplayed(!isDisplayed());
  }; 
  

  return (
    <>
      <div class={menuBase}>
        <div class={menu}>
          <li onClick={MouseOverFunc} class={menuItems}>
            Create Before
          </li>
          <li onClick={MouseOverFunc} class={menuItems}>
            Create After
          </li>
          <li onClick={MouseOverFunc} class={menuItems}>
            Create Inside
          </li>
          <li class={menuItems}>Delete</li>
        </div>
        {isDisplayed() ? <SubmenuNodeTypes /> : null}
      </div>

    </>
  );
}

export default Menu;
