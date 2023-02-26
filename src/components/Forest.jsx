import Node from "./Node/Node.jsx";
import { forestContent } from "../App.module.css";

function Forest() {
  return (
    <div class={forestContent}>
      <Node type="sequence" title="Sequence" /> 
    </div>
  );
}

export default Forest;
