import './draggableNode.css';

export const DraggableNode = ({ type, label, icon}) => {
  const onDragStart = (event) => {
    const appData = { nodeType: type };

    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
    event.target.style.cursor = 'grabbing';
  };

  const onDragEnd = (event) => {
    event.target.style.cursor = 'grab';
  };

  return (
    <div
      className="draggable-node"
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <span className="node-icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
};