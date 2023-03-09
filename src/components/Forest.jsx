import Node from "./Node/Node.jsx"; 
import { forestContentStandard, forestContentCompact } from "../App.module.css";

function Forest(props) { 
  let { depth = 0 } = props; 

  const maxDepth = 6;
  if (depth > maxDepth) {
    console.log(depth);
    return null;
  }; 
 
  return (
    <>
      <div
        class={`${
          props.mode === "Standard"
            ? forestContentStandard
            : forestContentCompact
        }`}
      >
        {props.nodes.map((node, index) => {
          return (
            <>
              <Node
                onNodeOpen={props.onNodeOpen}
                onNodeDelete={props.onNodeDelete}
                onCreateBefore={props.onCreateBefore}
                onCreateInside={props.onCreateInside}
                onCreateAfter={props.onCreateAfter}
                key={node.title + index}
                type={node.type}
                title={node.title}
                id={node.id}
                open={node.open}
                mode={props.mode}
              >
                {node.nestedNodes && node.open && (
                  <Forest
                    mode={props.mode}
                    nodes={node.nestedNodes}
                    depth={depth + 1}
                    onNodeOpen={props.onNodeOpen}
                    onCreateBefore={props.onCreateBefore}
                    onCreateAfter={props.onCreateAfter}
                    onCreateInside={props.onCreateInside}
                    onNodeDelete={props.onNodeDelete}
                  />
                )}
              </Node>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Forest;
