const onNodeDelete = (id) => {
  const newNodesDelete = props.nodesLocal().filter((node) => node.id !== id);
  setNodesLocal(newNodesDelete);
};

export default onNodeDelete;