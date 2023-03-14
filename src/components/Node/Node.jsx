import clsx from "clsx";
import { createSignal, createEffect } from "solid-js";
import { useAppState } from "../../contexts/AppStateContext";
import KebabMenu from "../../icons/kebab-menu.svg";
import ArrowDownOpen from "../../icons/arrow-down-open.svg";
import ArrowRightClosed from "../../icons/arrow-right-closed.svg";
import NodeTextInput from "./TextInput";
import Menu from "../Menu/Menu";
import {
  nodeSection,
  nodeBase,
  nodeTitleBase,
  nodeSequence,
  nodeStep,
  nodeSuccess,
  nodeWarning,
  nodeError,
  nodeTitleSequence,
  nodeTitleStep,
  nodeTitleSuccess,
  nodeTitleWarning,
  nodeTitleError,
  menuIconEditMode,
  inputSection,
  toggleArrow,
} from "./Node.module.css";

function NodeEdittingMode(props) {
  const [isEdit] = useAppState(); 

  const [onClick, setOnClick] = createSignal(false);

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
    case type == "Sequence":
      nodeType = nodeSequence;
      nodeTitleType = nodeTitleSequence;
      break;
    case type == "Warning":
      nodeType = nodeWarning;
      nodeTitleType = nodeTitleWarning;
      break;
    case type == "Success":
      nodeType = nodeSuccess;
      nodeTitleType = nodeTitleSuccess;
      break;
    case type == "Step":
      nodeType = nodeStep;
      nodeTitleType = nodeTitleStep;
      break;
    case type == "Error":
      nodeType = nodeError;
      nodeTitleType = nodeTitleError;
      break;
    default:
      nodeType = nodeBase;
      nodeTitleType = nodeTitleBase;
  }

  return (
    <>
      {/*Typ nodu*/}
      <div class={`${props.mode === "Standard" ? nodeType : ""}`}>
        <div class={nodeSection}>
          {props.open ? ArrowOpened : ArrowClosed}
          {/* Sekce pro input, nazev nodu */}
          <div class={inputSection}>
            <div class={clsx(nodeTitleType)}>{nodeTitle}</div>
            {isEdit() ? (
              <NodeTextInput
                value={props.header}
                onChange={(e) => props.setHeader(props.id, e.target.value)}
              />
            ) : (
              props.header
            )}
          </div>
          {/* Button pro menu */}

          <div>
            {isEdit() ? (
              <img
                onClick={isClicked}
                src={KebabMenu}
                class={menuIconEditMode}
                alt="kebab-menu"
              />
            ) : null}
            {isEdit() ? (
              <>
                {onClick() ? (
                  <Menu
                    onNodeDelete={props.onNodeDelete}
                    onCreateBefore={props.onCreateBefore}
                    onCreateAfter={props.onCreateAfter}
                    onCreateInside={props.onCreateInside}
                    id={props.id}
                  />
                ) : null}
              </>
            ) : null}
          </div>
        </div>

        {/* Vnorene nody */}
        {nodeChildren}
      </div>
    </>
  );
}

export default NodeEdittingMode;
