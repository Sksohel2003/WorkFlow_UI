import { BaseNode } from './BaseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Delay"
      badge="Utility"
      variant="node-delay"
      inputs={[{ id: 'input' }]}
      outputs={[{ id: 'output' }]}
    >
      <div className="node-description ">
        Delays execution for a duration
      </div>

    </BaseNode>
  );
};
