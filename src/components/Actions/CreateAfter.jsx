import { createSignal } from "solid-js";

function AddNodeAfter() {
  const [value, setValue] = createSignal([]); 

  return (
    <div> 
      {value().map((data, index) => {
        return <Node type="sequence" />;
      })} 
    </div>
  );
}

export default AddNodeAfter;
