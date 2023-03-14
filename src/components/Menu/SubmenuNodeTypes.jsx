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
  ];

  const isClickedFunc = (node) => {
    setIsClicked(!isClicked());

    if (props.type === "Before") {
      setIsActive(
        props.onCreateBefore(props.id, { 
          id: Math.random() * 1000,
          type: node,
          title: node,
          open: true,  
          header: "",
          nestedNodes: []
        })
      );
    } else if (props.type === "After") {
      setIsActive(
        props.onCreateAfter(props.id, { 
          id: Math.random() * 1000,
          type: node,
          title: node,
          open: true, 
          header: "",
          nestedNodes: []
        })
      );
    } else if (props.type === "Inside") {
      setIsActive( 
        props.onCreateInside(props.id,{ 
          id: Math.random() * 1000,
          type: node,
          title: node,
          open: true, 
          header: "",
          nestedNodes: []
        })
      )
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
