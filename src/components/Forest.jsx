import Node from "./Node/Node.jsx"; 
import { forestContent } from "../App.module.css";

export const forestConfig = [
  {
    type: "sequence",
    title: "Sequence",
    open: false,
  },
  {
    type: "sequence",
    title: "Sequence",
    open: true,
    nestedNodes: [
      {
        type: "step",
        title: "Step",
        open: true,
      },
      {
        type: "sequence",
        title: "Sequence",
        open: true,
        nestedNodes: [
          {
            type: "sequence",
            title: "Sequence",
            open: true,
            nestedNodes: [
              {
                type: "step",
                title: "Step",
              },
              {
                type: "error",
                title: "Error",
              },
              {
                type: "success",
                title: "Success",
              },
            ],
          },
        ],
      },
      {
        type: "success",
        title: "Success",
      },
      {
        type: "selection",
        title: "Selection",
      },
    ],
  },
];

function Forest(props) {
  let { nodes, depth = 0 } = props;

  const maxDepth = 4;
  if (depth > maxDepth) {
    return null;
  }

  return (
    <>
      <div class={forestContent}>
        {nodes.map((node, index) => {
          return (
            <Node key={node.title + index} type={node.type} title={node.title}>
              {node.nestedNodes && node.open && (
                <Forest nodes={node.nestedNodes} depth={depth + 1} />
              )}
            </Node>
          );
        })}
      </div>
    </>
  );
}

export default Forest;
