import { clsx } from "clsx";
import { createSignal } from "solid-js";
import { useAppState } from "../../contexts/AppStateContext";
import KebabMenu from "../../icons/kebab-menu.svg";
import NodeTextInput from "./TextInput";
import Menu from "../Menu/Menu";
import {
  nodeBase,
  nodeTitleBase,
  nodeSequence,
  nodeStep,
  nodeSuccess,
  nodeWarning,
  nodeError,
  nodeSelection,
  nodeSwitch,
  nodeTcf,
  nodeTitleSequence,
  nodeTitleStep,
  nodeTitleSuccess,
  nodeTitleWarning,
  nodeTitleError,
  nodeTitleSelection,
  nodeTitleSwitch,
  nodeTitleTcf,
  menuIconEditMode,
  inputSection,
} from "./Node.module.css";

function NodeEdittingMode(props) {
  const [isEdit] = useAppState();

  const [onClick, setOnClick] = createSignal(false);
  const [title, setTitle] = createSignal("");

  const isClicked = () => {
    setOnClick(!onClick());
  };

  let type = props.type;
  let nodeType = "";
  let nodeTitleType = "";

  switch (true) {
    case type === "sequence":
      nodeType = nodeSequence;
      nodeTitleType = nodeTitleSequence;
      break;
    case type === "warning":
      nodeType = nodeWarning;
      nodeTitleType = nodeTitleWarning;
      break;
    case type === "success":
      nodeType = nodeSuccess;
      nodeTitleType = nodeTitleSuccess;
      break;
    case type === "step":
      nodeType = nodeStep;
      nodeTitleType = nodeTitleStep;
      break;
    case type === "error":
      nodeType = nodeError;
      nodeTitleType = nodeTitleError;
      break;
    case type === "selection":
      nodeType = nodeSelection;
      nodeTitleType = nodeTitleSelection;
      break;
    case type === "switch":
      nodeType = nodeSwitch;
      nodeTitleType = nodeTitleSwitch;
      break;
    case type === "tcf":
      nodeType = nodeTcf;
      nodeTitleType = nodeTitleTcf;
      break;
    default:
      nodeType = nodeBase;
      nodeTitleType = nodeTitleBase;
  }

  return (
    <>
      <div class={clsx(nodeType)}>
        <div class={inputSection}>
          <div class={clsx(nodeTitleType)}>{props.children}</div>
          {!isEdit() ? (
            <NodeTextInput
              value={title()}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : title()}
        </div>

        {!isEdit() ? (
          <img
            onClick={isClicked}
            src={KebabMenu}
            class={menuIconEditMode}
            alt="kebab-menu"
          />
        ) : null}
      </div>
      {!isEdit() ? <div>{onClick() ? <Menu /> : null}</div> : null}
    </>
  );
}

export default NodeEdittingMode;
