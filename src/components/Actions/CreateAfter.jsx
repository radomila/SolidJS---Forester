import { createSignal } from "solid-js";

function CreateAfter() {
  const [value, setValue] = createSignal([]); 

  return (
    <div> 
      {value().map((data, index) => {
        return <Node type="sequence" />;
      })} 
    </div>
  );
}

export default CreateAfter;
