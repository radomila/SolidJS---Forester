import { createSignal } from "solid-js";
import { menu, menuItems, menuBase } from "./Menu.module.css";
import SubmenuNodeTypes from "./SubmenuNodeTypes";

function Menu(props) {
  const [value, setValue] = createSignal([]);
  const [isDisplayed, setIsDisplayed] = createSignal(false);

  const MouseOverFunc = () => {
    setIsDisplayed(!isDisplayed());
  };

  const addNode = () => {
    const x = [...value(), []];
    setValue(x);
  };

  return (
    <>
      <div class={menuBase}>
        <div class={menu}>
          <li onClick={MouseOverFunc} class={menuItems}>
            Create Before
          </li>
          <li 
            onCreateAfter={props.onCreateAfter}
            onClick={() => {
              MouseOverFunc(); 
            }}
            class={menuItems}
          >
            Create After
          </li>
          <li onClick={MouseOverFunc} class={menuItems}>
            Create Inside
          </li>
          <li
            onClick={() => {
              props.onNodeDelete(props.id);
            }}
            class={menuItems}
          >
            Delete
          </li>
        </div>
        {isDisplayed() ? (
          <SubmenuNodeTypes onCreateAfter={props.onCreateAfter} id={props.id}/>
        ) : null}
      </div>
    </>
  );
}

export default Menu;
