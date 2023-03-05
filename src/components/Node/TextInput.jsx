import { nodeTextInput } from "./Node.module.css";

function NodeTextInput(props) {
  return (
    <input
      class={nodeTextInput}
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  );
}

export default NodeTextInput;
