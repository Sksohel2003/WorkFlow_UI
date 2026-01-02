import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

import './baseNode.css';

/**
 * BaseNode
 *  - Shared layout for all nodes
 *  - Renders title, handles, and custom content
 *  - Eliminates duplicated node code
 */
export const BaseNode = ({
  id,
  title,
  badge,
  inputs = [],
  variant,
  outputs = [],
  children,
}) => {
  const removeNode = useStore((state) => state.removeNode);
  return (
    <div className={`base-node ${variant || ''}`}>
      <button
        className="node-delete"
        onClick={(e) => {
          e.stopPropagation();
          removeNode(id);
        }}
        title="Delete node"
      >
        ×
      </button>
      {/* Input Handles (Left) */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={input.top ? { top: input.top } : undefined}
        />
      ))}

      {/* Node Title */}
      <div className="node-title">{title}</div>

      {badge && <div className="node-badge">{badge}</div>}

      {/* Node-specific content */}
      <div className="node-content">{children}</div>

      {/* Output Handles (Right) */}
      {outputs.map((output) => (
        <Handle
            key={output.id}
            type="source"
            position={Position.Right}
            id={`${id}-${output.id}`}
            style={{
            top: output.top || '50%',
            transform: 'translateY(-50%)',
            }}
            className="node-handle"
        />
      ))}
    </div>
  );
};
