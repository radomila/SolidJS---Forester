import {menu, menuItems} from "./Menu.module.css";

function Menu() {
  return (
    <>
    <> 
      <div class={menu}> 
        <li class={menuItems}>Create Before</li>
        <li class={menuItems}>Create After</li>
        <li class={menuItems}>Create Inside</li> 
        <li class={menuItems}>Delete</li>
      </div >
      </>
    </>
  );
}

export default Menu;
