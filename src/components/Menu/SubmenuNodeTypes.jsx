import { clsx } from "clsx";
import { createSignal } from "solid-js";
import { menuItems, menuNodes } from "./Menu.module.css";
import Node from "../Node/Node.jsx";

function MenuNodes() {
  let isActiveProp;

  const [isClicked, setIsClicked] = createSignal(false);
  const [isActive, setIsActive] = createSignal("");
  const [selectedNode, setSelectedNode] = createSignal("");
  const [selectedName, setSelectedName] = createSignal("");

  const isClickedFunc = (node) => {
    setIsClicked(!isClicked());
    setIsActive(node);

    switch (true) {
      case node === "Step":
        setSelectedNode("step");
        setSelectedName("Step");
        break;
      case node === "Success":
        setSelectedNode("success");
        setSelectedName("Success");
        break;
      case node === "Warning":
        setSelectedNode("warning");
        setSelectedName("Warning");
        break;
      case node === "Error":
        setSelectedNode("error");
        setSelectedName("Error");
        break;
      case node === "Sequence":
        setSelectedNode("sequence");
        setSelectedName("Sequence");
        break;
      case node === "Selection":
        setSelectedNode("selection");
        setSelectedName("Selection");
        break;
      case node === "Switch":
        setSelectedNode("switch");
        setSelectedName("Switch");
        break;
      default:
        setSelectedNode("tcf");
        setSelectedName("Try-Catch-Finally");
    }
  };


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
      {isClicked() && <Node type={selectedNode()} title={selectedName()} />}
    </>
  );
}

export default MenuNodes;
