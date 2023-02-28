import Node from "./Node/Node.jsx";
import { forestContent } from "../App.module.css";

export const forestConfig = [
  {
    type: "sequence",
    title: "Sequence",
  },
  {
    type: "sequence",
    title: "Sequence",
    nestedNodes: [
      {
        type: "step",
        title: "Step",
      },
      {
        type: "sequence",
        title: "Sequence",
        nestedNodes: [
          {
            type: "sequence",
            title: "Sequence",
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
        {forestConfig.map((node, index) => {
          return (
            <Node key={index} type={node.type} title={node.title}>
              {node.nestedNodes && (
                <Forest node={node.nestedNodes} depth={depth + 1} />
              )}
            </Node>
          );
        })}
      </div>
    </>
  );
}

export default Forest;
