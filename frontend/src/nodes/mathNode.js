import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Math"
      badge="Logic"
      variant="node-math"
      inputs={[{ id: 'a' }, { id: 'b' }]}
      outputs={[{ id: 'result' }]}
    >
      <div className="node-description">
        Performs mathematical operations
      </div>
    </BaseNode>
  );
};
