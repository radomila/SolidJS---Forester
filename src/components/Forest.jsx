import { createSignal } from "solid-js";
import Node from "./Node/Node.jsx";
import { forestContent } from "../App.module.css";

function Forest(props) {
  let { depth = 0 } = props;

  const maxDepth = 6;
  if (depth > maxDepth) {
    console.log(depth);
    return null;
  }

  return (
    <>
      <div class={forestContent}>
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
              >
                {node.nestedNodes && node.open && (
                  <Forest
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
