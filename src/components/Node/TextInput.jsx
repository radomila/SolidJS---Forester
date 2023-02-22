import { nodeTextInput } from "./Node.module.css";

function NodeTextInput(props) {
  return (
    <div>
      <input
        class={nodeTextInput}
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
}

export default NodeTextInput;
