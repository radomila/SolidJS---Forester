import { createSignal } from "solid-js";
import Header from "./components/Header";
import Forest from "./components/Forest";

export const forestConfig = [
  {
    id: 1,
    type: "Sequence",
    title: "Sequence",
    open: true,
    header: "",
    nestedNodes: [],
  },
  {
    id: 2,
    type: "Sequence",
    title: "Sequence",
    open: true,
    header: "",
    nestedNodes: [
      {
        id: 3,
        type: "Step",
        title: "Step",
        open: true,
        header: "",
        nestedNodes: [],
      },
      {
        id: 4,
        type: "Sequence",
        title: "Sequence",
        open: true,
        header: "",
        nestedNodes: [
          {
            id: 5,
            type: "Sequence",
            title: "Sequence",
            open: true,
            header: "",
            nestedNodes: [
              {
                id: 6,
                type: "Step",
                title: "Step",
                open: true,
                header: "",
                nestedNodes: [],
              },
              {
                id: 7,
                type: "Error",
                title: "Error",
                open: true,
                header: "",
                nestedNodes: [],
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
        header: "",
        nestedNodes: [],
      },
    ],
  },
];

function App(props) {
  const [nodesLocal, setNodesLocal] = createSignal(forestConfig);
  const [mode, setMode] = createSignal("Compact");

  const setHeader = (id, newHeader) => {
    const newNodes = nodesLocal().map((node) => {
      if (node.id === id) {
        return {
          ...node,
          header: newHeader
        };
      } else {
        return {
          ...node,
          nestedNodes: setHeaderRecursive(id, node.nestedNodes, newHeader)
        };
      }
    });
    setNodesLocal(newNodes);
  };

  const setHeaderRecursive = (id, nodes, newHeader) => {
    return nodes.map((node) => {
      if (node.id === id) {
        return {
          ...node,
          header: newHeader,
        };
      } else {
        return {
          ...node,
          nestedNodes: setHeaderRecursive(id, node.nestedNodes, newHeader)
        };
      }
    });
  };

  const onNodeOpen = (id) => {
    const newNodes = nodesLocal().map((node) => {
      if (node.id === id) {
        return {
          ...node,
          open: !node.open,
        };
      } else {
        return {
          ...node,
          nestedNodes: onNestedNodeOpen(node.nestedNodes, id),
        };
      }
    });
    setNodesLocal(newNodes);
  };

  const onNestedNodeOpen = (nodes, id) => {
    return nodes.map((node) => {
      if (node.id === id) {
        return {
          ...node,
          open: !node.open,
        };
      } else {
        return {
          ...node,
          nestedNodes: onNestedNodeOpen(node.nestedNodes, id),
        };
      }
    });
  };

  const onCreateBefore = (id, node) => {
    let isNodeAdded = false;
    const list = [...nodesLocal()];
    list.map((n, index) => {
      if (!isNodeAdded && n.id === id) {
        list.splice(index, 0, node);
        isNodeAdded = true;
      } else if (n.nestedNodes) {
        return {
          ...n,
          nestedNodes: onCreateBeforeRecursive(id, node, n.nestedNodes),
        };
      } else {
        return n;
      }
    });
    setNodesLocal(list);
  };
  const onCreateBeforeRecursive = (id, node, nodes) => {
    let isNodeAdded = false;
    return nodes.map((n, index) => {
      if (!isNodeAdded && n.id === id) {
        nodes.splice(index, 0, node);
        isNodeAdded = true;
      } else if (n.nestedNodes) {
        return {
          ...n,
          nestedNodes: onCreateBeforeRecursive(id, node, n.nestedNodes),
        };
      } else {
        return n;
      }
    });
  };

  /* Create After */
  const onCreateAfter = (id, node) => {
    const list = [...nodesLocal()];
    list.map((n, index) => {
      if (n.id === id) {
        list.splice(index + 1, 0, node);
        return n;
      } else if (n.nestedNodes) {
        return {
          ...n,
          nestedNodes: onCreateAfterRecursive(id, node, n.nestedNodes),
        };
      } else {
        return n;
      }
    });
    setNodesLocal(list);
  };

  const onCreateAfterRecursive = (id, node, nodes) => {
    return nodes.map((n, index) => {
      if (n.id === id) {
        nodes.splice(index + 1, 0, node);
        return n;
      } else if (n.nestedNodes) {
        return {
          ...n,
          nestedNodes: onCreateAfterRecursive(id, node, n.nestedNodes),
        };
      } else {
        return n;
      }
    });
  };

  /* Create Inside */
  const onCreateInside = (id, node) => {
    const createdInside = onCreateInsideRecursive(id, node, nodesLocal());
    setNodesLocal(createdInside);
  };

  const onCreateInsideRecursive = (id, node, nodes) => {
    return nodes.map((n) => {
      if (n.id === id) {
        n.nestedNodes.splice(0, 0, node);
      } else if (n.nestedNodes) {
        onCreateInsideRecursive(id, node, n.nestedNodes);
      }
      return n;
    });
  };

  /* Delete */
  const onNodeDelete = (id) => {
    const newForest = nodesLocal().filter((n) => {
      if (n.id === id) {
        return false;
      } else if (n.nestedNodes) {
        const nestedItems = onNestedNodeDelete(n.nestedNodes, id);
        n.nestedNodes = nestedItems;
      }
      return true;
    });
    setNodesLocal(newForest);
  };

  const onNestedNodeDelete = (nodes, id) => {
    return nodes.filter((n) => {
      if (n.id === id) {
        return false;
      } else if (n.nestedNodes) {
        const nestedItems = onNestedNodeDelete(n.nestedNodes, id);
        n.nestedNodes = nestedItems;
      }
      return true;
    });
  };

  const closeAllFunc = () => {
    const closedNodes = nodesLocal().map((node) => {
      return {
        ...node,
        open: false,
        nestedNodes: closeAllNodes(node.nestedNodes),
      };
    });
    setNodesLocal(closedNodes);
  };

  const closeAllNodes = (nodes) => {
    return nodes.map((node) => {
      return {
        ...node,
        open: false,
        nestedNodes: closeAllNodes(node.nestedNodes),
      };
    });
  };

  const openAllFunc = () => {
    const openedNodes = nodesLocal().map((node) => {
      return {
        ...node,
        open: true,
        nestedNodes: openAllNodes(node.nestedNodes),
      };
    });
    setNodesLocal(openedNodes);
  };

  const openAllNodes = (nodes) => {
    return nodes.map((node) => {
      return {
        ...node,
        open: true,
        nestedNodes: openAllNodes(node.nestedNodes),
      };
    });
  };

  const onClickItem = (type) => {
    setMode(type);
  };

  return (
    <div>
      <Header
        closeAllFunc={closeAllFunc}
        openAllFunc={openAllFunc}
        onClickItem={onClickItem}
        mode={mode()}
      />
      <Forest
        mode={mode()}
        nodes={nodesLocal()}
        onNodeOpen={onNodeOpen}
        onCreateBefore={onCreateBefore}
        onCreateAfter={onCreateAfter}
        onCreateInside={onCreateInside}
        onNodeDelete={onNodeDelete} 
        setHeader={setHeader}
      />
    </div>
  );
}

export default App;
