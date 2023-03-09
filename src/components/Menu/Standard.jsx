import { menuBase, menuStandard, menuItems } from "./Menu.module.css";

function Standard(props) {
  return (
    <div class={menuBase}>
      <div class={menuStandard}>
        <li onClick={() => props.onClickItem("Compact")} class={menuItems}>
          Compact
        </li>
        <li onClick={() => props.onClickItem("Standard")} class={menuItems}>
          Standard
        </li>
      </div>
    </div>
  );
}

export default Standard;
