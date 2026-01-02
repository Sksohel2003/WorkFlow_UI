import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Logger"
      badge="Utility"
      variant="node-logs"
      inputs={[{ id: 'log' }]}
    >
      <div className="node-description">
        Logs data for debugging
      </div>

    </BaseNode>
  );
};
