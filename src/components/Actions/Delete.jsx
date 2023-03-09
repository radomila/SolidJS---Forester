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
