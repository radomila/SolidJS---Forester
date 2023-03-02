import { createSignal } from "solid-js";
import Node from "./Node/Node.jsx";
import { forestContent } from "../App.module.css";

export const forestConfig = [
  {
    id: 1,
    type: "sequence",
    title: "Sequence",
    open: true,
  },
  {
    id: 2,
    type: "sequence",
    title: "Sequence",
    open: true,
    nestedNodes: [
      {
        id: 3,
        type: "step",
        title: "Step",
        open: true,
      },
      {
        id: 4,
        type: "sequence",
        title: "Sequence",
        open: true,
        nestedNodes: [
          {
            id: 5,
            type: "sequence",
            title: "Sequence",
            open: true,
            nestedNodes: [
              {
                id: 6,
                type: "step",
                title: "Step",
                open: true,
              },
              {
                id: 7,
                type: "error",
                title: "Error",
                open: true,
              },
              {
                id: 8,
                type: "success",
                title: "Success",
                open: true,
              },
            ],
          },
        ],
      },
      {
        id: 9,
        type: "success",
        title: "Success",
        open: true,
      },
      {
        id: 10,
        type: "selection",
        title: "Selection",
        open: true,
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

  const [nodesLocal, setNodesLocal] = createSignal(nodes);

  const onNodeOpen = (id) => {
    const newNodes = nodesLocal().map((node) => {
      if (node.id === id) {
        return {
          ...node,
          open: !node.open,
        };
      } else {
        return node;
      }
    });
    setNodesLocal(newNodes);
  };

  return (
    <>
      <div class={forestContent}>
        {nodesLocal().map((node, index) => {
          return (
            <>
              <Node
                onNodeOpen={onNodeOpen}
                key={node.title + index}
                type={node.type}
                title={node.title}
                id={node.id}
                open={node.open}
              >
                {node.nestedNodes && node.open && (
                  <Forest nodes={node.nestedNodes} depth={depth + 1} />
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
