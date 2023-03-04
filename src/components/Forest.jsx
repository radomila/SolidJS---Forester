import { createSignal } from "solid-js";
import Node from "./Node/Node.jsx";
import { forestContent } from "../App.module.css";

export const forestConfig = [
  {
    id: 1,
    type: "Sequence",
    title: "Sequence",
    open: true,
  },
  {
    id: 2,
    type: "Sequence",
    title: "Sequence",
    open: true,
    nestedNodes: [
      {
        id: 3,
        type: "Step",
        title: "Step",
        open: true,
      },
      {
        id: 4,
        type: "Sequence",
        title: "Sequence",
        open: true,
        nestedNodes: [
          {
            id: 5,
            type: "Sequence",
            title: "Sequence",
            open: true,
            nestedNodes: [
              {
                id: 6,
                type: "Step",
                title: "Step",
                open: true,
              },
              {
                id: 7,
                type: "Error",
                title: "Error",
                open: true,
              },
              {
                id: 8,
                type: "Success",
                title: "Success",
                open: true,
              },
            ],
          },
        ],
      },
      {
        id: 9,
        type: "Success",
        title: "Success",
        open: true,
      },
      {
        id: 10,
        type: "Selection",
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

  const onNodeDelete = (id) => { 
    const newNodesDelete = nodesLocal().filter((node) => node.id !== id); 
    setNodesLocal(newNodesDelete);
  };  

  const onCreateBefore = (id, node) => {
    const newNodesAddedBefore = [...nodesLocal()]; 
    const indexBefore = newNodesAddedBefore.findIndex((n) => n.id === id); 
    newNodesAddedBefore.splice(indexBefore, 0, node);  
    setNodesLocal(newNodesAddedBefore);
  } 

  const onCreateAfter = (id, node) => {
    const newNodesAdded = [...nodesLocal()]; 
    const index = newNodesAdded.findIndex((n) => n.id === id); 
    newNodesAdded.splice(index + 1, 0, node);  
    setNodesLocal(newNodesAdded);
  } 


  return (
    <>
      <div class={forestContent}>
        {nodesLocal().map((node, index) => {
          return (
            <>
              <Node
                onNodeOpen={onNodeOpen}
                onNodeDelete={onNodeDelete}  
                onCreateBefore={onCreateBefore}
                onCreateAfter={onCreateAfter}
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
