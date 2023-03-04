import { clsx } from "clsx";
import { createSignal } from "solid-js";
import { menuItems, menuNodes } from "./Menu.module.css";

function MenuNodes(props) {
  let isActiveProp;

  const [isClicked, setIsClicked] = createSignal(false);
  const [isActive, setIsActive] = createSignal("");

  const nodeType = [
    "Step",
    "Success",
    "Warning",
    "Error",
    "Sequence",
    "Selection",
    "Switch",
    "Try-Catch-Finally",
  ];

  const isClickedFunc = (node) => {
    setIsClicked(!isClicked());

    if (props.type === "Before") {
      setIsActive(
        props.onCreateBefore(props.id, {
          type: node,
          title: node,
          open: true,
        })
      );
    } else if (props.type === "After") {
      setIsActive(
        props.onCreateAfter(props.id, {
          type: node,
          title: node,
          open: true,
        })
      );
    }
  };

  return (
    <>
      <div class={menuNodes}>
        {nodeType.map((node) => {
          isActiveProp = isActive() === node ? "active" : "";
          return (
            <li
              onClick={() => {
                isClickedFunc(node);
              }}
              class={clsx(menuItems, isActiveProp)}
            >
              {node}
            </li>
          );
        })}
      </div>
    </>
  );
}

export default MenuNodes;
