import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      badge="Logic"
      variant="node-condition"
      inputs={[{ id: 'value' }]}
      outputs={[
        { id: 'true', top: '35%' },
        { id: 'false', top: '65%' },
      ]}
    >
      <div className="node-description">
        Routes flow based on condition
      </div>
    </BaseNode>
  );
};

