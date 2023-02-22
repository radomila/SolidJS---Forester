import Node from "./Node/Node.jsx";
import { useAppState } from "../contexts/AppStateContext";
import { forestContent } from "../App.module.css";

function Forest() {
  const [isEdit] = useAppState();
  return (
    <div class={forestContent}>  
    <Node type='sequence'>Sequence</Node> 
    </div>
  );
}

export default Forest;
