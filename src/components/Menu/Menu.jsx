import { createSignal } from "solid-js";
import { menu, menuItems, menuBase } from "./Menu.module.css";
import SubmenuNodeTypes from "./SubmenuNodeTypes";

function Menu(props) {
  const [isDisplayed, setIsDisplayed] = createSignal(false); 
  const [type, setType] = createSignal();

  const MouseOverFunc = () => {
    setIsDisplayed(!isDisplayed());
  };  

  return (
    <>
      <div class={menuBase}>
        <div class={menu}>
          <li 
            onCreateBefore={props.onCreateBefore}
            onClick={() =>{
              MouseOverFunc(); 
              setType("Before")
            }}
            class={menuItems}
          >
            Create Before
          </li>
          <li
            onCreateAfter={props.onCreateAfter}
            onClick={() => {
              MouseOverFunc(); 
              setType("After")
            }}
            class={menuItems}
          >
            Create After
          </li>
          <li onClick={() => {
            MouseOverFunc(); 
            setType("Inside")
          }} class={menuItems}>
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
          <SubmenuNodeTypes
            onCreateBefore={props.onCreateBefore}
            onCreateAfter={props.onCreateAfter} 
            type={type()}
            id={props.id}
          />
        ) : null}
      </div>
    </>
  );
}

export default Menu;
