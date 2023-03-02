import clsx from "clsx";
import { createSignal, createEffect } from "solid-js";
import { useAppState } from "../../contexts/AppStateContext";
import KebabMenu from "../../icons/kebab-menu.svg";
import ArrowDownOpen from "../../icons/arrow-down-open.svg";
import ArrowRightClosed from "../../icons/arrow-right-closed.svg";
import NodeTextInput from "./TextInput";
import forestConfig from "../Forest.jsx";
import Menu from "../Menu/Menu";
import {
  nodeSection, 
  nodeMenuSection,
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
  toggleArrow,
} from "./Node.module.css";

function NodeEdittingMode(props) {
  const [isEdit] = useAppState();

  const [onClick, setOnClick] = createSignal(false);
  const [title, setTitle] = createSignal("");

  const isClicked = () => {
    setOnClick(!onClick());
  };

  const ArrowOpened = (
    <img
      class={toggleArrow}
      onClick={() => {
        props.onNodeOpen(props.id);
      }}
      src={ArrowDownOpen}
      alt="arrow-down-open"
    />
  );
  const ArrowClosed = (
    <img
      class={toggleArrow}
      onClick={() => {
        props.onNodeOpen(props.id);
      }}
      src={ArrowRightClosed}
      alt="arrow-right-closed"
    />
  );

  let nodeChildren = props.children;
  let nodeTitle = props.title;
  let type = props.type;
  let nodeType = "";
  let nodeTitleType = "";

  switch (true) {
    case type == "sequence":
      nodeType = nodeSequence;
      nodeTitleType = nodeTitleSequence;
      break;
    case type == "warning":
      nodeType = nodeWarning;
      nodeTitleType = nodeTitleWarning;
      break;
    case type == "success":
      nodeType = nodeSuccess;
      nodeTitleType = nodeTitleSuccess;
      break;
    case type == "step":
      nodeType = nodeStep;
      nodeTitleType = nodeTitleStep;
      break;
    case type == "error":
      nodeType = nodeError;
      nodeTitleType = nodeTitleError;
      break;
    case type == "selection":
      nodeType = nodeSelection;
      nodeTitleType = nodeTitleSelection;
      break;
    case type == "switch":
      nodeType = nodeSwitch;
      nodeTitleType = nodeTitleSwitch;
      break;
    case type == "tcf":
      nodeType = nodeTcf;
      nodeTitleType = nodeTitleTcf;
      break;
    default:
      nodeType = nodeBase;
      nodeTitleType = nodeTitleBase;
  }

  return (
    <>
      {/*Typ nodu*/}
      <div class={clsx(nodeType)}>
        <div>
          <div class={nodeSection}>
            {props.open ? ArrowOpened : ArrowClosed}

            {/* Sekce pro input, nazev nodu */}
            <div class={inputSection}>
              <div class={clsx(nodeTitleType)}>{nodeTitle}</div>
              {isEdit() ? (
                <NodeTextInput
                  value={title()}
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                title()
              )}
            </div>
            {/* Button pro menu */}

            {isEdit() ? (
              <img
                onClick={isClicked}
                src={KebabMenu}
                class={menuIconEditMode}
                alt="kebab-menu"
              />
            ) : null}
          </div>

          {/* Vnorene nody */}
          {nodeChildren}
        </div>
      </div>

      <div class={nodeMenuSection}>
        {isEdit() ? <div>{onClick() ? <Menu /> : null}</div> : null}
      </div>
    </>
  );
}

export default NodeEdittingMode;
