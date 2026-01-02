import { BaseNode } from './BaseNode';

export const APINode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      badge="Input"
      title="Utility"
      variant="node-api"
      inputs={[{ id: 'request' }]}
      outputs={[{ id: 'response' }]}
    >
      <div className="node-description">
        Call API
      </div>
    </BaseNode>
  );
};
